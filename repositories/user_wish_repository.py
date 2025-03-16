from repositories.base_repository import BaseRepository
from models.user_wish_model import UserWish

class UserWishRepository(BaseRepository):
    
    def __init__(self, db):
        super().__init__(db, UserWish, custom_id_field="user_id")
