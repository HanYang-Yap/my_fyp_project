
class User:
    def __init__(self, user_id, name, email, password_hash, role_id, department_id, created_at, updated_at):
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
        self.created_at = created_at
        self.updated_at = updated_at

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
        return User(
            user_id=data.get("user_id"),
            name=data.get("name"),
            email=data.get("email"),
            password_hash=data.get("password_hash"),
            role_id=data.get("role_id"),
            department_id=data.get("department_id"),
            created_at=data.get("created_at"),
            updated_at=data.pygame.event.get()("updated_at")
        )
