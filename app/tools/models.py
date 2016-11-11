# import enum

from app.database import db


class States(db.Enum):
    PENDING = 'pending'
    APPROVED = 'approved'
    REJECTED = 'rejected'


class Tool(db.Model):
    __tablename__ = 'tools'

    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.String(80), nullable=False, unique=True)
    description = db.Column(db.String(512), nullable=False)
    author = db.Column(db.String(50))
    author_link = db.Column(db.String(256))
    link = db.Column(db.String(256), nullable=False)
    source_link = db.Column(db.String(256))
    state = db.Column(States, nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'rate': self.rate,
            'rate_unit': self.rate_unit,
            'owner_id': self.owner_id,
            'image_url': self.image_url
        }
