
class Role:
    def __init__(self, role_id, role_name):
        self.role_id = role_id
        self.role_name = role_name

    def to_dict(self):

        return {
            "role_id": self.role_id,
            "role_name": self.role_name
        }
    
    def from_dict(data):

        return Role(
            role_id = data.get("role_id"),
            role_name = data.get("role_name")
        )
    
        