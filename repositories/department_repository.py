from repositories.base_repository import BaseRepository
from models.department_model import Department

class DepartmentRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, Department, custom_id_field="department_id")
