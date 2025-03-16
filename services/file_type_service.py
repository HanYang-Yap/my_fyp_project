from services.base_service import BaseService
from repositories.file_type_repository import FileTypeRepository
from models.file_type_model import FileType

class FileTypeService(BaseService):
    def __init__(self, db):
        file_type_repository = FileTypeRepository(db)
        super().__init__(file_type_repository)

    def create_file_type(self, id, type_name):
        """Create a new file type"""
        if not id or not type_name:
            raise ValueError("id and type_name cannot be empty")

        file_type = FileType(id, type_name)
        self.repository.add(file_type)
        return file_type

    def update_file_type(self, id, type_name):
        """Update file type information"""
        existing_file_type = self.get(id)
        if not existing_file_type:
            return None

        existing_file_type.type_name = type_name
        self.repository.update(existing_file_type)
        return existing_file_type

    def delete_file_type(self, id):
        """Delete a file type"""
        existing_file_type = self.get(id)
        if not existing_file_type:
            return False
        
        self.repository.delete(id)
        return True
