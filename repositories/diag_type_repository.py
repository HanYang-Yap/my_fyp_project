from repositories.base_repository import BaseRepository
from models.diag_type_model import DiagType

class DiagTypeRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, DiagType, custom_id_field="code")
