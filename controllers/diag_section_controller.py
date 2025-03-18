from flask import Blueprint, jsonify, request
from services.diag_section_service import DiagSectionService

def create_diag_section_controller(db):
    """Initialize Flask Blueprint and bind Diagnostic Section API"""
    diag_section_bp = Blueprint('diag_section_bp', __name__)
    diag_section_service = DiagSectionService(db)

    @diag_section_bp.route('/diag_sections', methods=['POST'])
    def create_diag_section():
        """Create a new diagnostic section"""
        try:
            data = request.get_json()
            code = data.get('code')
            definition = data.get('definition')

            if not code or not definition:
                return jsonify({"error": "Missing required fields"}), 400

            diag_section = diag_section_service.create_diag_section(code, definition)
            return jsonify(diag_section.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @diag_section_bp.route('/diag_sections/<code>', methods=['GET'])
    def get_diag_section(code):
        """Get diagnostic section information"""
        diag_section = diag_section_service.get(code)
        if diag_section:
            return jsonify(diag_section.to_dict()), 200
        return jsonify({"error": "Diagnostic section not found"}), 404

    @diag_section_bp.route('/diag_sections/<code>', methods=['PUT'])
    def update_diag_section(code):
        """Update diagnostic section information"""
        try:
            data = request.get_json()
            definition = data.get('definition')

            updated_diag_section = diag_section_service.update_diag_section(code, definition)
            if updated_diag_section:
                return jsonify(updated_diag_section.to_dict()), 200
            return jsonify({"error": "Diagnostic section not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @diag_section_bp.route('/diag_sections/<code>', methods=['DELETE'])
    def delete_diag_section(code):
        """Delete diagnostic section"""
        deleted = diag_section_service.delete_diag_section(code)
        if deleted:
            return jsonify({"message": "Diagnostic section deleted successfully"}), 200
        return jsonify({"error": "Diagnostic section not found"}), 404

    return diag_section_bp
