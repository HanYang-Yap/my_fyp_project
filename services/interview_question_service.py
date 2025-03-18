from services.base_service import BaseService
from repositories.interview_question_repository import InterviewQuestionRepository
from models.interview_question_model import InterviewQuestion

class InterviewQuestionService(BaseService):
    def __init__(self, db):
        interview_question_repository = InterviewQuestionRepository(db)
        super().__init__(interview_question_repository)

    def create_interview_question(self, question_id, diag_sect_code, diag_type_code, question_text):
        """Create a new interview question"""
        if not question_id or not diag_sect_code or not diag_type_code or not question_text:
            raise ValueError("question_id, diag_sect_code, diag_type_code, and question_text cannot be empty")
        
        interview_question = InterviewQuestion(question_id, diag_sect_code, diag_type_code, question_text)
        self.repository.add(interview_question)
        return interview_question

    def update_interview_question(self, question_id, question_text):
        """Update interview question information"""
        existing_interview_question = self.get(question_id)
        if not existing_interview_question:
            return None

        existing_interview_question.question_text = question_text
        self.repository.update(existing_interview_question)
        return existing_interview_question

    def delete_interview_question(self, question_id):
        """Delete an interview question"""
        existing_interview_question = self.get(question_id)
        if not existing_interview_question:
            return False
        
        self.repository.delete(question_id)
        return True
