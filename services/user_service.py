from models.user_model import User
from repositories.user_repository import UserRepository

class UserService:
    def __init__(self, db):
        """初始化 UserService，並連線Firestore"""
        self.user_repository = UserRepository(db)

    def create_user(self, user_id, name, email):
        """創建新使用者"""
        if not user_id or not name or not email:
            raise ValueError("user_id, name 和 email 不能為空")
        
        user = User(user_id, name, email)
        self.user_repository.add_user(user)
        return user

    def get_user(self, user_id):
        """獲取使用者"""
        user = self.user_repository.get_user(user_id)
        if not user:
            return None
        return user

    def update_user(self, user_id, name, email):
        """更新使用者資訊"""
        existing_user = self.get_user(user_id)
        if not existing_user:
            return None

        updated_user = User(user_id, name, email)
        self.user_repository.update_user(updated_user)
        return updated_user

    def delete_user(self, user_id):
        """刪除使用者"""
        existing_user = self.get_user(user_id)
        if not existing_user:
            return False
        
        self.user_repository.delete_user(user_id)
        return True