from flask import Blueprint, jsonify, request, Response
from database import db
from tools.models import Tool
from tools.models import States
from functools import wraps
import os
from textsum import FrequencySummarizer

def check_auth(username, password):
    """This function is called to check if a username /
    password combination is valid.
    """
    return username == 'admin' and password == os.environ['ADMIN_PW']


def authenticate():
    """Sends a 401 response that enables basic auth"""
    return Response(
        'Could not verify your access level for that URL.\n'
        'You have to login with proper credentials', 401,
        {'WWW-Authenticate': 'Basic realm="Login Required"'})


def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth or not check_auth(auth.username, auth.password):
            return authenticate()
        return f(*args, **kwargs)
    return decorated

dirname = os.path.dirname
static_assets_path = os.path.join(
    dirname(dirname(dirname(__file__))), os.path.join('client', 'dist'))
main = Blueprint('main', __name__, static_folder=static_assets_path)
api = Blueprint('api', __name__)

# text summarizer
fs = FrequencySummarizer()

################################
#               MAIN
# ##############################


@main.route('/')
@main.route('/submit')
def home():
    print static_assets_path
    return main.send_static_file('index.html')


@main.route('/admin')
@requires_auth
def admin():
    return main.send_static_file('index.html')


@main.route('/bundle.js')
def bundle():
    return main.send_static_file('bundle.js')


@main.route('/test')
def hello():
    return "Hello World!"


@main.route('/addqd')
@requires_auth
def add_quick_description():
    # tools = Tool.query.filter_by(quick_description=None).all()
    tools = Tool.query.all()
    for tool in tools:
        description = tool.description
        quick_description = fs.summarize(description, 1)
        if quick_description is not None and len(quick_description) > 0:
            quick_description = quick_description[0]
        else:
            quick_description = None
        print description, quick_description
        tool.quick_description = quick_description
    db.session.commit()
    return "Successfully added quick description"

################################
#               API
# ##############################

@api.route('/tools/')
def get_tools():
    state = request.args.get('state', States.APPROVED)
    tools = Tool.query.filter_by(state=States(state)).all()

    return jsonify(
        data=[tool.serialize() for tool in tools]
    )


@api.route('/tool/', methods=['POST'])
def create_tool():
    data = request.get_json()

    try:
        quick_description = fs.summarize(data['description'], 1)
        tool = Tool(
            title=data['title'],
            quick_description=quick_description,
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
