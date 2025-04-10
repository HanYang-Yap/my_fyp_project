from datetime import datetime, timedelta

class OTP:
    def __init__(self, email, otp_code, created_at=None, expires_at=None):
        """
        :param email: 用戶 Email
        :param otp_code: 一次性密碼
        :param created_at: 創建時間
        :param expires_at: 過期時間
        """
        self.email = email
        self.otp_code = otp_code
        self.created_at = created_at or datetime.utcnow()
        self.expires_at = expires_at or (self.created_at + timedelta(minutes=5))

    def to_dict(self):
        """轉換為 Firestore 存儲的字典"""
        return {
            "email": self.email,
            "otp_code": self.otp_code,
            "created_at": self.created_at.isoformat(),
            "expires_at": self.expires_at.isoformat()
        }

    @staticmethod
    def from_dict(data):
        """從 Firestore 讀取數據並轉換為 OTP 物件"""
        return OTP(
            email=data.get("email"),
            otp_code=data.get("otp_code"),
            created_at=datetime.fromisoformat(data.get("created_at")),
            expires_at=datetime.fromisoformat(data.get("expires_at"))
        )

    def is_expired(self):
        """檢查 OTP 是否已過期"""
        return datetime.utcnow() > self.expires_at
