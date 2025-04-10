from models.otp_model import OTP

class OTPRepository:
    db = None  # Firestore 實體

    @classmethod
    def init_app(cls, db_instance):
        cls.db = db_instance

    @classmethod
    def save_otp(cls, email, otp_code):
        otp_doc = OTP(email=email, otp_code=otp_code)
        cls.db.collection("otps").document(email).set(otp_doc.to_dict())

    @classmethod
    def get_otp(cls, email):
        doc = cls.db.collection("otps").document(email).get()
        if doc.exists:
            return OTP.from_dict(doc.to_dict())
        return None

    @classmethod
    def delete_otp(cls, email):
        cls.db.collection("otps").document(email).delete()