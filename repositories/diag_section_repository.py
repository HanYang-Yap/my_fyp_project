from repositories.base_repository import BaseRepository
from models.diag_section_model import DiagSection

class DiagSectionRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, DiagSection, custom_id_field="code")
