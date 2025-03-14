# controllers/user_controller.py
from flask import Blueprint, jsonify, request

from repositories.user_repository import UserRepository
from services.user_service import UserService


def create_user_controller(db):
    """初始化 Flask Blueprint 並綁定 User API"""
    user_bp = Blueprint('user_bp', __name__)
    user_service = UserService(db)

    @user_bp.route('/users', methods=['POST'])
    def create_user():
        """Create a new user"""
        try:
            data = request.get_json()
            user_id = data.get('user_id')
            name = data.get('name')
            email = data.get('email')
            password_hash = data.get('password_hash')
            role_id = data.get('role_id')
            department_id = data.get('department_id')

            if not user_id or not name or not email or not password_hash or not role_id or not department_id:
                return jsonify({"error": "Missing user_id, name, or email, or password_hash, or role_id, or department_id"}), 400

            user = user_service.create_user(user_id, name, email, password_hash, role_id, department_id)
            return jsonify(user.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @user_bp.route('/users/<user_id>', methods=['GET'])
    def get_user(user_id):
        """獲取使用者資訊"""
        user = user_service.get_user(user_id)
        if user:
            return jsonify(user.to_dict()), 200
        return jsonify({"error": "找不到該使用者 Couldn't find this user"}), 404

    @user_bp.route('/users/<user_id>', methods=['PUT'])
    def update_user(user_id):
        """更新使用者資訊"""
        try:
            data = request.get_json()
            name = data.get('name')
            email = data.get('email')
            role_id = data.get('role_id')
            department_id = data.get('department_id')

            # Call the service method to update the user, without needing password_hash
            updated_user = user_service.update_user(user_id, name, email, role_id, department_id)
            
            if updated_user:
                return jsonify(updated_user.to_dict()), 200
            return jsonify({"error": "找不到該使用者 Couldn't find this user"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @user_bp.route('/users/<user_id>', methods=['DELETE'])
    def delete_user(user_id):
        """刪除使用者"""
        deleted = user_service.delete_user(user_id)
        if deleted:
            return jsonify({"message": "使用者刪除成功 User deleted successfully"}), 200
        return jsonify({"error": "找不到該使用者 Couldn't find this user"}), 404

    return user_bp
