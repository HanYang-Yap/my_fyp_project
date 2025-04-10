import os
import openai
import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, redirect, render_template, request, send_from_directory
from werkzeug.utils import secure_filename
from werkzeug.exceptions import RequestEntityTooLarge
from google.cloud import storage
from google.oauth2 import service_account
from extensions import mail
from flask_cors import CORS

from config import DevelopmentConfig, ProductionConfig, Config
from controllers.test_controller import test_bp
from controllers.user_controller import create_user_controller
from controllers.role_controller import create_role_controller
from controllers.user_wish_controller import create_user_wish_controller
from controllers.department_controller import create_department_controller
from controllers.radar_data_controller import create_radar_data_controller
from controllers.portfolio_management_controller import create_portfolio_management_controller
from controllers.file_type_controller import create_file_type_controller
from controllers.suggestion_controller import create_suggestion_controller
from controllers.suggestion_type_controller import create_suggestion_type_controller
from controllers.interview_question_controller import create_interview_question_controller
from controllers.diag_section_controller import create_diag_section_controller
from controllers.diag_type_controller import create_diag_type_controller
from controllers.faq_controller import create_faq_controller
from controllers.calendar_controller import create_calendar_controller
from controllers.profile_controller import create_profile_controller
from controllers.home_controller import create_home_controller
from repositories.otp_repository import OTPRepository

app = Flask(__name__, template_folder="templates")
app.config['UPLOAD_DIRECTORY'] = 'uploads/'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB
app.config['ALLOWED_EXTENSIONS'] = ['.jpg', '.jpeg', '.png', '.pdf']
# Flask-Mail 設定（以 Gmail 為例）
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = '111306025@g.nccu.edu.tw'
app.config['MAIL_PASSWORD'] = 'waxi ngys lcpv onhx'
app.config['MAIL_DEFAULT_SENDER'] = '111306025@g.nccu.edu.tw'
mail.init_app(app)
CORS(app)

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
OTPRepository.init_app(db)

# 註冊 API Blueprint
app.register_blueprint(create_user_controller(db), url_prefix='/api')
app.register_blueprint(create_role_controller(db), url_prefix='/api')
app.register_blueprint(create_user_wish_controller(db), url_prefix='/api')
app.register_blueprint(create_department_controller(db), url_prefix='/api')
app.register_blueprint(create_radar_data_controller(db), url_prefix='/api')
app.register_blueprint(create_portfolio_management_controller(db), url_prefix='/api')
app.register_blueprint(create_file_type_controller(db), url_prefix='/api')
app.register_blueprint(create_suggestion_controller(db), url_prefix='/api')
app.register_blueprint(create_suggestion_type_controller(db), url_prefix='/api')
app.register_blueprint(create_interview_question_controller(db), url_prefix='/api')
app.register_blueprint(create_diag_section_controller(db), url_prefix='/api')
app.register_blueprint(create_diag_type_controller(db), url_prefix='/api')
app.register_blueprint(create_faq_controller(db), url_prefix='/api')
app.register_blueprint(create_calendar_controller(db), url_prefix='/api/calendar')
app.register_blueprint(create_profile_controller(db), url_prefix='/api/profile')
app.register_blueprint(create_home_controller(db), url_prefix='/api/home')
app.register_blueprint(test_bp, url_prefix='/test')

from flask import Flask, render_template
from config import Config


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

@app.route("/login")
def login():
    return render_template("login.html")

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/home')
@app.route('/home/<student_id>')
def home_form(student_id=None):
    if student_id is None:
        student_id = "test_student_id"
    # Redirect to the blueprint route
    return redirect(f'/api/home/{student_id}')

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
@app.route('/faq/<student_id>')
def faq_form(student_id):
        
    firebase_config = {
        "apiKey": Config.FIREBASE_API_KEY,
        "authDomain": Config.FIREBASE_AUTH_DOMAIN,
        "projectId": Config.FIREBASE_PROJECT_ID,
        "storageBucket": Config.FIREBASE_STORAGE_BUCKET,
        "messagingSenderId": Config.FIREBASE_MESSAGING_SENDER_ID,
        "appId": Config.FIREBASE_APP_ID
    }
    
    return render_template('faq.html', firebase_config=firebase_config, student_id=student_id)

@app.route('/faq')
def faq_redirect():
    return redirect('/api/faq/test_student_id')

@app.route('/forgetpassword')
def forget_password():
    return render_template('Forget Password.html') 

@app.route('/file_upload&management')
def redirect_to_file_management():
    return redirect('/api/file-management/test_student_id')

@app.route('/file_upload&management/<student_id>')
def redirect_to_student_file_management(student_id):
    return redirect(f'/api/file-management/{student_id}')

@app.route('/profile')
def redicrect_to_profile():
    return redirect('/profile/test_student_id')

@app.route('/profile/<student_id>')
def profile_form(student_id=None):
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
    return render_template('profile.html', firebase_config=firebase_config, student_id=student_id)

@app.route('/calendar/<student_id>')
def calendar_student_view(student_id):
    firebase_config = {
        "apiKey": Config.FIREBASE_API_KEY,
        "authDomain": Config.FIREBASE_AUTH_DOMAIN,
        "projectId": Config.FIREBASE_PROJECT_ID,
        "storageBucket": Config.FIREBASE_STORAGE_BUCKET,
        "messagingSenderId": Config.FIREBASE_MESSAGING_SENDER_ID,
        "appId": Config.FIREBASE_APP_ID
    }
    
    # Pass the student_id to the template
    return render_template(
        'calendar.html', 
        firebase_config=firebase_config, 
        student_id=student_id
    )

if __name__ == '__main__':
        app.run(debug=True, port=5000)
