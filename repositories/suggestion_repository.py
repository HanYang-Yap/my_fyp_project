from models.suggestion_model import Suggestion
from repositories.base_repository import BaseRepository

class SuggestionRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, Suggestion, custom_id_field="suggestion_id")
