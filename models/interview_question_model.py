from models.diag_section_model import DiagSection
from models.diag_type_model import DiagType

class InterviewQuestion:
    def __init__(self, question_id, diag_sect_code, diag_type_code, question_text):
        self.question_id = question_id
        self.diag_sect_code = diag_sect_code
        self.diag_type_code = diag_type_code
        self.question_text = question_text

        self.diag_sect_code = None
        self.diag_type_code = None

    def to_dict(self):
        return {
            "question_id": self.question_id,
            "diag_sect_code": self.diag_sect_code,
            "diag_type_code": self.diag_type_code,
            "question_text": self.question_text
        }
    
    @staticmethod
    def from_dict(data):
        interview_question = InterviewQuestion(
            question_id=data.get("question_id"),
            diag_sect_code=data.get("diag_sect_code"),
            diag_type_code=data.get("diag_type_code"),
            question_text=data.get("question_text")
        )
        
        diag_sect_data = get_diag_sect_from_code(data.get("diag_sect_code"))
        diag_type_data = get_diag_type_from_code(data.get("diag_type_code"))

        interview_question.set_diag_sect(diag_sect_data)
        interview_question.set_diag_type(diag_type_data)

        return interview_question
    
    
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