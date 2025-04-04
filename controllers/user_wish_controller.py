from flask import Blueprint, jsonify, request
from services.user_wish_service import UserWishService

def create_user_wish_controller(db):
    """Initialize Flask Blueprint and bind UserWish API"""
    user_wish_bp = Blueprint('user_wish_bp', __name__)
    user_wish_service = UserWishService(db)

    @user_wish_bp.route('/user_wish', methods=['POST'])
    def create_user_wish():
        """Create a new user wish"""
        try:
            data = request.get_json()
            user_id = data.get('user_id')
            department_id = data.get('department_id')
            wish_order = data.get('wish_order')

            if not user_id or not department_id or not wish_order:
                return jsonify({"error": "Missing required fields"}), 400

            user_wish = user_wish_service.create_user_wish(user_id, department_id, wish_order)
            return jsonify(user_wish.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @user_wish_bp.route('/user_wish/<user_id>', methods=['GET'])
    def get_user_wish(user_id):
        """Get user wish"""
        user_wish = user_wish_service.get(user_id)
        if user_wish:
            return jsonify(user_wish.to_dict()), 200
        return jsonify({"error": "User wish not found"}), 404

    @user_wish_bp.route('/user_wish/<user_id>', methods=['PUT'])
    def update_user_wish(user_id):
        """Update user wish"""
        try:
            data = request.get_json()
            department_id = data.get('department_id')
            wish_order = data.get('wish_order')

            updated_user_wish = user_wish_service.update_user_wish(user_id, department_id, wish_order)
            if updated_user_wish:
                return jsonify(updated_user_wish.to_dict()), 200
            return jsonify({"error": "User wish not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @user_wish_bp.route('/user_wish/<user_id>', methods=['DELETE'])
    def delete_user_wish(user_id):
        """Delete a user wish"""
        deleted = user_wish_service.delete_user_wish(user_id)
        if deleted:
            return jsonify({"message": "User wish deleted successfully"}), 200
        return jsonify({"error": "User wish not found"}), 404

    return user_wish_bp
