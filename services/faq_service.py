from datetime import datetime
from services.base_service import BaseService
from repositories.faq_repository import FAQRepository
from models.faq_model import FAQ

class FAQService(BaseService):
    def __init__(self, db):
        self.db = db
        self.repository = FAQRepository(db)
        super().__init__(self.repository)

    def create_faq(self, type, title, description, contact_email=None):
        if not type or not title or not description:
            raise ValueError("type, title, and description are required fields")

        next_id = self.repository.get_next_id(type)
        faq = FAQ(type, title, description, contact_email, type_name=type)
        self.repository.add(type, next_id, faq)
        print(f"[🔥 DEBUG] 存入 Firestore: /faq/{type}/{next_id}")
        return faq

    def get_faq(self, type, doc_id):
        return self.repository.get(type, doc_id)

    def update_faq(self, type, doc_id, title, description, contact_email=None):
        existing = self.repository.get(type, doc_id)
        if not existing:
            return None

        updated = FAQ(
            type=type,
            title=title,
            description=description,
            contact_email=contact_email,
            type_name=type,
            created_at=existing.created_at,
            updated_at=datetime.utcnow()
        )
        self.repository.update(type, doc_id, updated)
        return updated

    def delete_faq(self, type, doc_id):
        if not self.repository.get(type, doc_id):
            return False
        self.repository.delete(type, doc_id)
        return True

    def get_all_faqs(self, type):
        return self.repository.get_all(type)
