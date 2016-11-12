from flask import Flask, Blueprint, jsonify, request
from database import db
from tools.models import Tool
from tools.models import States
from flask.ext.cors import CORS
import os

main = Blueprint('main', __name__)
api = Blueprint('api', __name__)

dirname=os.path.dirname
static_assets_path = os.path.join(dirname(dirname(__file__)), os.path.join('client', 'dist'))
app = Flask(__name__, static_folder=static_assets_path)
CORS(app)

################################
#               MAIN
# ##############################
@main.route('/')
def root():
    print static_assets_path
    return app.send_static_file("index.html")

################################
#               API
# ##############################
@api.route('/tools/')
def get_tools():
    state = request.args.get('state', None)
    if state:
        tools = Tool.query.filter_by(state=States(state)).all()
    else:
        tools = Tool.query.all()

    return jsonify(
        data=[tool.serialize() for tool in tools]
    )


@api.route('/tool/', methods=['POST'])
def create_tool():
    data = request.get_json()

    try:
        tool = Tool(
            title=data['title'],
            description=data['description'],
            author=data.get('author', None),
            author_link=data.get('author_link', None),
            link=data['link'],
            source_link=data.get('source_link', None),
            category=data['category'],
            state=States.PENDING
        )

        db.session.add(tool)
        db.session.commit()

        return jsonify(
            id=tool.id,
            success=True,
            message='New Tool created!'
        )
    except Exception as e:
        return jsonify(
            success=False,
            message=str(e)
        )


@api.route('/judge/', methods=['POST'])
def judge_tool():
    data = request.get_json()

    try:
        id = int(data['id'])
        state = data['state']
        auth_token = data['auth_token']

        tool = Tool.query.get(id)
        tool.state = States(state)
        db.session.add(tool)
        db.session.commit()

        return jsonify(
            id=tool.id,
            success=True,
            message='Changed state to {}'.format(state)
        )
    except Exception as e:
        return jsonify(
            success=False,
            message=str(e)
        )
