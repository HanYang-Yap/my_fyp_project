import os
import openai  # OpenAI
import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, redirect, render_template, request, send_from_directory
from werkzeug.utils import secure_filename
from werkzeug.exceptions import RequestEntityTooLarge
from google.cloud import storage
#from io import BtyesIO
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

app = Flask(__name__,template_folder="templates")
app.config['UPLOAD_DIRECTORY'] = 'uploads/'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024     #16MB
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
# Firebase initialization should be done only once
if not firebase_admin._apps:
    cred = credentials.Certificate(Config.FIREBASE_CREDENTIALS)
    firebase_admin.initialize_app(cred)

# Load credentials from service account JSON
gcs_credentials = service_account.Credentials.from_service_account_file(
    Config.FIREBASE_CREDENTIALS
)

# Create storage client with credentials
storage_client = storage.Client(credentials=gcs_credentials)
bucket = storage_client.bucket(Config.FIREBASE_STORAGE_BUCKET)


# Access Firestore jdatabase
db = firestore.client()

# 註冊 API Blueprint
app.register_blueprint(create_user_controller(db), url_prefix='/api')  # User API
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

app.register_blueprint(test_bp, url_prefix='/test')

@app.route('/')
def index():
    blobs = bucket.list_blobs(prefix='uploads/')
    images = []

    for blob in blobs:
        if any(blob.name.endswith(ext) for ext in app.config['ALLOWED_EXTENSIONS']):
            # Generate public URL or signed URL
            images.append(blob.public_url)

    return render_template('upload_file.html', images=images)

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


if __name__ == '__main__':
    app.run(debug=True, port=5000)