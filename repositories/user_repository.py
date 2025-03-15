from models.user_model import User
from repositories.base_repository import BaseRepository

class UserRepository(BaseRepository):
    def __init__(self, db):
        # Initialize the base repository with the db and the model class "User"
        super().__init__(db, User, custom_id_field="user_id")  # Pass custom_id_field to use user_id as the document ID

# class UserRepository:
#     def __init__(self, db):
#         self.db = db
#         self.collection = self.db.collection('users')  # Firestore Collection "users"

#     def add_user(self, user):
#         """Create User 存入 Firestore"""
#         self.collection.document(user.user_id).set(user.to_dict())

#     def get_user(self, user_id):
#         """從 Firestore 讀取read User"""
#         doc = self.collection.document(user_id).get()
#         if doc.exists:
#             return User.from_dict(doc.to_dict())  # 使用 `from_dict()` 轉換
#         return None

#     def update_user(self, user):
#         """更新Update User 資料"""
#         self.collection.document(user.user_id).update(user.to_dict())

#     def delete_user(self, user_id):
#         """刪除Delete User"""
#         self.collection.document(user_id).delete()
