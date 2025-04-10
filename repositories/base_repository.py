from google.cloud.firestore import FieldFilter


class BaseRepository:

    def __init__(self, db, model_class, custom_id_field=None):
        self.db = db
        self.model_class = model_class
        self.custom_id_field = custom_id_field

        # 🔧 自動設定 collection name：model 名 + s
        collection_name = self.model_class.__name__.lower() + 's'
        self.collection = self.db.collection(collection_name)

    def add(self, obj):
        if self.custom_id_field and hasattr(obj, self.custom_id_field):
            document_id = getattr(obj, self.custom_id_field)
            self.collection.document(str(document_id)).set(obj.to_dict())
        else:
            self.collection.add(obj.to_dict())

    def get(self, obj_id):
        doc = self.collection.document(str(obj_id)).get()
        if doc.exists:
            return self.model_class.from_dict(doc.to_dict())
        return None

    def update(self, obj):
        if self.custom_id_field and hasattr(obj, self.custom_id_field):
            document_id = getattr(obj, self.custom_id_field)
            self.collection.document(str(document_id)).update(obj.to_dict())
        else:
            self.collection.document(str(obj.user_id)).update(obj.to_dict())

    def delete(self, obj_id):
        self.collection.document(str(obj_id)).delete()

    def query(self, filters: dict):
        query_ref = self.collection
        for field, value in filters.items():
            query_ref = query_ref.where(filter=FieldFilter(field, "==", value))

        docs = query_ref.stream()
        return [
            self.model_class.from_dict(doc.to_dict())
            for doc in docs if doc.exists
        ]