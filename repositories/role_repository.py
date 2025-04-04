from models.role_model import Role
from repositories.base_repository import BaseRepository

class RoleRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, Role, custom_id_field="role_id")