from repositories.base_repository import BaseRepository
from models.interview_question_model import InterviewQuestion

class InterviewQuestionRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, InterviewQuestion, custom_id_field="question_id")
