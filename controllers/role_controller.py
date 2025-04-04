from flask import Blueprint, jsonify, request
from services.role_service import RoleService

def create_role_controller(db):
    """Initialize Flask Blueprint and bind Role API"""
    role_bp = Blueprint('role_bp', __name__)
    role_service = RoleService(db)

    @role_bp.route('/roles', methods=['POST'])
    def create_role():
        """Create a new role"""
        try:
            data = request.get_json()
            role_id = data.get('role_id')
            role_name = data.get('role_name')

            if not role_id or not role_name:
                return jsonify({"error": "Missing required fields"}), 400

            role = role_service.create_role(role_id, role_name)
            return jsonify(role.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @role_bp.route('/roles/<role_id>', methods=['GET'])
    def get_role(role_id):
        """Get role information"""
        role = role_service.get(role_id)
        if role:
            return jsonify(role.to_dict()), 200
        return jsonify({"error": "Role not found"}), 404

    @role_bp.route('/roles/<role_id>', methods=['PUT'])
    def update_role(role_id):
        """Update role information"""
        try:
            data = request.get_json()
            role_name = data.get('role_name')

            updated_role = role_service.update_role(role_id, role_name)
            if updated_role:
                return jsonify(updated_role.to_dict()), 200
            return jsonify({"error": "Role not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @role_bp.route('/roles/<role_id>', methods=['DELETE'])
    def delete_role(role_id):
        """Delete a role"""
        deleted = role_service.delete_role(role_id)
        if deleted:
            return jsonify({"message": "Role deleted successfully"}), 200
        return jsonify({"error": "Role not found"}), 404

    return role_bp
