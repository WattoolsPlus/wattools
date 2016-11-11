import os
from flask_script import Manager, prompt_bool
from flask_migrate import Migrate, MigrateCommand
from app.tools.models import Tool
from app import create_app
from app.database import db


env = os.environ.get('WATTOOLS_ENV', 'development')

app = create_app('app.settings.%sConfig' % env.capitalize())
migrate = Migrate(app, db)
manager = Manager(app)
manager.add_command('db', MigrateCommand)


@manager.shell
def make_shell_context():
    return dict(
        app=app,
        db=db,
        Tool=Tool,
    )


@manager.command
def run():
    # port = int(os.environ.get("PORT", 5000))
    port = 5000
    app.run(host='0.0.0.0', port=port)


@manager.command
def create_db(num_users=5):
    """ Creates a database with all of the tables defined in
        your SQLAlchemy models and populate the user table
    """
    db.create_all()


@manager.command
def drop_db():
    """Drops database tables."""
    if prompt_bool('Are you sure?'):
        db.drop_all()


@manager.command
def recreate_db():
    """Same as running drop_db() and create_db()."""
    drop_db()
    create_db()

if __name__ == "__main__":
    manager.run()
