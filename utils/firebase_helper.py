from config import Config

def get_firebase_config():
    """
    Returns a dictionary containing the Firebase configuration
    
    Returns:
        dict: Firebase configuration dictionary for frontend use
    """
    return {
        "apiKey": Config.FIREBASE_API_KEY,
        "authDomain": Config.FIREBASE_AUTH_DOMAIN,
        "projectId": Config.FIREBASE_PROJECT_ID,
        "storageBucket": Config.FIREBASE_STORAGE_BUCKET,
        "messagingSenderId": Config.FIREBASE_MESSAGING_SENDER_ID,
        "appId": Config.FIREBASE_APP_ID
    }