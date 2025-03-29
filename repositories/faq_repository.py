from models.faq_model import FAQ

class FAQRepository:
    def __init__(self, db):
        self.db = db
        self.model_class = FAQ

    def add(self, type_id, doc_id, faq_obj):
        ref = self.db.collection("faq").document(type_id).collection(type_id).document(str(doc_id))
        ref.set(faq_obj.to_dict())

    def get(self, type_id, doc_id):
        ref = self.db.collection("faq").document(type_id).collection(type_id).document(str(doc_id))
        doc = ref.get()
        if doc.exists:
            return self.model_class.from_dict(doc.to_dict())
        return None

    def update(self, type_id, doc_id, faq_obj):
        ref = self.db.collection("faq").document(type_id).collection(type_id).document(str(doc_id))
        ref.update(faq_obj.to_dict())

    def delete(self, type_id, doc_id):
        ref = self.db.collection("faq").document(type_id).collection(type_id).document(str(doc_id))
        ref.delete()

    def get_all(self, type_id):
        ref = self.db.collection("faq").document(type_id).collection(type_id)
        docs = ref.stream()
        return [self.model_class.from_dict(doc.to_dict()) for doc in docs]

    def get_next_id(self, type_id):
        ref = self.db.collection("faq").document(type_id).collection(type_id)
        docs = ref.stream()
        ids = [int(doc.id) for doc in docs if doc.id.isdigit()]
        return str(max(ids) + 1 if ids else 1)
