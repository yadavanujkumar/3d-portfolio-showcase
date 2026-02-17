from flask import Blueprint, jsonify
from models import get_all_items, get_item_by_id

portfolio_routes = Blueprint('portfolio', __name__)

@portfolio_routes.route('/api/portfolio', methods=['GET'])
def get_portfolio():
    return jsonify(get_all_items())

@portfolio_routes.route('/api/portfolio/<int:item_id>', methods=['GET'])
def get_portfolio_item(item_id):
    item = get_item_by_id(item_id)
    if item:
        return jsonify(item)
    return jsonify({'error': 'Item not found'}), 404