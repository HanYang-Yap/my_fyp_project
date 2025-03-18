from models.suggestion_type_model import SuggestionType
from repositories.suggestion_type_repository import SuggestionTypeRepository
from services.base_service import BaseService

class SuggestionTypeService(BaseService):
    def __init__(self, db):
        suggestion_type_repository = SuggestionTypeRepository(db)
        super().__init__(suggestion_type_repository)

    def create_suggestion_type(self, suggestion_type_id, diag_sect_code, diag_type_code, type_name):
        """Create a new suggestion type"""
        if not suggestion_type_id or not diag_sect_code or not diag_type_code or not type_name:
            raise ValueError("suggestion_type_id, diag_sect_code, diag_type_code, and type_name cannot be empty")

        suggestion_type = SuggestionType(suggestion_type_id, diag_sect_code, diag_type_code, type_name)
        self.repository.add(suggestion_type)
        return suggestion_type

    def update_suggestion_type(self, suggestion_type_id, type_name):
        """Update suggestion type information"""
        existing_suggestion_type = self.get(suggestion_type_id)
        if not existing_suggestion_type:
            return None

        existing_suggestion_type.type_name = type_name
        self.repository.update(existing_suggestion_type)
        return existing_suggestion_type

    def delete_suggestion_type(self, suggestion_type_id):
        """Delete a suggestion type"""
        existing_suggestion_type = self.get(suggestion_type_id)
        if not existing_suggestion_type:
            return False
        
        self.repository.delete(suggestion_type_id)
        return True
