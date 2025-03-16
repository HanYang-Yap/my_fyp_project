from models.user_model import User
from models.department_model import Department

class UserWish:
    def __init__(self, user_id, department_id, wish_order):
        self.user_id = user_id
        self.department_id = department_id
        self.wish_order = wish_order

        self.user = None
        self.department = None

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "department_id": self.department_id,
            "wish_order": self.wish_order
        }

    @staticmethod
    def from_dict(data):
        user_wish = UserWish(
            user_id=data.get("user_id"),
            department_id=data.get("department_id"),
            wish_order=data.get("wish_order")
        )

        user_data = get_user_from_id(data.get("user_id"))
        department_data = get_department_from_id(data.get("department_id"))

        user_wish.set_user(user_data)
        user_wish.set_department(department_data)

        return user_wish

    def set_user(self, user_data):
        if user_data:
            self.user = User.from_dict(user_data)

    def set_department(self, department_data):
        if department_data:
            self.department = Department.from_dict(department_data)

def get_user_from_id(user_id):
    from app import db
    user_ref = db.collection("users").document(str(user_id))
    user_doc = user_ref.get()
    if user_doc.exists:
        return user_doc.to_dict()
    return None

def get_department_from_id(department_id):
    from app import db
    department_ref = db.collection("departments").document(str(department_id))
    department_doc = department_ref.get()
    if department_doc.exists:
        return department_doc.to_dict()
    return None
