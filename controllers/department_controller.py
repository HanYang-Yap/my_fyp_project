from flask import Blueprint, jsonify, request
from services.department_service import DepartmentService

def create_department_controller(db):
    """Initialize Flask Blueprint and bind Department API"""
    department_bp = Blueprint('department_bp', __name__)
    department_service = DepartmentService(db)

    @department_bp.route('/departments', methods=['POST'])
    def create_department():
        """Create a new department"""
        try:
            data = request.get_json()
            department_id = data.get('department_id')
            school_name = data.get('school_name')
            department_name = data.get('department_name')

            if not department_id or not school_name or not department_name:
                return jsonify({"error": "Missing required fields"}), 400

            department = department_service.create_department(department_id, school_name, department_name)
            return jsonify(department.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @department_bp.route('/departments/<department_id>', methods=['GET'])
    def get_department(department_id):
        """Get department information"""
        department = department_service.get(department_id)
        if department:
            return jsonify(department.to_dict()), 200
        return jsonify({"error": "Department not found"}), 404

    @department_bp.route('/departments/<department_id>', methods=['PUT'])
    def update_department(department_id):
        """Update department information"""
        try:
            data = request.get_json()
            school_name = data.get('school_name')
            department_name = data.get('department_name')

            updated_department = department_service.update_department(department_id, school_name, department_name)
            if updated_department:
                return jsonify(updated_department.to_dict()), 200
            return jsonify({"error": "Department not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @department_bp.route('/departments/<department_id>', methods=['DELETE'])
    def delete_department(department_id):
        """Delete a department"""
        deleted = department_service.delete_department(department_id)
        if deleted:
            return jsonify({"message": "Department deleted successfully"}), 200
        return jsonify({"error": "Department not found"}), 404

    return department_bp
