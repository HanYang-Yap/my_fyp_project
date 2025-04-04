
class FileType:

    def __init__(self, id, type_name):
        self.id = id
        self.type_name = type_name

    def to_dict(self):
        return {
            "id": self.id,
            "type_name": self.type_name
        }
    
    @staticmethod
    def from_dict(data):

        file_type = FileType(
            id = data.get("id"),
            type_name = data.get("type_name")
        )

        return file_type