from datetime import datetime
from models.portfolio_model import Portfolio
from models.suggestion_type_model import Suggestion_Type

class Suggestion:

    def __init__(self, suggestion_id, portfolio_id, suggestion_type_id, original_text, suggested_text, created_at=None):

        self.suggestion_id = suggestion_id
        self.portfolio_id = portfolio_id
        self.sugesstion_type_id = suggestion_type_id
        self.original_text = original_text
        self.suggested_text = suggested_text
        self.created_at = created_at or datetime.utcnow()

        self.portfolio = None
        self.suggestion_type = None

    def to_dict(self):

        return {
            "suggestion_id": self.suggestion_id,
            "portfolio_id": self.portfolio_id,
            "sugesstion_type_id": self.sugesstion_type_id,
            "original_text": self.original_text,
            "suggested_text": self.suggested_text,
            "created_at": self.created_at
        }
    
    @staticmethod
    def from_dict(data):

        suggestion = Suggestion(
            suggestion_id=data.get("suggestion_id"),
            portfolio_id=data.get("portfolio_id"),
            sugesstion_type_id=data.get("sugesstion_type_id"),
            original_text=data.get("original_text"),
            suggested_text=data.get("suggested_text"),
            created_at=data.get("created_at")
        )

        portfolio_data = get_portfolio_from_id(data.get("portfolio_id"))
        suggestion_type_data = get_suggestion_type_from_id(data.get("suggestion_type_id"))

        suggestion.set_portfolio(portfolio_data)
        suggestion.set_suggestion_type(suggestion_type_data)

        return suggestion
    
    def set_portfolio(self, portfolio_data):
        if portfolio_data:
            self.portfolio = Portfolio.from_dict(portfolio_data)
    
    def set_suggestion_type(self, suggestion_type_data):
        if suggestion_type_data:
            self.suggestion_type = Suggestion_Type.from_dict(suggestion_type_data)

def get_portfolio_from_id(portfolio_id):
    from app import db
    portfolio_ref = db.collection("portfolios").document(str(portfolio_id))
    portfolio_doc = portfolio_ref.get()
    if portfolio_doc.exists:
        return portfolio_doc.to_dict()
    return None

def get_suggestion_type_from_id(suggestion_type_id):
    from app import db
    suggestion_type_ref = db.collection("suggestion_types").document(str(suggestion_type_id))
    suggestion_type_doc = suggestion_type_ref.get()
    if suggestion_type_doc.exists:
        return suggestion_type_doc.to_dict()
    return None
