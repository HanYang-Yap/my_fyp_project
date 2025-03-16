from services.base_service import BaseService
from repositories.department_repository import DepartmentRepository
from models.department_model import Department

class DepartmentService(BaseService):
    def __init__(self, db):
        department_repository = DepartmentRepository(db)
        super().__init__(department_repository)

    def create_department(self, department_id, school_name, department_name):
        """Create a new department"""
        if not department_id or not school_name or not department_name:
            raise ValueError("department_id, school_name, and department_name cannot be empty")
        
        department = Department(department_id, school_name, department_name)
        self.repository.add(department)
        return department

    def update_department(self, department_id, school_name, department_name):
        """Update department information"""
        existing_department = self.get(department_id)
        if not existing_department:
            return None

        existing_department.school_name = school_name
        existing_department.department_name = department_name
        self.repository.update(existing_department)
        return existing_department

    def delete_department(self, department_id):
        """Delete a department"""
        existing_department = self.get(department_id)
        if not existing_department:
            return False
        
        self.repository.delete(department_id)
        return True
