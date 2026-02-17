portfolio_items = [
    {
        'id': 1,
        'title': '3D Model Viewer',
        'description': 'A web-based 3D model viewer built with Three.js.',
        'model_url': '/static/models/model1.glb'
    },
    {
        'id': 2,
        'title': 'Interactive Globe',
        'description': 'An interactive 3D globe showcasing data visualization.',
        'model_url': '/static/models/model2.glb'
    }
]

def get_all_items():
    return portfolio_items

def get_item_by_id(item_id):
    return next((item for item in portfolio_items if item['id'] == item_id), None)