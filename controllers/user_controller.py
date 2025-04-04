from flask import Blueprint, jsonify, request
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

            if not user_id or not name or not email or not password_hash or not role_id:
                return jsonify({"error": "Missing required fields"}), 400

            user = user_service.create_user(user_id, name, email, password_hash, role_id)
            return jsonify(user.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @user_bp.route('/users/<user_id>', methods=['GET'])
    def get_user(user_id):
        """Get user information"""
        user = user_service.get(user_id)
        if user:
            return jsonify(user.to_dict()), 200
        return jsonify({"error": "User not found"}), 404

    @user_bp.route('/users/<user_id>', methods=['PUT'])
    def update_user(user_id):
        """Update user information"""
        try:
            data = request.get_json()
            name = data.get('name')
            email = data.get('email')
            role_id = data.get('role_id')

            updated_user = user_service.update_user(user_id, name, email, role_id)
            if updated_user:
                return jsonify(updated_user.to_dict()), 200
            return jsonify({"error": "User not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @user_bp.route('/users/<user_id>', methods=['DELETE'])
    def delete_user(user_id):
        """Delete a user"""
        deleted = user_service.delete_user(user_id)
        if deleted:
            return jsonify({"message": "User deleted successfully"}), 200
        return jsonify({"error": "User not found"}), 404

    return user_bp
