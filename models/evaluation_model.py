# evaluation_model.py
from datetime import datetime
from models.user_model import User

class Evaluation:
    def __init__(self, evaluation_id, user_id, file_id, scores, score_labels, suggestions, created_at=None):
        self.evaluation_id = evaluation_id
        self.user_id = user_id
        self.file_id = file_id
        self.scores = scores
        self.score_labels = score_labels
        self.suggestions = suggestions
        self.created_at = created_at or datetime.utcnow()

    def to_dict(self):
        return {
            "evaluation_id": self.evaluation_id,
            "user_id": self.user_id,
            "file_id": self.file_id,
            "scores": self.scores,
            "score_labels": self.score_labels,
            "suggestions": self.suggestions,
            "created_at": self.created_at
        }

    @staticmethod
    def from_dict(data):
        return Evaluation(
            evaluation_id=data.get("evaluation_id"),
            user_id=data.get("user_id"),
            file_id=data.get("file_id"),
            scores=data.get("scores"),
            score_labels=data.get("score_labels"),
            suggestions=data.get("suggestions"),
            created_at=data.get("created_at")
        )