from flask import jsonify, request

class BaseController:
    def __init__(self, service):
        self.service = service

    def create(self):
        """Create a new resource"""
        try:
            data = request.get_json()
            obj = self.service.create(data)
            return jsonify(obj.to_dict()), 201  # Return 201 Created status
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    def get(self, obj_id):
        """Get an existing resource"""
        obj = self.service.get(obj_id)
        if obj:
            return jsonify(obj.to_dict()), 200
        return jsonify({"error": "Resource not found"}), 404  # Clear error message

    def update(self, obj_id):
        """Update an existing resource"""
        try:
            data = request.get_json()
            obj = self.service.update(obj_id, data)
            if obj:
                return jsonify(obj.to_dict()), 200
            return jsonify({"error": "Resource not found"}), 404  # Clear error message
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    def delete(self, obj_id):
        """Delete a resource"""
        if self.service.delete(obj_id):
            return jsonify({"message": "Resource deleted successfully"}), 200  # Clear success message
        return jsonify({"error": "Resource not found"}), 404  # Clear error message
