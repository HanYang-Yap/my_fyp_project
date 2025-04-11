import os
import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask
from flask_cors import CORS
from flask_mail import Mail
from google.cloud import storage
from google.oauth2 import service_account

from config import DevelopmentConfig, ProductionConfig, Config
from extensions import mail
from utils.firebase_helper import get_firebase_config

# Import controllers
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
from controllers.file_controller import file_bp
from controllers.evaluation_controller import evaluation_bp
from repositories.otp_repository import OTPRepository


def create_app():
    app = Flask(__name__, template_folder="templates")
    
    configure_app(app)
    initialize_extensions(app)
    db = initialize_firebase()
    register_blueprints(app, db)
    register_main_routes(app)
    
    return app


def configure_app(app):
    app.config['UPLOAD_DIRECTORY'] = 'uploads/'
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB
    app.config['ALLOWED_EXTENSIONS'] = ['.jpg', '.jpeg', '.png', '.pdf']
    
    # Flask-Mail config
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = '111306025@g.nccu.edu.tw'
    app.config['MAIL_PASSWORD'] = 'waxi ngys lcpv onhx'
    app.config['MAIL_DEFAULT_SENDER'] = '111306025@g.nccu.edu.tw'
    
    # Load config based on environment
    env = os.getenv("FLASK_ENV", "development")
    if env == 'production':
        app_config = ProductionConfig()
    else:
        app_config = DevelopmentConfig()
    
    app.config.from_object(app_config)


def initialize_extensions(app):
    """
    Initialize Flask extensions
    
    Args:
        app: Flask application instance
    """
    # Initialize Flask-Mail
    mail.init_app(app)
    
    # Initialize CORS
    CORS(app)


def initialize_firebase():
    if not firebase_admin._apps:
        cred = credentials.Certificate(Config.FIREBASE_CREDENTIALS)
        firebase_admin.initialize_app(cred)
    db = firestore.client()
    OTPRepository.init_app(db)
    
    return db


def register_blueprints(app, db):
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
    app.register_blueprint(file_bp, url_prefix='/file')
    app.register_blueprint(evaluation_bp, url_prefix='/evaluation')
    app.register_blueprint(test_bp, url_prefix='/test')


def register_main_routes(app):
    """
    Register main application routes
    
    Args:
        app: Flask application instance
    """
    from flask import render_template, jsonify, redirect, request, send_from_directory, url_for
    from werkzeug.utils import secure_filename
    from werkzeug.exceptions import RequestEntityTooLarge
    
    @app.route("/")
    def index():
        firebase_config = get_firebase_config()
        return render_template("index.html", firebase_config=firebase_config)
    
    @app.route('/signup')
    def signup():
        return render_template('signup.html')
    
    @app.route("/login", methods=["GET", "POST"])
    def login():
        if request.method == "POST":
            email = request.form.get("email")
            password = request.form.get("password")
            
            if not email or not password:
                return jsonify({"error": "請輸入電子郵件和密碼"}), 400
            
            student_id = email
            return redirect(f"/home/{student_id}")
        
        firebase_config = get_firebase_config()
        return render_template("login.html", firebase_config=firebase_config)
    
    @app.route('/home/<student_id>')
    def home_form(student_id):
        return redirect(f'/api/home/{student_id}')
    
    @app.route('/file/analyze', methods=['GET', 'POST'])
    def analyze_file():
        return render_template('initAnalysis.html')
    
    @app.route('/file/queryGuidedQuestions')
    def file_query_guided_questions():
        return render_template('queryGuide.html')
    
    @app.route('/file/loading')
    def file_loading():
        return render_template('loading.html')
    
    @app.route('/file/detailedRevision')
    def file_detailed_revision():
        return render_template('detailedRevision.html')
    
    @app.route('/file/lastReview')
    def file_last_review():
        return render_template('lastreview.html')
    
    @app.route('/history')
    def history():
        return render_template('history.html')
    
    @app.route('/serve-image/<filename>', methods=['GET'])
    def serve_image(filename):
        return send_from_directory(app.config['UPLOAD_DIRECTORY'], filename)
    
    @app.route('/faq')
    @app.route('/faq/<student_id>')
    def faq_form(student_id=None):
        if student_id is None:
            return redirect('/api/faq/test_student_id')
        
        firebase_config = get_firebase_config()
        return render_template('faq.html', firebase_config=firebase_config, student_id=student_id)
    
    @app.route('/forgetpassword')
    def forget_password():
        return render_template('Forget Password.html')
    
    @app.route('/file_upload&management/<student_id>')
    def redirect_to_student_file_management(student_id):
        return redirect(f'/api/file-management/{student_id}')
    
    @app.route('/profile/<student_id>')
    def profile_form(student_id=None):
        firebase_config = get_firebase_config()
        return render_template('profile.html', firebase_config=firebase_config, student_id=student_id)
    
    @app.route('/calendar/<student_id>')
    def calendar_student_view(student_id):
        firebase_config = get_firebase_config()
        return render_template(
            'calendar.html',
            firebase_config=firebase_config,
            student_id=student_id
        )


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)