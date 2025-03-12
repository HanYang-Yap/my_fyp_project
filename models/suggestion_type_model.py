from models.diag_section_model import DiagSection
from models.diag_type_model import DiagType

class Suggestion_Type:

    def __init__(self, suggestion_type_id, diag_sect_code, diag_type_code, type_name):
        
        self.suggestion_type_id = suggestion_type_id
        self.diag_sect_code = diag_sect_code
        self.diag_type_code = diag_type_code
        self.type_name = type_name

        self.diag_sect_code=None
        self.diag_type_code=None

    def to_dict(self):

        return {
            "suggestion_type_id": self.suggestion_type_id,
            "diag_sect_code": self.diag_sect_code,
            "diag_type_code": self.diag_type_code,
            "type_name": self.type_name
        }
    
    @staticmethod
    def from_dict(data):

        suggestion_type = Suggestion_Type(
            suggestion_type_id=data.get("suggestion_type_id"),
            diag_sect_code=data.get("diag_sect_code"),
            diag_type_code=data.get("diag_type_code"),
            type_name=data.get("type_name")
        )

        diag_sect_data = get_diag_sect_from_code(data.get("diag_sect_code"))
        diag_type_data = get_diag_type_from_code(data.get("diag_type_code"))

        suggestion_type.set_diag_sect(diag_sect_data)
        suggestion_type.set_diag_type(diag_type_data)

        return suggestion_type
    
    def set_diag_sect(self, diag_sect_data):
        if diag_sect_data:
            self.diag_sect = DiagSection.from_dict(diag_sect_data)

    def set_diag_type(self, diag_type_data):
        if diag_type_data:
            self.diag_type = DiagType.from_dict(diag_type_data)

def get_diag_sect_from_code(diag_sect_code):
    from app import db
    diag_sect_ref = db.collection("diag_sections").document(str(diag_sect_code))
    diag_sect_doc = diag_sect_ref.get()
    if diag_sect_doc.exists:
        return diag_sect_doc.to_dict()
    return None

def get_diag_type_from_code(diag_type_code):
    from app import db
    diag_type_ref = db.collection("diag_types").document(str(diag_type_code))
    diag_type_doc = diag_type_ref.get()
    if diag_type_doc.exists:
        return diag_type_doc.to_dict()
    return None

