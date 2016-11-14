import enum
from app.database import db


class States(enum.Enum):
    PENDING = 'pending'
    APPROVED = 'approved'
    REJECTED = 'rejected'


class Tool(db.Model):
    __tablename__ = 'tools'

    id = db.Column(db.Integer(), primary_key=True)
    category = db.Column(db.String(80), nullable=False)
    title = db.Column(db.String(80), nullable=False, unique=True)
    quick_description = db.Column(db.String(256), nullable=True)
    description = db.Column(db.String(512), nullable=False)
    author = db.Column(db.String(50))
    author_link = db.Column(db.String(256))
    link = db.Column(db.String(256), nullable=False)
    source_link = db.Column(db.String(256))
    state = db.Column(db.Enum(States), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'category': self.category,
            'title': self.title,
            'quick_description': self.quick_description,
            'description': self.description,
            'author': self.author,
            'author_link': self.author_link,
            'link': self.link,
            'source_link': self.source_link,
            'state': self.state,
        }
