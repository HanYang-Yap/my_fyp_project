from services.base_service import BaseService
from models.role_model import Role
from repositories.role_repository import RoleRepository

class RoleService(BaseService):
    def __init__(self, db):
        role_repository = RoleRepository(db)
        super().__init__(role_repository)

    def create_role(self, role_id, role_name):
        """Create a new role"""
        if not role_id or not role_name:
            raise ValueError("role_id and role_name cannot be empty")
        
        role = Role(role_id, role_name)
        self.repository.add(role)
        return role
    
    def update_role(self, role_id, role_name):
        """Update role information"""
        existing_role = self.get(role_id)
        if not existing_role:
            return None

        updated_role = Role(role_id, role_name)
        self.repository.update(updated_role)
        return updated_role
    
    def delete_role(self, role_id):
        """Delete a role"""
        existing_role = self.get(role_id)
        if not existing_role:
            return False
        
        self.repository.delete(role_id)
        return True