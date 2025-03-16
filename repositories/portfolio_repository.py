from repositories.base_repository import BaseRepository
from models.portfolio_model import Portfolio

class PortfolioRepository(BaseRepository):
    def __init__(self, db):
        super().__init__(db, Portfolio, custom_id_field="portfolio_id")
