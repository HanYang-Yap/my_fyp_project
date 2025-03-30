from flask import Blueprint, request, jsonify
from services.faq_service import FAQService

def create_faq_controller(db):
    faq_bp = Blueprint('faq_bp', __name__)
    faq_service = FAQService(db)

    @faq_bp.route('/faqs', methods=['POST'])
    def create_faq():
        try:
            data = request.get_json()
            type = data.get("type")
            title = data.get("title")
            description = data.get("description")
            contact_email = data.get("contact_email")

            if not type or not title or not description:
                return jsonify({"error": "Missing required fields"}), 400

            faq = faq_service.create_faq(type, title, description, contact_email)
            return jsonify(faq.to_dict()), 201
        except Exception as e:
            import traceback
            traceback.print_exc()
            return jsonify({"error": str(e)}), 500

    @faq_bp.route('/faqs/<type>', methods=['GET'])
    def get_faq(type):
        try:
            faq = faq_service.get(type)
            if faq:
                return jsonify(faq.to_dict()), 200
            return jsonify({"error": "FAQ not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @faq_bp.route('/faqs/<type>', methods=['PUT'])
    def update_faq(type):
        try:
            data = request.get_json()
            title = data.get("title")
            description = data.get("description")
            contact_email = data.get("contact_email")

            updated_faq = faq_service.update_faq(type, title, description, contact_email)
            if updated_faq:
                return jsonify(updated_faq.to_dict()), 200
            return jsonify({"error": "FAQ not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @faq_bp.route('/faqs/<type>', methods=['DELETE'])
    def delete_faq(type):
        try:
            deleted = faq_service.delete_faq(type)
            if deleted:
                return jsonify({"message": "FAQ deleted successfully"}), 200
            return jsonify({"error": "FAQ not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @faq_bp.route('/faqs/all', methods=['GET'])
    def get_all_faqs():
        try:
            all_faqs = faq_service.get_all_faqs()
            return jsonify([faq.to_dict() for faq in all_faqs]), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return faq_bp