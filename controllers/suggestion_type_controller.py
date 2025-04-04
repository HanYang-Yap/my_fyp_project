from flask import Blueprint, jsonify, request
from services.suggestion_type_service import SuggestionTypeService

def create_suggestion_type_controller(db):
    """Initialize Flask Blueprint and bind Suggestion Type API"""
    suggestion_type_bp = Blueprint('suggestion_type_bp', __name__)
    suggestion_type_service = SuggestionTypeService(db)

    @suggestion_type_bp.route('/suggestion_types', methods=['POST'])
    def create_suggestion_type():
        """Create a new suggestion type"""
        try:
            data = request.get_json()
            suggestion_type_id = data.get('suggestion_type_id')
            diag_sect_code = data.get('diag_sect_code')
            diag_type_code = data.get('diag_type_code')
            type_name = data.get('type_name')

            if not suggestion_type_id or not diag_sect_code or not diag_type_code or not type_name:
                return jsonify({"error": "Missing required fields"}), 400

            suggestion_type = suggestion_type_service.create_suggestion_type(suggestion_type_id, diag_sect_code, diag_type_code, type_name)
            return jsonify(suggestion_type.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @suggestion_type_bp.route('/suggestion_types/<suggestion_type_id>', methods=['GET'])
    def get_suggestion_type(suggestion_type_id):
        """Get suggestion type information"""
        suggestion_type = suggestion_type_service.get(suggestion_type_id)
        if suggestion_type:
            return jsonify(suggestion_type.to_dict()), 200
        return jsonify({"error": "Suggestion type not found"}), 404

    @suggestion_type_bp.route('/suggestion_types/<suggestion_type_id>', methods=['PUT'])
    def update_suggestion_type(suggestion_type_id):
        """Update suggestion type information"""
        try:
            data = request.get_json()
            type_name = data.get('type_name')

            updated_suggestion_type = suggestion_type_service.update_suggestion_type(suggestion_type_id, type_name)
            if updated_suggestion_type:
                return jsonify(updated_suggestion_type.to_dict()), 200
            return jsonify({"error": "Suggestion type not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @suggestion_type_bp.route('/suggestion_types/<suggestion_type_id>', methods=['DELETE'])
    def delete_suggestion_type(suggestion_type_id):
        """Delete suggestion type"""
        deleted = suggestion_type_service.delete_suggestion_type(suggestion_type_id)
        if deleted:
            return jsonify({"message": "Suggestion type deleted successfully"}), 200
        return jsonify({"error": "Suggestion type not found"}), 404

    return suggestion_type_bp
