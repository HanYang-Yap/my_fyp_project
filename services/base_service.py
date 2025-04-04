class BaseService:
    def __init__(self, repository):
        self.repository = repository

    def create(self, data):
        """Create a new object"""
        obj = self.repository.model_class(**data)
        self.repository.add(obj)
        return obj

    def get(self, obj_id):
        """Get an object by ID"""
        return self.repository.get(obj_id)

    def update(self, obj_id, data):
        """Update an existing object"""
        obj = self.repository.get(obj_id)
        if obj:
            for key, value in data.items():
                setattr(obj, key, value)
            self.repository.update(obj)
            return obj
        return None

    def delete(self, obj_id):
        """Delete an object by ID"""
        return self.repository.delete(obj_id)
