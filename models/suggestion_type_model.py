
class SuggestionType:

    def __init__(self, suggestion_type_id, diag_sect_code, diag_type_code, type_name):
        self.suggestion_type_id = suggestion_type_id
        self.diag_sect_code = diag_sect_code
        self.diag_type_code = diag_type_code
        self.type_name = type_name

    def to_dict(self):
        return {
            "suggestion_type_id": self.suggestion_type_id,
            "diag_sect_code": self.diag_sect_code,
            "diag_type_code": self.diag_type_code,
            "type_name": self.type_name
        }
    
    @staticmethod
    def from_dict(data):
        suggestion_type = SuggestionType(
            suggestion_type_id=data.get("suggestion_type_id"),
            diag_sect_code=data.get("diag_sect_code"),
            diag_type_code=data.get("diag_type_code"),
            type_name=data.get("type_name")
        )

        return suggestion_type

def get_suggestion_type_by_id(suggestion_type_id):
    from app import db
    suggestion_type_ref = db.collection("suggestion_types").document(str(suggestion_type_id))
    suggestion_type_doc = suggestion_type_ref.get()
    if suggestion_type_doc.exists:
        from models.suggestion_type_model import SuggestionType
        return suggestion_type_doc.to_dict()
    return None
