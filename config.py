import os
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials, firestore

# Load from .env file
load_dotenv()

class Config:
    """基礎設定 (適用於所有環境)"""

    # Flask
    FLASK_ENV = os.getenv("FLASK_ENV", "development")
    DEBUG = os.getenv("DEBUG", "True") == "True"
    SECRET_KEY = os.getenv("SECRET_KEY", "my_development_secret_key")

    # OpenAI
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

    # Firebase Admin SDK (後端)
    FIREBASE_CREDENTIALS = os.getenv("FIREBASE_CREDENTIALS", "config/fyp-g1-project-firebase-credentials.json")
    FIREBASE_STORAGE_BUCKET = os.getenv("FIREBASE_STORAGE_BUCKET", "fyp-g1-project.appspot.com")

    # Firebase Web SDK (前端 JS)
    FIREBASE_API_KEY = os.getenv("FIREBASE_API_KEY")
    FIREBASE_AUTH_DOMAIN = os.getenv("FIREBASE_AUTH_DOMAIN")
    FIREBASE_PROJECT_ID = os.getenv("FIREBASE_PROJECT_ID")
    FIREBASE_MESSAGING_SENDER_ID = os.getenv("FIREBASE_MESSAGING_SENDER_ID")
    FIREBASE_APP_ID = os.getenv("FIREBASE_APP_ID")

    @staticmethod
    def init_firebase():
        """初始化 Firebase Admin (後端)"""
        if not firebase_admin._apps:
            cred = credentials.Certificate(Config.FIREBASE_CREDENTIALS)
            firebase_admin.initialize_app(cred, {
                'storageBucket': Config.FIREBASE_STORAGE_BUCKET
            })
        return firestore.client()


class DevelopmentConfig(Config):
    """開發環境"""
    FLASK_ENV = "development"
    DEBUG = True


class ProductionConfig(Config):
    """正式環境"""
    FLASK_ENV = "production"
    DEBUG = False
