import os

import firebase_admin
from dotenv import load_dotenv
from firebase_admin import credentials, firestore

load_dotenv()

class Config:
    """基礎設定 (適用於所有環境)"""
    #SECRET_KEY = os.getenv("SECRET_KEY", "default_secret_key")

    # OpenAI
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", None)  # OpenAI API
    
    FLASK_ENV = os.getenv("FLASK_ENV", "development")
    DEBUG = os.getenv("DEBUG", "True")
    SECRET_KEY = os.getenv("SECRET_KEY", "my_development_secret_key")
    FIREBASE_CREDENTIALS = os.getenv("FIREBASE_CREDENTIALS", "config/fyp-g1-project-firebase-credentials.json")

    # # Firebase
    # @staticmethod
    # def init_firebase():
    #     cred_path = os.getenv('FIREBASE_CREDENTIALS')
    #     if not cred_path:
    #         raise ValueError("未在.env中填寫FIREBASE_CREDENTIALS")
    #     if not firebase_admin._apps:
    #         cred = credentials.Certificate(cred_path)
    #         firebase_admin.initialize_app(cred)
    #     return firestore.client()

    #DEBUG = os.getenv("DEBUG", "False") == "True"  # 轉換為布林值

class DevelopmentConfig(Config):
    """開發環境"""
    DEBUG = True
    # DATABASE_URL = "sqlite:///development.db"
    FLASK_ENV = "development"

class ProductionConfig(Config):
    """正式環境"""
    DEBUG = False
    # DATABASE_URL = os.getenv("DATABASE_URL")  # 正式環境要求提供 DB 連線資訊
    FLASK_ENV = "production"
