from services.base_service import BaseService
from repositories.diag_type_repository import DiagTypeRepository
from models.diag_type_model import DiagType

class DiagTypeService(BaseService):
    def __init__(self, db):
        diag_type_repository = DiagTypeRepository(db)
        super().__init__(diag_type_repository)

    def create_diag_type(self, code, definition):
        """Create a new diagnostic type"""
        if not code or not definition:
            raise ValueError("code and definition cannot be empty")

        diag_type = DiagType(code, definition)
        self.repository.add(diag_type)
        return diag_type

    def update_diag_type(self, code, definition):
        """Update diagnostic type information"""
        existing_diag_type = self.get(code)
        if not existing_diag_type:
            return None

        existing_diag_type.definition = definition
        self.repository.update(existing_diag_type)
        return existing_diag_type

    def delete_diag_type(self, code):
        """Delete diagnostic type"""
        existing_diag_type = self.get(code)
        if not existing_diag_type:
            return False
        
        self.repository.delete(code)
        return True
