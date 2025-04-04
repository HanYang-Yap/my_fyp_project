from services.base_service import BaseService
from repositories.radar_data_repository import RadarDataRepository
from models.radar_data_model import RadarData

class RadarDataService(BaseService):
    def __init__(self, db):
        radar_data_repository = RadarDataRepository(db)
        super().__init__(radar_data_repository)

    def create_radar_data(self, radar_id, user_id, typos_punctuation, off_topic, conciseness, 
                          expansion, structure, completeness):
        """Create a new radar data"""
        if not radar_id or not user_id or not isinstance(typos_punctuation, (float, int)) or \
           not isinstance(off_topic, (float, int)) or not isinstance(conciseness, (float, int)) or \
           not isinstance(expansion, (float, int)) or not isinstance(structure, (float, int)) or \
           not isinstance(completeness, (float, int)):
            raise ValueError("Invalid data types for one or more fields.")
        
        radar_data = RadarData(radar_id, user_id, typos_punctuation, off_topic, conciseness, 
                               expansion, structure, completeness)
        self.repository.add(radar_data)  # Calls the add method from BaseRepository
        return radar_data

    def update_radar_data(self, radar_id, typos_punctuation, off_topic, conciseness, 
                          expansion, structure, completeness):
        """Update radar data information"""
        existing_radar_data = self.get(radar_id)
        if not existing_radar_data:
            return None

        existing_radar_data.typos_punctuation = typos_punctuation
        existing_radar_data.off_topic = off_topic
        existing_radar_data.conciseness = conciseness
        existing_radar_data.expansion = expansion
        existing_radar_data.structure = structure
        existing_radar_data.completeness = completeness
        self.repository.update(existing_radar_data)  # Calls the update method from BaseRepository
        return existing_radar_data

    def delete_radar_data(self, radar_id):
        """Delete radar data"""
        existing_radar_data = self.get(radar_id)
        if not existing_radar_data:
            return False
        
        self.repository.delete(radar_id)  # Calls the delete method from BaseRepository
        return True
