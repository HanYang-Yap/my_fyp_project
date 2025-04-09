class FAQ:
    def __init__(
        self,
        id=None,
        type=None,
        title=None,
        description=None,
        student_id=None,
        contact_email=None,
        created_at=None,
        updated_at=None
    ):
        self.id = id
        self.type = type
        self.title = title
        self.description = description
        self.student_id = student_id
        self.contact_email = contact_email
        self.created_at = created_at
        self.updated_at = updated_at

    def to_dict(self):
        result = {
            "id": self.id,
            "type": self.type,
            "title": self.title,
            "description": self.description,
            "student_id": self.student_id
        }
        
        if self.contact_email:
            result["contact_email"] = self.contact_email
            
        if self.created_at:
            result["created_at"] = self.created_at
            
        if self.updated_at:
            result["updated_at"] = self.updated_at
            
        return result