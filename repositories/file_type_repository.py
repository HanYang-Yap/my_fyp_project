from models.file_type_model import FileType
from repositories.base_repository import BaseRepository

class FileTypeRepository(BaseRepository):

    def __init__(self, db):
        super().__init__(db, FileType, custom_id_field="id")