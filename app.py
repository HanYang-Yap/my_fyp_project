import os
import openai  # OpenAI
import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, render_template, request

from config import DevelopmentConfig, ProductionConfig, Config
from controllers.test_controller import test_bp
from controllers.user_controller import create_user_controller

app = Flask(__name__,template_folder="templates")

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
# db = app_config.init_firebase()

#Load Firebase credentials from .env file
cred = credentials.Certificate(Config.FIREBASE_CREDENTIALS)

#Initialize Firebase app with the credentials
firebase_admin.initialize_app(cred)

#Access Firestore database
db = firebase_admin.firestore.client()

# 註冊 API Blueprint
app.register_blueprint(create_user_controller(db), url_prefix='/api')  # User API
#app.register_blueprint(test_bp, url_prefix='/test')

if __name__ == '__main__':
    app.run(debug=True, port=5000)