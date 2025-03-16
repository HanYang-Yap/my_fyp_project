from repositories.base_repository import BaseRepository
from models.radar_data_model import RadarData

class RadarDataRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, RadarData, custom_id_field="radar_id")
