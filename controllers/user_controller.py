# controllers/user_controller.py
from flask import Blueprint, jsonify, request, current_app
from flask_mail import Message
from extensions import mail
import hashlib

from repositories.user_repository import UserRepository
from repositories.otp_repository import OTPRepository
from services.user_service import UserService

import random
import string
import time

def generate_otp_code():
        return ''.join(random.choices(string.digits, k=6))

def create_user_controller(db):
    """初始化 Flask Blueprint 並綁定 User API"""
    user_bp = Blueprint('user_bp', __name__)
    user_service = UserService(db)

    @user_bp.route('/users', methods=['POST'])
    def create_user():
        """建立新使用者"""
        try:
            data = request.get_json()
            user_id = data.get('user_id')
            name = data.get('name')
            email = data.get('email')
            password = data.get('password')
            role_id = data.get('role_id', 'student')  # 預設角色為 student

            # 檢查欄位
            if not all([user_id, name, email, password]):
                return jsonify({"error": "缺少必要欄位"}), 400

            # 產生密碼 hash
            password_hash = hashlib.sha256(password.encode()).hexdigest()

            # 建立使用者
            user = user_service.create_user(
                user_id=user_id,
                name=name,
                email=email,
                password_hash=password_hash,
                role_id=role_id
            )

            return jsonify(user.to_dict()), 201

        except Exception as e:
            print("❌ 發生錯誤：", e)
            return jsonify({"error": str(e)}), 500

    @user_bp.route('/users', methods=['GET'])
    def list_users():
        return jsonify({"message": "這是 GET /api/users 的測試回應"})

    @user_bp.route('/users/<user_id>', methods=['GET'])
    def get_user(user_id):
        """獲取使用者資訊"""
        user = user_service.get_user(user_id)
        if user:
            return jsonify(user.to_dict()), 200
        return jsonify({"error": "找不到該使用者"}), 404

    @user_bp.route('/users/<user_id>', methods=['PUT'])
    def update_user(user_id):
        """更新使用者資訊"""
        try:
            data = request.get_json()
            name = data.get('name')
            email = data.get('email')

            updated_user = user_service.update_user(user_id, name, email)
            if updated_user:
                return jsonify(updated_user.to_dict()), 200
            return jsonify({"error": "找不到該使用者"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @user_bp.route('/users/<user_id>', methods=['DELETE'])
    def delete_user(user_id):
        """刪除使用者"""
        deleted = user_service.delete_user(user_id)
        if deleted:
            return jsonify({"message": "使用者刪除成功"}), 200
        return jsonify({"error": "找不到該使用者"}), 404

    @user_bp.route('/login', methods=['POST'])
    def login_user():
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({"error": "請輸入 email 與密碼"}), 400

        # 查詢使用者（你需要實作 user_service.get_by_email）
        user = user_service.get_by_email(email)
        if not user:
            return jsonify({"error": "找不到使用者"}), 404

        # 比對密碼
        password_hash = hashlib.sha256(password.encode()).hexdigest()
        if user.password != password_hash:
            return jsonify({"error": "密碼錯誤"}), 401

        # ✅ 登入成功，回傳訊息
        return jsonify({
            "message": "登入成功",
            "user": user.to_dict()
        }), 200

    @user_bp.route('/request-otp', methods=['POST'])
    def request_otp():
        """請求 OTP 並寄送 Email"""
        data = request.get_json()
        email = data.get('email')

        if not email:
            return jsonify({"error": "請提供 email"}), 400

        otp_code = generate_otp_code()
        OTPRepository.save_otp(email, otp_code)

        # 建立郵件
        try:
            msg = Message(
                subject="您的 UniTopia 驗證碼",
                sender=current_app.config['MAIL_USERNAME'],
                recipients=[email],
                body=f"您好，這是您的驗證碼：{otp_code}，請於 5 分鐘內輸入完成驗證。"
            )
            mail.send(msg)
            return jsonify({"message": "OTP 已發送至您的信箱"}), 200
        except Exception as e:
            return jsonify({"error": f"無法發送驗證信：{str(e)}"}), 500

    @user_bp.route('/verify-otp', methods=['POST'])
    def verify_otp():
        """驗證 OTP"""
        data = request.get_json()
        email = data.get('email')
        user_otp = data.get('otp')

        if not email or not user_otp:
            return jsonify({"error": "請提供 email 和 OTP"}), 400

        otp_record = OTPRepository.get_otp(email)

        if not otp_record:
            return jsonify({"error": "請先請求 OTP"}), 400

        if otp_record.is_expired():
            OTPRepository.delete_otp(email)
            return jsonify({"error": "OTP 已過期，請重新請求"}), 400

        if user_otp == otp_record.otp_code:
            OTPRepository.delete_otp(email)  # 驗證成功後刪除 OTP
            return jsonify({"message": "OTP 驗證成功"}), 200
        else:
            return jsonify({"error": "OTP 錯誤"}), 400

    return user_bp