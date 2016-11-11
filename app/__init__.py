from flask import Flask
from app.routes import main
from app.routes import api


def create_app():
    app = Flask(__name__)
    # app.config.from_object(object_name)

    app.register_blueprint(main)
    app.register_blueprint(api, url_prefix='/api')

    return app
