from flask import Blueprint, jsonify, request
from database import db
from tools.models import Tool
from tools.models import States

main = Blueprint('main', __name__)
api = Blueprint('api', __name__)


################################
#               MAIN
# ##############################
@main.route('/')
def home():
    return "Hello Wattools!"


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

    # HACK so far we have no validation, need to do that later
    tool = Tool(
        title=data.get('title', ''),
        description=data.get('description', ''),
        author=data.get('author', None),
        author_link=data.get('author_link', None),
        link=data.get('link', ''),
        source_link=data.get('source_link', None),
        state=States.PENDING
    )

    db.session.add(tool)
    db.session.commit()
