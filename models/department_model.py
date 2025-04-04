
class Department:

    def __init__(self, department_id, department_name, school_name):
        self.department_id = department_id
        self.department_name = department_name
        self.school_name = school_name

    def to_dict(self):

        return {
            "department_id": self.department_id,
            "department_name": self.department_name,
            "school_name": self.school_name
        }
    
    @staticmethod
    def from_dict(data):

        return Department(
            department_id=data.get("department_id"),
            department_name=data.get("department_name"),
            school_name=data.get("school_name")
        )