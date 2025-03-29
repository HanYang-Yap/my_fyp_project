class User:
    def __init__(self, user_id, name, email):
        """
        初始化 User 物件
        :param user_id: 使用者 ID (Firebase 的 document ID)
        :param name: 使用者名稱
        :param email: 使用者 Email
        """
        self.user_id = user_id
        self.name = name
        self.email = email

    def to_dict(self):
        """
        將 User 物件轉換為字典，方便存入 Firebase
        """
        return {
            "user_id": self.user_id,
            "name": self.name,
            "email": self.email
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
            email=data.get("email")
        )
