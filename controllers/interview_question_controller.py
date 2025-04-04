from flask import Blueprint, jsonify, request
from services.interview_question_service import InterviewQuestionService

def create_interview_question_controller(db):
    """Initialize Flask Blueprint and bind Interview Question API"""
    interview_question_bp = Blueprint('interview_question_bp', __name__)
    interview_question_service = InterviewQuestionService(db)

    @interview_question_bp.route('/interview_questions', methods=['POST'])
    def create_interview_question():
        """Create a new interview question"""
        try:
            data = request.get_json()
            question_id = data.get('question_id')
            diag_sect_code = data.get('diag_sect_code')
            diag_type_code = data.get('diag_type_code')
            question_text = data.get('question_text')

            if not question_id or not diag_sect_code or not diag_type_code or not question_text:
                return jsonify({"error": "Missing required fields"}), 400

            interview_question = interview_question_service.create_interview_question(question_id, diag_sect_code, diag_type_code, question_text)
            return jsonify(interview_question.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @interview_question_bp.route('/interview_questions/<question_id>', methods=['GET'])
    def get_interview_question(question_id):
        """Get interview question information"""
        interview_question = interview_question_service.get(question_id)
        if interview_question:
            return jsonify(interview_question.to_dict()), 200
        return jsonify({"error": "Interview question not found"}), 404

    @interview_question_bp.route('/interview_questions/<question_id>', methods=['PUT'])
    def update_interview_question(question_id):
        """Update interview question"""
        try:
            data = request.get_json()
            question_text = data.get('question_text')

            updated_interview_question = interview_question_service.update_interview_question(question_id, question_text)
            if updated_interview_question:
                return jsonify(updated_interview_question.to_dict()), 200
            return jsonify({"error": "Interview question not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @interview_question_bp.route('/interview_questions/<question_id>', methods=['DELETE'])
    def delete_interview_question(question_id):
        """Delete interview question"""
        deleted = interview_question_service.delete_interview_question(question_id)
        if deleted:
            return jsonify({"message": "Interview question deleted successfully"}), 200
        return jsonify({"error": "Interview question not found"}), 404

    return interview_question_bp
