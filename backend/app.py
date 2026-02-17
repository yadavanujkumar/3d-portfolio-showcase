from flask import Flask
from routes import portfolio_routes

app = Flask(__name__)

# Register routes
app.register_blueprint(portfolio_routes)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)