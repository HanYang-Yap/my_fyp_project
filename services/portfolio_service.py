from services.base_service import BaseService
from repositories.portfolio_repository import PortfolioRepository
from models.portfolio_model import Portfolio

class PortfolioService(BaseService):
    def __init__(self, db):
        portfolio_repository = PortfolioRepository(db)
        super().__init__(portfolio_repository)

    def create_portfolio(self, portfolio_id, user_id, file_type_id, file_size, file_name, file_path):
        """Create a new portfolio"""
        if not portfolio_id or not user_id or not file_type_id or not file_size or not file_name or not file_path:
            raise ValueError("All fields must be provided")
        
        portfolio = Portfolio(portfolio_id, user_id, file_type_id, file_size, file_name, file_path)
        self.repository.add(portfolio)
        return portfolio

    def update_portfolio(self, portfolio_id, file_type_id, file_size, file_name, file_path):
        """Update portfolio information"""
        existing_portfolio = self.get(portfolio_id)
        if not existing_portfolio:
            return None

        existing_portfolio.file_type_id = file_type_id
        existing_portfolio.file_size = file_size
        existing_portfolio.file_name = file_name
        existing_portfolio.file_path = file_path
        self.repository.update(existing_portfolio)
        return existing_portfolio

    def delete_portfolio(self, portfolio_id):
        """Delete a portfolio"""
        existing_portfolio = self.get(portfolio_id)
        if not existing_portfolio:
            return False
        
        self.repository.delete(portfolio_id)
        return True
