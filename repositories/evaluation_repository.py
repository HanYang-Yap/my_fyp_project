# evaluation_repository.py
from models.evaluation_model import Evaluation
from repositories.base_repository import BaseRepository

class EvaluationRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, Evaluation, custom_id_field="evaluation_id")