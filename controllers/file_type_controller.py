from flask import Blueprint, jsonify, request
from services.file_type_service import FileTypeService

def create_file_type_controller(db):
    """Initialize Flask Blueprint and bind FileType API"""
    file_type_bp = Blueprint('file_type_bp', __name__)
    file_type_service = FileTypeService(db)

    @file_type_bp.route('/file_types', methods=['POST'])
    def create_file_type():
        """Create a new file type"""
        try:
            data = request.get_json()
            id = data.get('id')
            type_name = data.get('type_name')

            if not id or not type_name:
                return jsonify({"error": "Missing required fields"}), 400

            file_type = file_type_service.create_file_type(id, type_name)
            return jsonify(file_type.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @file_type_bp.route('/file_types/<id>', methods=['GET'])
    def get_file_type(id):
        """Get file type"""
        file_type = file_type_service.get(id)
        if file_type:
            return jsonify(file_type.to_dict()), 200
        return jsonify({"error": "File type not found"}), 404

    @file_type_bp.route('/file_types/<id>', methods=['PUT'])
    def update_file_type(id):
        """Update file type"""
        try:
            data = request.get_json()
            type_name = data.get('type_name')

            updated_file_type = file_type_service.update_file_type(id, type_name)
            if updated_file_type:
                return jsonify(updated_file_type.to_dict()), 200
            return jsonify({"error": "File type not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @file_type_bp.route('/file_types/<id>', methods=['DELETE'])
    def delete_file_type(id):
        """Delete file type"""
        deleted = file_type_service.delete_file_type(id)
        if deleted:
            return jsonify({"message": "File type deleted successfully"}), 200
        return jsonify({"error": "File type not found"}), 404

    return file_type_bp
