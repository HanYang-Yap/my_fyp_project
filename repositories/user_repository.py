from models.user_model import User

class UserRepository:
    def __init__(self, db):
        self.db = db
        self.collection = self.db.collection('user')  # Firestore Collection "users"
    
    # Add an "add" method that matches what's being called
    def add(self, user):
        """Create User 存入 Firestore"""
        self.collection.document(user.user_id).set(user.to_dict())
        
    # Existing methods
    def add_user(self, user):
        """Create User 存入 Firestore"""
        self.collection.document(user.user_id).set(user.to_dict())

    def get_user(self, user_id):
        """從 Firestore 讀取read User"""
        doc = self.collection.document(user_id).get()
        if doc.exists:
            return User.from_dict(doc.to_dict())  # 使用 `from_dict()` 轉換
        return None

    def update_user(self, user):
        """更新Update User 資料"""
        self.collection.document(user.user_id).update(user.to_dict())

    def delete_user(self, user_id):
        """刪除Delete User"""
        self.collection.document(user_id).delete()

    def get_by_email(self, email):
        collection_name = self.model_class.__name__.lower()
        query = self.db.collection(collection_name).where("email", "==", email).limit(1).get()
        if query:
                return self.model_class.from_dict(query[0].to_dict())
        return None
