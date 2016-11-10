from flask_script import Manager
from app import create_app


app = create_app()
manager = Manager(app)


@manager.command
def run():
    # port = int(os.environ.get("PORT", 5000))
    port = 5000
    app.run(host='0.0.0.0', port=port)

if __name__ == "__main__":
    manager.run()
