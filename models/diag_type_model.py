
class DiagType:
    def __init__(self, code, definition):
        self.code = code
        self.definition = definition

    def to_dict(self):
        return {
            "code": self.code,
            "definition": self.definition
        }

    @staticmethod
    def from_dict(data):
        return DiagType(
            code=data.get("code"),
            definition=data.get("definition")
        )