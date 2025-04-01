import os
import openai
import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, redirect, render_template, request, send_from_directory
from werkzeug.utils import secure_filename
from werkzeug.exceptions import RequestEntityTooLarge
from google.cloud import storage
from google.oauth2 import service_account

from config import DevelopmentConfig, ProductionConfig, Config
from controllers.test_controller import test_bp
from controllers.user_controller import create_user_controller
from controllers.role_controller import create_role_controller
from controllers.user_wish_controller import create_user_wish_controller
from controllers.department_controller import create_department_controller
from controllers.radar_data_controller import create_radar_data_controller
from controllers.portfolio_controller import create_portfolio_controller
from controllers.file_type_controller import create_file_type_controller
from controllers.suggestion_controller import create_suggestion_controller
from controllers.suggestion_type_controller import create_suggestion_type_controller
from controllers.interview_question_controller import create_interview_question_controller
from controllers.diag_section_controller import create_diag_section_controller
from controllers.diag_type_controller import create_diag_type_controller
from controllers.faq_controller import create_faq_controller
from controllers.calendar_controller import create_calendar_controller

app = Flask(__name__, template_folder="templates")
app.config['UPLOAD_DIRECTORY'] = 'uploads/'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB
app.config['ALLOWED_EXTENSIONS'] = ['.jpg', '.jpeg', '.png', '.pdf']

# 根據環境載入不同設定，預設開發模式
env = os.getenv("FLASK_ENV", "development")
if env == 'production':
    app_config = ProductionConfig()
else:
    app_config = DevelopmentConfig()

app.config.from_object(app_config)

# 設定 OpenAI API Key
openai.api_key = app.config["OPENAI_API_KEY"]

# 設定 Firebase
if not firebase_admin._apps:
    cred = credentials.Certificate(Config.FIREBASE_CREDENTIALS)
    firebase_admin.initialize_app(cred)

gcs_credentials = service_account.Credentials.from_service_account_file(
    Config.FIREBASE_CREDENTIALS
)

storage_client = storage.Client(credentials=gcs_credentials)
bucket = storage_client.bucket(Config.FIREBASE_STORAGE_BUCKET)

db = firestore.client()

# 註冊 API Blueprint
app.register_blueprint(create_user_controller(db), url_prefix='/api')
app.register_blueprint(create_role_controller(db), url_prefix='/api')
app.register_blueprint(create_user_wish_controller(db), url_prefix='/api')
app.register_blueprint(create_department_controller(db), url_prefix='/api')
app.register_blueprint(create_radar_data_controller(db), url_prefix='/api')
app.register_blueprint(create_portfolio_controller(db), url_prefix='/api')
app.register_blueprint(create_file_type_controller(db), url_prefix='/api')
app.register_blueprint(create_suggestion_controller(db), url_prefix='/api')
app.register_blueprint(create_suggestion_type_controller(db), url_prefix='/api')
app.register_blueprint(create_interview_question_controller(db), url_prefix='/api')
app.register_blueprint(create_diag_section_controller(db), url_prefix='/api')
app.register_blueprint(create_diag_type_controller(db), url_prefix='/api')
app.register_blueprint(create_faq_controller(db), url_prefix='/api')
app.register_blueprint(create_calendar_controller(db), url_prefix='/api')
app.register_blueprint(test_bp, url_prefix='/test')

from flask import Flask, render_template
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

@app.route("/")
def index():
    firebase_config = {
        "apiKey": Config.FIREBASE_API_KEY,
        "authDomain": Config.FIREBASE_AUTH_DOMAIN,
        "projectId": Config.FIREBASE_PROJECT_ID,
        "storageBucket": Config.FIREBASE_STORAGE_BUCKET,
        "messagingSenderId": Config.FIREBASE_MESSAGING_SENDER_ID,
        "appId": Config.FIREBASE_APP_ID
    }
    return render_template("index.html", firebase_config=firebase_config)


@app.route('/upload', methods=['POST'])
def upload():
    try:
        file = request.files['file']
        extension = os.path.splitext(file.filename)[1].lower()

        if extension not in app.config['ALLOWED_EXTENSIONS']:
            return "File type is not allowed.", 400

        blob = bucket.blob(f'uploads/{secure_filename(file.filename)}')
        blob.upload_from_file(file.stream, content_type=file.content_type)

    except RequestEntityTooLarge:
        return "File is larger than 16MB.", 413

    return redirect('/')

@app.route('/serve-image/<filename>', methods=['GET'])
def serve_image(filename):
    return send_from_directory(app.config['UPLOAD_DIRECTORY'], filename)

@app.route('/faq')
def faq_form():
    return render_template('faq.html')

@app.route('/home')
def home_form():
    return render_template('home.html')

@app.route('/file_upload&management')
def file_upload_form():
    return render_template('file_upload&management.html')

@app.route('/get-uploaded-files', methods=['GET'])
def get_uploaded_files():
    collection_ref = db.collection('uploaded_files')
    docs = collection_ref.stream()
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
            "uploaded_at": data.get("uploaded_at")
        })

    return jsonify(files)

@app.route('/save-file-metadata', methods=['POST'])
def save_file_metadata():
    data = request.get_json()
    #print("Saving file metadata:", data)
    collection_ref = db.collection('uploaded_files')
    doc_id = f"{data['school']}_{data['type']}_{data['filename']}"
    collection_ref.document(doc_id).set(data)
    return jsonify({"status": "success"}), 200

@app.route('/delete-file-metadata', methods=['POST'])
def delete_file_metadata():
    try:
        data = request.get_json()
        path = data.get('path')
        filename = data.get('filename')
        
        if not path or not filename:
            return jsonify({"error": "缺少必要參數"}), 400
        
        # 從 Firestore 中刪除文件元數據
        collection_ref = db.collection('uploaded_files')
        
        # 透過查詢找到相符的文件
        docs = collection_ref.where('path', '==', path).stream()
        
        # 檢查是否找到文件
        doc_found = False
        
        # 刪除所有匹配的文件
        for doc in docs:
            doc.reference.delete()
            doc_found = True
        
        if not doc_found:
            return jsonify({"error": "找不到文件記錄"}), 404
        
        return jsonify({"message": "文件元數據已成功刪除"}), 200
    
    except Exception as e:
        #print(f"刪除文件元數據時出錯: {str(e)}")
        return jsonify({"error": "刪除文件元數據失敗"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
