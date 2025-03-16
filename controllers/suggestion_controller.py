from flask import Blueprint, jsonify, request
from services.suggestion_service import SuggestionService

def create_suggestion_controller(db):
    """Initialize Flask Blueprint and bind Suggestion API"""
    suggestion_bp = Blueprint('suggestion_bp', __name__)
    suggestion_service = SuggestionService(db)

    @suggestion_bp.route('/suggestions', methods=['POST'])
    def create_suggestion():
        """Create a new suggestion"""
        try:
            data = request.get_json()
            suggestion_id = data.get('suggestion_id')
            portfolio_id = data.get('portfolio_id')
            suggestion_type_id = data.get('suggestion_type_id')
            original_text = data.get('original_text')
            suggested_text = data.get('suggested_text')

            if not suggestion_id or not portfolio_id or not suggestion_type_id or not original_text or not suggested_text:
                return jsonify({"error": "Missing required fields"}), 400

            suggestion = suggestion_service.create_suggestion(suggestion_id, portfolio_id, suggestion_type_id, original_text, suggested_text)
            return jsonify(suggestion.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @suggestion_bp.route('/suggestions/<suggestion_id>', methods=['GET'])
    def get_suggestion(suggestion_id):
        """Get a suggestion"""
        suggestion = suggestion_service.get(suggestion_id)
        if suggestion:
            return jsonify(suggestion.to_dict()), 200
        return jsonify({"error": "Suggestion not found"}), 404

    @suggestion_bp.route('/suggestions/<suggestion_id>', methods=['PUT'])
    def update_suggestion(suggestion_id):
        """Update a suggestion"""
        try:
            data = request.get_json()
            original_text = data.get('original_text')
            suggested_text = data.get('suggested_text')

            updated_suggestion = suggestion_service.update_suggestion(suggestion_id, original_text, suggested_text)
            if updated_suggestion:
                return jsonify(updated_suggestion.to_dict()), 200
            return jsonify({"error": "Suggestion not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @suggestion_bp.route('/suggestions/<suggestion_id>', methods=['DELETE'])
    def delete_suggestion(suggestion_id):
        """Delete a suggestion"""
        deleted = suggestion_service.delete_suggestion(suggestion_id)
        if deleted:
            return jsonify({"message": "Suggestion deleted successfully"}), 200
        return jsonify({"error": "Suggestion not found"}), 404

    return suggestion_bp
