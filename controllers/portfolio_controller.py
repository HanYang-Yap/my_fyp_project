from flask import Blueprint, jsonify, request
from services.portfolio_service import PortfolioService

def create_portfolio_controller(db):
    """Initialize Flask Blueprint and bind Portfolio API"""
    portfolio_bp = Blueprint('portfolio_bp', __name__)
    portfolio_service = PortfolioService(db)

    @portfolio_bp.route('/portfolios', methods=['POST'])
    def create_portfolio():
        """Create new portfolio"""
        try:
            data = request.get_json()
            portfolio_id = data.get('portfolio_id')
            user_id = data.get('user_id')
            file_type_id = data.get('file_type_id')
            file_size = data.get('file_size')
            file_name = data.get('file_name')
            file_path = data.get('file_path')

            if not portfolio_id or not user_id or not file_type_id or not file_size or not file_name or not file_path:
                return jsonify({"error": "Missing required fields"}), 400

            portfolio = portfolio_service.create_portfolio(portfolio_id, user_id, file_type_id, file_size, file_name, file_path)
            return jsonify(portfolio.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @portfolio_bp.route('/portfolios/<portfolio_id>', methods=['GET'])
    def get_portfolio(portfolio_id):
        """Get portfolio"""
        portfolio = portfolio_service.get(portfolio_id)
        if portfolio:
            return jsonify(portfolio.to_dict()), 200
        return jsonify({"error": "Portfolio not found"}), 404

    @portfolio_bp.route('/portfolios/<portfolio_id>', methods=['PUT'])
    def update_portfolio(portfolio_id):
        """Update portfolio"""
        try:
            data = request.get_json()
            file_type_id = data.get('file_type_id')
            file_size = data.get('file_size')
            file_name = data.get('file_name')
            file_path = data.get('file_path')

            updated_portfolio = portfolio_service.update_portfolio(portfolio_id, file_type_id, file_size, file_name, file_path)
            if updated_portfolio:
                return jsonify(updated_portfolio.to_dict()), 200
            return jsonify({"error": "Portfolio not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @portfolio_bp.route('/portfolios/<portfolio_id>', methods=['DELETE'])
    def delete_portfolio(portfolio_id):
        """Delete portfolio"""
        deleted = portfolio_service.delete_portfolio(portfolio_id)
        if deleted:
            return jsonify({"message": "Portfolio deleted successfully"}), 200
        return jsonify({"error": "Portfolio not found"}), 404

    return portfolio_bp
