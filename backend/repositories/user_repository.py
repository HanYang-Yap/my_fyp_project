from models.user_model import User


class UserRepository:
    def __init__(self, db):
        self.db = db
        self.collection = self.db.collection('users')  # Firestore Collection "users"

    def add_user(self, user):
        """將 User 存入 Firestore"""
        self.collection.document(user.user_id).set(user.to_dict())

    def get_user(self, user_id):
        """從 Firestore 讀取 User"""
        doc = self.collection.document(user_id).get()
        if doc.exists:
            return User.from_dict(doc.to_dict())  # 使用 `from_dict()` 轉換
        return None

    def update_user(self, user):
        """更新 User 資料"""
        self.collection.document(user.user_id).update(user.to_dict())

    def delete_user(self, user_id):
        """刪除 User"""
        self.collection.document(user_id).delete()
