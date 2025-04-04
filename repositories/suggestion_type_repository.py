from models.suggestion_type_model import SuggestionType
from repositories.base_repository import BaseRepository

class SuggestionTypeRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, SuggestionType, custom_id_field="suggestion_type_id")
