from flask import Blueprint, jsonify, request, render_template
from firebase_admin import firestore
from google.cloud import storage
from config import Config

def create_portfolio_management_controller(db):
    """
    Creates a Blueprint for portfolio/file management operations
    
    Args:
        db: Firestore database instance
    
    Returns:
        Blueprint: Flask Blueprint with portfolio management routes
    """
    portfolio_bp = Blueprint('portfolio_management', __name__)
    
    @portfolio_bp.route('/file-management')
    @portfolio_bp.route('/file-management/<student_id>')
    def file_management_view(student_id=None):
        """Render the file management page for a specific student"""
        if student_id is None:
            student_id = "test_student_id"
            
        firebase_config = {
            "apiKey": Config.FIREBASE_API_KEY,
            "authDomain": Config.FIREBASE_AUTH_DOMAIN,
            "projectId": Config.FIREBASE_PROJECT_ID,
            "storageBucket": Config.FIREBASE_STORAGE_BUCKET,
            "messagingSenderId": Config.FIREBASE_MESSAGING_SENDER_ID,
            "appId": Config.FIREBASE_APP_ID
        }
        
        return render_template(
            'file_upload&management.html', 
            firebase_config=firebase_config, 
            student_id=student_id
        )
    
    @portfolio_bp.route('/get-student-files/<student_id>', methods=['GET'])
    def get_student_files(student_id):
        """Get all files for a specific student"""
        collection_ref = db.collection('uploaded_files')
        docs = collection_ref.where('student_id', '==', student_id).stream()
        files = []

        for doc in docs:
            data = doc.to_dict()
            files.append({
                "filename": data.get("filename"),
                "path": data.get("path"),
                "url": data.get("url"),
                "size": data.get("size"),
                "school": data.get("school"),
                "type": data.get("type"),
                "uploaded_at": data.get("uploaded_at"),
                "student_id": data.get("student_id")
            })

        return jsonify(files)
    
    @portfolio_bp.route('/save-file-metadata', methods=['POST'])
    def save_file_metadata():
        """Save metadata for an uploaded file"""
        data = request.get_json()
        
        # Ensure student_id is provided
        if 'student_id' not in data:
            return jsonify({"error": "student_id is required"}), 400
            
        collection_ref = db.collection('uploaded_files')
        # Include student_id in the document ID for uniqueness
        doc_id = f"{data['student_id']}_{data['school']}_{data['type']}_{data['filename']}"
        collection_ref.document(doc_id).set(data)
        
        return jsonify({"status": "success", "message": "File metadata saved successfully"}), 200
    
    @portfolio_bp.route('/delete-file-metadata', methods=['POST'])
    def delete_file_metadata():
        """Delete metadata for a specific file"""
        try:
            data = request.get_json()
            path = data.get('path')
            filename = data.get('filename')
            student_id = data.get('student_id')
            
            if not path or not filename or not student_id:
                return jsonify({"error": "Missing required parameters"}), 400
            
            # Delete document metadata from Firestore
            collection_ref = db.collection('uploaded_files')
            
            # Query by path and student_id to ensure we're only deleting the right student's files
            docs = collection_ref.where('path', '==', path).where('student_id', '==', student_id).stream()
            
            doc_found = False
            
            for doc in docs:
                doc.reference.delete()
                doc_found = True
            
            if not doc_found:
                return jsonify({"error": "Document record not found"}), 404
            
            return jsonify({"message": "File metadata successfully deleted"}), 200
        
        except Exception as e:
            return jsonify({"error": f"Failed to delete file metadata: {str(e)}"}), 500
    
    @portfolio_bp.route('/analyze-file/<student_id>/<path:file_path>', methods=['POST'])
    def analyze_file(student_id, file_path):
        """Analyze a specific file using LangChain (placeholder)"""
        # This would be implemented when LangChain integration is ready
        # You can decode the file_path parameter with: file_path = request.view_args['file_path']
        
        # For now, just return a success response
        return jsonify({
            "status": "success", 
            "message": "Analysis queued", 
            "student_id": student_id,
            "file_path": file_path
        })
    
    return portfolio_bp