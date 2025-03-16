from models.suggestion_model import Suggestion
from repositories.suggestion_repository import SuggestionRepository
from services.base_service import BaseService

class SuggestionService(BaseService):
    def __init__(self, db):
        suggestion_repository = SuggestionRepository(db)
        super().__init__(suggestion_repository)

    def create_suggestion(self, suggestion_id, portfolio_id, suggestion_type_id, original_text, suggested_text):
        """Create a new suggestion"""
        if not suggestion_id or not portfolio_id or not suggestion_type_id or not original_text or not suggested_text:
            raise ValueError("suggestion_id, portfolio_id, suggestion_type_id, original_text, and suggested_text cannot be empty")

        suggestion = Suggestion(suggestion_id, portfolio_id, suggestion_type_id, original_text, suggested_text)
        self.repository.add(suggestion)
        return suggestion

    def update_suggestion(self, suggestion_id, original_text, suggested_text):
        """Update suggestion information"""
        existing_suggestion = self.get(suggestion_id)
        if not existing_suggestion:
            return None

        existing_suggestion.original_text = original_text
        existing_suggestion.suggested_text = suggested_text
        self.repository.update(existing_suggestion)
        return existing_suggestion

    def delete_suggestion(self, suggestion_id):
        """Delete a suggestion"""
        existing_suggestion = self.get(suggestion_id)
        if not existing_suggestion:
            return False

        self.repository.delete(suggestion_id)
        return True
