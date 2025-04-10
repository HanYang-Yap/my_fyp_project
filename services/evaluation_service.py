from services.base_service import BaseService
from repositories.evaluation_repository import EvaluationRepository
from models.evaluation_model import Evaluation
from uuid import uuid4

class EvaluationService(BaseService):
    def __init__(self, db):
        evaluation_repository = EvaluationRepository(db)
        super().__init__(evaluation_repository)

    def create_evaluation(self, user_id, file_id, scores, score_labels, suggestions):
        """Create a new evaluation"""
        if not user_id or not file_id or not scores or not score_labels or not suggestions:
            raise ValueError("user_id, file_id, scores, score_labels, and suggestions cannot be empty")

        evaluation_id = str(uuid4())
        evaluation = Evaluation(
            evaluation_id=evaluation_id,
            user_id=user_id,
            file_id=file_id,
            scores=scores,
            score_labels=score_labels,
            suggestions=suggestions
        )
        self.repository.add(evaluation)
        return evaluation

    def update_evaluation(self, evaluation_id, scores=None, suggestions=None):
        """Update evaluation information"""
        existing_evaluation = self.get(evaluation_id)
        if not existing_evaluation:
            return None

        if scores is not None:
            existing_evaluation.scores = scores

        if suggestions is not None:
            existing_evaluation.suggestions = suggestions

        self.repository.update(existing_evaluation)
        return existing_evaluation

    def delete_evaluation(self, evaluation_id):
        """Delete an evaluation"""
        existing_evaluation = self.get(evaluation_id)
        if not existing_evaluation:
            return False

        self.repository.delete(evaluation_id)
        return True

    def get_total_score(self, evaluation_id):
        """Get the total score (the last item in the scores list)"""
        evaluation = self.get(evaluation_id)
        if not evaluation:
            return None
        return evaluation.scores[-1]

    def get_radar_scores(self, evaluation_id):
        """Get radar chart scores (all items except the last one in the scores list)"""
        evaluation = self.get(evaluation_id)
        if not evaluation:
            return None
        return evaluation.scores[:-1]

    def get_suggestions(self, evaluation_id):
        """Get the suggestions"""
        evaluation = self.get(evaluation_id)
        if not evaluation:
            return None
        return evaluation.suggestions
    def query(self, filters):
        """
        查詢符合條件的 evaluation 文件，例如 filters = {"user_id": ..., "file_id": ...}
        """
        return self.repository.query(filters)