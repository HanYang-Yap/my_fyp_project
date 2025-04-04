from flask import Blueprint, jsonify, request
from services.diag_type_service import DiagTypeService

def create_diag_type_controller(db):
    """Initialize Flask Blueprint and bind Diagnostic Type API"""
    diag_type_bp = Blueprint('diag_type_bp', __name__)
    diag_type_service = DiagTypeService(db)

    @diag_type_bp.route('/diag_types', methods=['POST'])
    def create_diag_type():
        """Create a new diagnostic type"""
        try:
            data = request.get_json()
            code = data.get('code')
            definition = data.get('definition')

            if not code or not definition:
                return jsonify({"error": "Missing required fields"}), 400

            diag_type = diag_type_service.create_diag_type(code, definition)
            return jsonify(diag_type.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @diag_type_bp.route('/diag_types/<code>', methods=['GET'])
    def get_diag_type(code):
        """Get diagnostic type information"""
        diag_type = diag_type_service.get(code)
        if diag_type:
            return jsonify(diag_type.to_dict()), 200
        return jsonify({"error": "Diagnostic type not found"}), 404

    @diag_type_bp.route('/diag_types/<code>', methods=['PUT'])
    def update_diag_type(code):
        """Update diagnostic type information"""
        try:
            data = request.get_json()
            definition = data.get('definition')

            updated_diag_type = diag_type_service.update_diag_type(code, definition)
            if updated_diag_type:
                return jsonify(updated_diag_type.to_dict()), 200
            return jsonify({"error": "Diagnostic type not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @diag_type_bp.route('/diag_types/<code>', methods=['DELETE'])
    def delete_diag_type(code):
        """Delete diagnostic type"""
        deleted = diag_type_service.delete_diag_type(code)
        if deleted:
            return jsonify({"message": "Diagnostic type deleted successfully"}), 200
        return jsonify({"error": "Diagnostic type not found"}), 404

    return diag_type_bp
