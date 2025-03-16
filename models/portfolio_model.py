from datetime import datetime
from models.user_model import User

class Portfolio:

    def __init__(self, portfolio_id, user_id, file_type_id, file_size, file_name, file_path, uploaded_at=None):

        self.portfolio_id = portfolio_id
        self.user_id = user_id
        self.file_type_id = file_type_id
        self.file_size = file_size
        self.file_name = file_name
        self.file_path = file_path
        self.uploaded_at = uploaded_at or datetime.utcnow()

        self.user=None

    def to_dict(self):

        return {
            "portfolio_id": self.portfolio_id,
            "user_id": self.user_id,
            "file_type_id": self.file_type_id,
            "file_size": self.file_size,
            "file_name": self.file_name,
            "file_path": self.file_path,
            "uploaded_at": self.uploaded_at
        }
    
    @staticmethod
    def from_dict(data):

        portfolio = Portfolio(
            portfolio_id=data.get("portfolio_id"),
            user_id=data.get("user_id"),
            file_type_id=data.get("file_type_id"),
            file_size=data.get("file_size"),
            file_name=data.get("file_name"),
            file_path=data.get("file_path"),
            uploaded_at=data.get("uploaded_at")
        )

        user_data = get_user_from_id(data.get("user_id"))
        portfolio.set_user(user_data)

        return portfolio
    
    def set_user(self, user_data):
        if user_data:
            self.user = User.from_dict(user_data)

def get_user_from_id(user_id):
    from app import db
    user_ref = db.collection("users").document(str(user_id))
    user_doc = user_ref.get()
    if user_doc.exists:
        return user_doc.to_dict()
    return None
