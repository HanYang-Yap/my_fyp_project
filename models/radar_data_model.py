from datetime import datetime
from models.user_model import User

class RadarData:

    def __init__(self, radar_id, user_id, typos_punctuation, off_topic, conciseness, expansion, structure, completeness, updated_at=None):

        self.radar_id = radar_id
        self.user_id = user_id
        self.typos_punctuation = typos_punctuation
        self.off_topic = off_topic
        self.conciseness = conciseness
        self.expansion = expansion
        self.structure = structure
        self.completeness = completeness
        self.updated_at = updated_at or datetime.utcnow()

        self.user = None

    def to_dict(self):

        return {
            "radar_id": self.radar_id,
            "user_id": self.user_id,
            "typos_punctuation": self.typos_punctuation,
            "off_topic": self.off_topic,
            "conciseness": self.conciseness,
            "expansion": self.expansion,
            "structure": self.structure,
            "completeness": self.completeness,
            "updated_at": self.updated_at
        }
    
    @staticmethod
    def from_dict(data):

        radar_data = Radar_Data(
            radar_id=data.get("radar_id"),
            user_id=data.get("user_id"),
            typos_punctuation=data.get("typos_punctuation"),
            off_topic=data.get("off_topic"),
            conciseness=data.get("conciseness"),
            expansion=data.get("expansion"),
            structure=data.get("structure"),
            completeness=data.get("completeness"),
            updated_at=data.get("updated_at")
        )
    
        user_data = get_user_from_id(data.get("user_id"))
        radar_data.set_user(user_data)
    
        return radar_data

    def set_user(self, user_data):
        if user_data:
            self.user = User.from_dict(user_data)

def get_user_from_id(user_id):
    from app import db
    user_ref = db.collection("users").document(str(user_id))
    user_doc = user_ref.get()
    if user_doc.exists:
        return user_doc.to_dict()
    return None

