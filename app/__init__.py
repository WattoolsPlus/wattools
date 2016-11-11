from flask import Flask
from flask.json import JSONEncoder
from app.routes import main
from app.routes import api
from app.database import db
from app.tools.models import States


# http://flask.pocoo.org/snippets/119/
class CustomJSONEncoder(JSONEncoder):
    def default(self, obj):
        try:
            if isinstance(obj, States):
                return str(obj.value)
            iterable = iter(obj)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, obj)


def create_app(object_name):
    app = Flask(__name__)
    app.json_encoder = CustomJSONEncoder

    app.config.from_object(object_name)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    app.register_blueprint(main)
    app.register_blueprint(api, url_prefix='/api')

    return app
