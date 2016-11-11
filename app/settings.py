import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    DATABASE_URL = os.environ['DATABASE_URL']
    SQLALCHEMY_DATABASE_URI = DATABASE_URL


class ProductionConfig(Config):
    ENV = "Prod"


class StagingConfig(Config):
    DEVELOPMENT = True
    DEBUG = True
    ENV = "Stage"


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True
    ENV = "Dev"


class TestingConfig(Config):
    TESTING = True
    ENV = "Test"
