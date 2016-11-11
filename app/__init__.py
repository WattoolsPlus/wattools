from flask import Flask
from app.routes import main
from app.routes import api
from app.database import db


def create_app(object_name):
    app = Flask(__name__)

    app.config.from_object(object_name)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    app.register_blueprint(main)
    app.register_blueprint(api, url_prefix='/api')

    return app
