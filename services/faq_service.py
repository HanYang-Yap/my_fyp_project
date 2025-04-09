from models.faq_model import FAQ
from google.cloud import firestore

class FAQService:
    def __init__(self, db):
        self.db = db
        self.collection_name = "faq"

    def create_faq(self, student_id, type, title, description, contact_email=None):
        """
        Create a new FAQ with a custom sequential ID
        """
        try:
            # Get the collection reference for this student and type
            student_type_ref = self.db.collection(self.collection_name).document(student_id).collection(type)
            
            # Query to find the highest existing ID
            existing_docs = student_type_ref.order_by("id", direction="DESCENDING").limit(1).get()
            
            # Determine the next ID
            next_id = 1
            for doc in existing_docs:
                if "id" in doc.to_dict():
                    next_id = int(doc.to_dict()["id"]) + 1
                    break
            
            # Create the document with the custom ID
            doc_ref = student_type_ref.document(str(next_id))
            
            # Prepare the FAQ data
            faq_data = {
                "id": next_id,
                "type": type,
                "title": title,
                "description": description,
                "student_id": student_id,
                "created_at": firestore.SERVER_TIMESTAMP
            }
            
            if contact_email:
                faq_data["contact_email"] = contact_email
                
            # Save the document
            doc_ref.set(faq_data)
            
            # Create and return the FAQ object
            faq = FAQ(
                id=next_id,
                type=type,
                title=title,
                description=description,
                student_id=student_id,
                contact_email=contact_email
            )
            
            return faq
            
        except Exception as e:
            print(f"Error creating FAQ: {e}")
            raise e

    def get_faq(self, student_id, type, faq_id):
        """
        Get a specific FAQ by ID
        """
        try:
            doc_ref = self.db.collection(self.collection_name).document(student_id).collection(type).document(str(faq_id))
            doc = doc_ref.get()
            
            if doc.exists:
                data = doc.to_dict()
                return FAQ(
                    id=data.get("id"),
                    type=data.get("type"),
                    title=data.get("title"),
                    description=data.get("description"),
                    student_id=data.get("student_id"),
                    contact_email=data.get("contact_email"),
                    created_at=data.get("created_at")
                )
            return None
            
        except Exception as e:
            print(f"Error getting FAQ: {e}")
            raise e
    
    def update_faq(self, student_id, type, faq_id, title=None, description=None, contact_email=None):
        """
        Update an existing FAQ
        """
        try:
            doc_ref = self.db.collection(self.collection_name).document(student_id).collection(type).document(str(faq_id))
            doc = doc_ref.get()
            
            if not doc.exists:
                return None
                
            update_data = {}
            if title is not None:
                update_data["title"] = title
            if description is not None:
                update_data["description"] = description
            if contact_email is not None:
                update_data["contact_email"] = contact_email
                
            update_data["updated_at"] = firestore.SERVER_TIMESTAMP
            
            doc_ref.update(update_data)
            
            # Get the updated document
            updated_doc = doc_ref.get()
            data = updated_doc.to_dict()
            
            return FAQ(
                id=data.get("id"),
                type=data.get("type"),
                title=data.get("title"),
                description=data.get("description"),
                student_id=data.get("student_id"),
                contact_email=data.get("contact_email"),
                created_at=data.get("created_at"),
                updated_at=data.get("updated_at")
            )
            
        except Exception as e:
            print(f"Error updating FAQ: {e}")
            raise e
    
    def delete_faq(self, student_id, type, faq_id):
        """
        Delete a FAQ by ID
        """
        try:
            doc_ref = self.db.collection(self.collection_name).document(student_id).collection(type).document(str(faq_id))
            doc = doc_ref.get()
            
            if not doc.exists:
                return False
                
            doc_ref.delete()
            return True
            
        except Exception as e:
            print(f"Error deleting FAQ: {e}")
            raise e
    
    def get_all_faqs_by_type(self, student_id, type):
        """
        Get all FAQs for a specific student and type
        """
        try:
            docs = self.db.collection(self.collection_name).document(student_id).collection(type).order_by("id").get()
            
            faqs = []
            for doc in docs:
                data = doc.to_dict()
                faqs.append(FAQ(
                    id=data.get("id"),
                    type=data.get("type"),
                    title=data.get("title"),
                    description=data.get("description"),
                    student_id=data.get("student_id"),
                    contact_email=data.get("contact_email"),
                    created_at=data.get("created_at"),
                    updated_at=data.get("updated_at")
                ))
                
            return faqs
            
        except Exception as e:
            print(f"Error getting all FAQs by type: {e}")
            raise e
    
    def get_all_faqs(self, student_id):
        """
        Get all FAQs for a specific student across all types
        """
        try:
            # Get all types for this student
            student_ref = self.db.collection(self.collection_name).document(student_id)
            collections = student_ref.collections()
            
            all_faqs = []
            for collection in collections:
                type_name = collection.id
                type_faqs = self.get_all_faqs_by_type(student_id, type_name)
                all_faqs.extend(type_faqs)
                
            return all_faqs
            
        except Exception as e:
            print(f"Error getting all FAQs: {e}")
            raise e