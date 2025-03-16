from flask import Blueprint, jsonify, request
from services.radar_data_service import RadarDataService

def create_radar_data_controller(db):
    """Initialize Flask Blueprint and bind RadarData API"""
    radar_data_bp = Blueprint('radar_data_bp', __name__)
    radar_data_service = RadarDataService(db)

    @radar_data_bp.route('/radar_data', methods=['POST'])
    def create_radar_data():
        """Create new radar data"""
        try:
            data = request.get_json()
            radar_id = data.get('radar_id')
            user_id = data.get('user_id')
            typos_punctuation = data.get('typos_punctuation')
            off_topic = data.get('off_topic')
            conciseness = data.get('conciseness')
            expansion = data.get('expansion')
            structure = data.get('structure')
            completeness = data.get('completeness')

            if not radar_id or not user_id or not typos_punctuation or not off_topic or \
               not conciseness or not expansion or not structure or not completeness:
                return jsonify({"error": "Missing required fields"}), 400

            radar_data = radar_data_service.create_radar_data(radar_id, user_id, typos_punctuation, 
                                                              off_topic, conciseness, expansion, 
                                                              structure, completeness)
            return jsonify(radar_data.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @radar_data_bp.route('/radar_data/<radar_id>', methods=['GET'])
    def get_radar_data(radar_id):
        """Get radar data"""
        radar_data = radar_data_service.get(radar_id)
        if radar_data:
            return jsonify(radar_data.to_dict()), 200
        return jsonify({"error": "Radar data not found"}), 404

    @radar_data_bp.route('/radar_data/<radar_id>', methods=['PUT'])
    def update_radar_data(radar_id):
        """Update radar data"""
        try:
            data = request.get_json()
            typos_punctuation = data.get('typos_punctuation')
            off_topic = data.get('off_topic')
            conciseness = data.get('conciseness')
            expansion = data.get('expansion')
            structure = data.get('structure')
            completeness = data.get('completeness')

            updated_radar_data = radar_data_service.update_radar_data(radar_id, typos_punctuation, 
                                                                     off_topic, conciseness, 
                                                                     expansion, structure, completeness)
            if updated_radar_data:
                return jsonify(updated_radar_data.to_dict()), 200
            return jsonify({"error": "Radar data not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @radar_data_bp.route('/radar_data/<radar_id>', methods=['DELETE'])
    def delete_radar_data(radar_id):
        """Delete radar data"""
        deleted = radar_data_service.delete_radar_data(radar_id)
        if deleted:
            return jsonify({"message": "Radar data deleted successfully"}), 200
        return jsonify({"error": "Radar data not found"}), 404

    return radar_data_bp
