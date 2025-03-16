from services.base_service import BaseService
from repositories.user_wish_repository import UserWishRepository
from models.user_wish_model import UserWish

class UserWishService(BaseService):
    def __init__(self, db):
        user_wish_repository = UserWishRepository(db)
        super().__init__(user_wish_repository)

    def create_user_wish(self, user_id, department_id, wish_order):
        """Create a new user wish"""
        if not user_id or not department_id or not wish_order:
            raise ValueError("user_id, department_id, and wish_order cannot be empty")
        
        user_wish = UserWish(user_id, department_id, wish_order)
        self.repository.add(user_wish)
        return user_wish

    def update_user_wish(self, user_id, department_id, wish_order):
        """Update user wish"""
        existing_wish = self.get(user_id)
        if not existing_wish:
            return None

        existing_wish.department_id = department_id
        existing_wish.wish_order = wish_order
        self.repository.update(existing_wish)
        return existing_wish

    def delete_user_wish(self, user_id):
        """Delete user wish"""
        existing_wish = self.get(user_id)
        if not existing_wish:
            return False
        
        self.repository.delete(user_id)
        return True
