from services.base_service import BaseService
from repositories.diag_section_repository import DiagSectionRepository
from models.diag_section_model import DiagSection

class DiagSectionService(BaseService):
    def __init__(self, db):
        diag_section_repository = DiagSectionRepository(db)
        super().__init__(diag_section_repository)

    def create_diag_section(self, code, definition):
        """Create a new diagnostic section"""
        if not code or not definition:
            raise ValueError("code and definition cannot be empty")

        diag_section = DiagSection(code, definition)
        self.repository.add(diag_section)
        return diag_section

    def update_diag_section(self, code, definition):
        """Update diagnostic section information"""
        existing_diag_section = self.get(code)
        if not existing_diag_section:
            return None

        existing_diag_section.definition = definition
        self.repository.update(existing_diag_section)
        return existing_diag_section

    def delete_diag_section(self, code):
        """Delete diagnostic section"""
        existing_diag_section = self.get(code)
        if not existing_diag_section:
            return False
        
        self.repository.delete(code)
        return True
