from datetime import datetime

class FAQ:
    def __init__(self, type, title, description, contact_email=None, type_name=None, created_at=None, updated_at=None):
        self.type = type                          # 🔹 實際用於 Firebase 的 ID
        self.title = title
        self.description = description
        self.contact_email = contact_email
        self.type_name = type_name or type        # 🔹 顯示用的繁體中文名稱
        self.created_at = created_at or datetime.utcnow()
        self.updated_at = updated_at or datetime.utcnow()

    def to_dict(self):
        return {
            "type": self.type,
            "title": self.title,
            "description": self.description,
            "contact_email": self.contact_email,
            "type_name": self.type_name,
            "created_at": self.created_at.strftime("%Y-%m-%d %H:%M"),
            "updated_at": self.updated_at.strftime("%Y-%m-%d %H:%M")
        }

    @staticmethod
    def from_dict(data):
        return FAQ(
            type=data.get("type"),
            title=data.get("title"),
            description=data.get("description"),
            contact_email=data.get("contact_email"),
            type_name=data.get("type_name"),
            created_at=data.get("created_at"),
            updated_at=data.get("updated_at")
        )
