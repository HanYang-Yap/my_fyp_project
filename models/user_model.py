from datetime import datetime
from models.role_model import Role
from models.department_model import Department

class User:
    def __init__(self, user_id, name, email, password_hash=None, role_id=None, department_id=None, created_at = None, updated_at = None):
        """
        初始化 User 物件
        :param user_id: 使用者 ID (Firebase 的 document ID)
        :param name: 使用者名稱
        :param email: 使用者 Email
        """
        self.user_id = user_id
        self.name = name
        self.email = email
        self.password_hash = password_hash
        self.role_id = role_id
        self.department_id = department_id
        self.created_at = created_at or datetime.utcnow()
        self.updated_at = updated_at or datetime.utcnow()
        #Initialize role and department as objects
        self.role = None
        self.department = None

    def to_dict(self):
        """
        將 User 物件轉換為字典，方便存入 Firebase
        """
        return {
            "user_id": self.user_id,
            "name": self.name,
            "email": self.email,
            "password_hash": self.password_hash,
            "role_id": self.role_id,
            "department_id": self.department_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }

    @staticmethod
    def from_dict(data):
        """
        從 Firebase Firestore 的字典數據轉換為 User 物件
        :param data: Firestore 讀取的字典數據
        :return: User 物件
        """
        user = User(
            user_id=data.get("user_id"),
            name=data.get("name"),
            email=data.get("email"),
            password_hash=data.get("password_hash"),
            role_id=data.get("role_id"),
            department_id=data.get("department_id"),
            created_at=data.get("created_at"),
            updated_at=data.get("updated_at")
        )

        role_data = get_role_from_id(data.get("role_id"))
        department_data = get_department_from_id(data.get("department_id"))

        user.set_role(role_data)
        user.set_department(department_data)

        return user

    def set_role(self, role_data):
        if role_data:
            self.role = Role.from_dict(role_data)

    def set_department(self, department_data):
        if department_data:
            self.department = Department.from_dict(department_data)


def get_role_from_id(role_id):
    """
    Query Firestore to get the role by role_id
    """
    from app import db
    role_ref = db.collection("roles").document(str(role_id))
    role_doc = role_ref.get()
    if role_doc.exists:
        return role_doc.to_dict()
    return None

def get_department_from_id(department_id):
    """
    Query Firestore to get the department by department_id
    """
    from app import db
    department_ref = db.collection("departments").document(str(department_id))
    department_doc = department_ref.get()
    if department_doc.exists:
        return department_doc.to_dict()
    return None