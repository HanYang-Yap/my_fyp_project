from services.base_service import BaseService
from repositories.user_repository import UserRepository
from models.user_model import User

class UserService(BaseService):
    def __init__(self, db):
        user_repository = UserRepository(db)
        super().__init__(user_repository)  # Initialize with the UserRepository
    
    def create_user(self, user_id, name, email, password_hash, role_id):
        """Create a new user"""
        if not user_id or not name or not email or not password_hash or not role_id:
            raise ValueError("user_id, name, email, password_hash, role_id, and department_id cannot be empty")
        
        user = User(user_id, name, email, password_hash, role_id)
        self.repository.add(user)  # Calls the add method from BaseRepository
        return user

    def update_user(self, user_id, name, email, role_id):
        """Update user information"""
        existing_user = self.get(user_id)
        if not existing_user:
            return None

        updated_user = User(user_id, name, email, role_id=role_id)
        self.repository.update(updated_user)  # Calls the update method from BaseRepository
        return updated_user

    def delete_user(self, user_id):
        """Delete a user"""
        existing_user = self.get(user_id)
        if not existing_user:
            return False
        
        self.repository.delete(user_id)  # Calls the delete method from BaseRepository
        return True

    def get_by_email(self, email):
        return self.repository.get_by_email(email)