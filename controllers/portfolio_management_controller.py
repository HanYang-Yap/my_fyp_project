from flask import Blueprint, jsonify

def create_portfolio_management_controller(db):
    """
    Creates a portfolio management controller blueprint for handling portfolio management routes.
    
    Args:
        db: Firestore client instance
    
    Returns:
        Blueprint: Flask blueprint with portfolio management routes
    """
    portfolio_bp = Blueprint('portfolio_management', __name__)
    
    @portfolio_bp.route('/file-management/<student_id>', methods=['GET'])
    def student_file_management(student_id):
        """Render the file management page with student preferences"""
        from flask import render_template
        from config import Config
        
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
    
    @portfolio_bp.route('/get-student-preferences/<student_id>', methods=['GET'])
    def get_student_preferences(student_id):
        """Get the student's preferred departments from Firestore
        
        Args:
            student_id: Firebase user ID of the student
            
        Returns:
            JSON response with preferred departments
        """
        try:
            # First try to get from user data
            preferred_departments = []
            
            # Check direct user data first
            user_ref = db.collection('user').document(student_id).get()
            if user_ref.exists:
                user_data = user_ref.to_dict()
                preferred_departments = user_data.get('preferred_departments', [])
            
            # If not found in user data, try user_wishes collection
            if not preferred_departments:
                wishes_query = db.collection('user_wishes').where('user_id', '==', student_id).limit(1).stream()
                for doc in wishes_query:
                    wishes_data = doc.to_dict()
                    preferred_departments = wishes_data.get('wishes', [])
                    break
                
                # If still not found, try direct document lookup
                if not preferred_departments:
                    direct_wishes_ref = db.collection('user_wishes').document(student_id).get()
                    if direct_wishes_ref.exists:
                        wishes_data = direct_wishes_ref.to_dict()
                        preferred_departments = wishes_data.get('wishes', [])
            

            
            # Format the response
            return jsonify({
                'status': 'success',
                'student_id': student_id,
                'preferences': preferred_departments
            })
            
        except Exception as e:
            return jsonify({
                'status': 'error',
                'message': str(e)
            }), 500
    
    @portfolio_bp.route('/get-student-files/<student_id>', methods=['GET'])
    def get_student_files(student_id):
        """Get all files uploaded by the student
        
        Args:
            student_id: Firebase user ID of the student
            
        Returns:
            JSON response with file metadata
        """
        try:
            # Get all files from the student's collection
            files_ref = db.collection('portfolio_files').where('student_id', '==', student_id).stream()
            
            files = []
            for doc in files_ref:
                file_data = doc.to_dict()
                files.append({
                    'id': doc.id,
                    'filename': file_data.get('filename', ''),
                    'path': file_data.get('path', ''),
                    'url': file_data.get('url', ''),
                    'size': file_data.get('size', 0),
                    'uploaded_at': file_data.get('uploaded_at', ''),
                    'school': file_data.get('school', ''),
                    'type': file_data.get('type', '')
                })
            
            # Sort files by upload date (newest first)
            files.sort(key=lambda x: x.get('uploaded_at', ''), reverse=True)
            
            return jsonify(files)
            
        except Exception as e:
            return jsonify([])
    
    @portfolio_bp.route('/save-file-metadata', methods=['POST'])
    def save_file_metadata():
        """Save file metadata to Firestore after uploading to Firebase Storage
        
        Expected JSON body:
        {
            "filename": "...",
            "path": "...",
            "url": "...",
            "size": 12345,
            "school": "...",
            "type": "...",
            "uploaded_at": "...",
            "student_id": "..."
        }
        
        Returns:
            JSON response with status
        """
        from flask import request
        
        try:
            data = request.json
            
            # Validate required fields
            required_fields = ['filename', 'path', 'student_id']
            for field in required_fields:
                if field not in data:
                    return jsonify({
                        'status': 'error',
                        'message': f'Missing required field: {field}'
                    }), 400
            
            # Add the file metadata to Firestore
            db.collection('portfolio_files').add(data)
            
            return jsonify({
                'status': 'success',
                'message': 'File metadata saved successfully'
            })
            
        except Exception as e:
            return jsonify({
                'status': 'error',
                'message': str(e)
            }), 500
    
    @portfolio_bp.route('/delete-file-metadata', methods=['POST'])
    def delete_file_metadata():
        """Delete file metadata from Firestore
        
        Expected JSON body:
        {
            "path": "...",
            "filename": "...",
            "student_id": "..."
        }
        
        Returns:
            JSON response with status
        """
        from flask import request
        
        try:
            data = request.json
            
            # Validate required fields
            required_fields = ['path', 'student_id']
            for field in required_fields:
                if field not in data:
                    return jsonify({
                        'status': 'error',
                        'message': f'Missing required field: {field}'
                    }), 400
            
            # Find and delete the file metadata
            query = db.collection('portfolio_files').where('path', '==', data['path']).where('student_id', '==', data['student_id'])
            docs = query.stream()
            
            deleted = False
            for doc in docs:
                doc.reference.delete()
                deleted = True
            
            if not deleted:
                return jsonify({
                    'status': 'warning',
                    'message': 'No matching file found to delete'
                }), 404
            
            return jsonify({
                'status': 'success',
                'message': 'File metadata deleted successfully'
            })
            
        except Exception as e:
            return jsonify({
                'status': 'error',
                'message': str(e)
            }), 500
            
    @portfolio_bp.route('/analyze-file/<student_id>/<path:file_path>', methods=['POST'])
    def analyze_file(student_id, file_path):
        """Placeholder for file analysis endpoint (will be implemented with LangChain)
        
        Args:
            student_id: Firebase user ID of the student
            file_path: Path to the file in Firebase Storage
            
        Returns:
            JSON response with status
        """
        try:
            # Just a placeholder for now - will be implemented with LangChain
            return jsonify({
                'status': 'success',
                'message': 'Analysis requested successfully',
                'student_id': student_id,
                'file_path': file_path
            })
            
        except Exception as e:
            return jsonify({
                'status': 'error',
                'message': str(e)
            }), 500
    
    return portfolio_bp