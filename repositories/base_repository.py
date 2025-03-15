class BaseRepository:
    def __init__(self, db, model_class, custom_id_field=None):
        self.db = db
        self.model_class = model_class
        self.custom_id_field = custom_id_field  # Optionally specify a field to use as document ID

    def add(self, obj):
        """Add a new document to Firestore"""
        if self.custom_id_field and hasattr(obj, self.custom_id_field):
            # Use custom ID field (e.g., user_id)
            document_id = getattr(obj, self.custom_id_field)
            self.db.collection("users").document(str(document_id)).set(obj.to_dict())  # Use 'users' collection
        else:
            # Firestore generates the document ID
            self.db.collection("users").add(obj.to_dict())  # Ensure using the 'users' collection

    def get(self, obj_id):
        """Get a document from Firestore by ID"""
        doc = self.db.collection("users").document(str(obj_id)).get()  # Always use 'users' collection
        if doc.exists:
            return self.model_class.from_dict(doc.to_dict())
        return None

    def update(self, obj):
        """Update an existing document in Firestore"""
        if self.custom_id_field and hasattr(obj, self.custom_id_field):
            document_id = getattr(obj, self.custom_id_field)
            self.db.collection("users").document(str(document_id)).update(obj.to_dict())  # Use 'users' collection
        else:
            self.db.collection("users").document(str(obj.user_id)).update(obj.to_dict())  # Default to 'users' collection

    def delete(self, obj_id):
        """Delete a document from Firestore"""
        self.db.collection("users").document(str(obj_id)).delete()  # Always delete from 'users' collection
