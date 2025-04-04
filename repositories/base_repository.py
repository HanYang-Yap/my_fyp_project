class BaseRepository:

    def __init__(self, db, model_class, custom_id_field=None):
        self.db = db
        self.model_class = model_class
        self.custom_id_field = custom_id_field  # Optionally specify a field to use as document ID

    def add(self, obj):
        """Add a new document to Firestore"""
        # Dynamically use the model's class name to determine the collection
        collection_name = self.model_class.__name__.lower()   # E.g., 'user', 'role'
        if self.custom_id_field and hasattr(obj, self.custom_id_field):
            document_id = getattr(obj, self.custom_id_field)
            self.db.collection(collection_name).document(str(document_id)).set(obj.to_dict())
        else:
            self.db.collection(collection_name).add(obj.to_dict())  # Firestore auto-generates the document ID

    def get(self, obj_id):
        """Get a document from Firestore by ID"""
        collection_name = self.model_class.__name__.lower()  # Dynamically choose collection
        doc = self.db.collection(collection_name).document(str(obj_id)).get()
        if doc.exists:
            return self.model_class.from_dict(doc.to_dict())
        return None
    
    def update(self, obj):
        """Update an existing document in Firestore"""
        collection_name = self.model_class.__name__.lower()
        if self.custom_id_field and hasattr(obj, self.custom_id_field):
            document_id = getattr(obj, self.custom_id_field)
            self.db.collection(collection_name).document(str(document_id)).update(obj.to_dict())
        else:
            self.db.collection(collection_name).document(str(obj.user_id)).update(obj.to_dict())

    def delete(self, obj_id):
        """Delete a document from Firestore"""
        collection_name = self.model_class.__name__.lower()
        self.db.collection(collection_name).document(str(obj_id)).delete()
