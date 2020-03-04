from server import db


class Member(db.Model):

    __tablename__ = 'member'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.email


class Post(db.Model):
    __tablename__ = 'post'

    id = db.Column(db.Integer, primary_key=True)
    header = db.Column(db.String(120), nullable=False)
    content = db.Column(db.Text, nullable=False)

    member_id = db.Column(db.Integer, db.ForeignKey("member.id"))
    member = db.relationship("Member")

    def __repr__(self):
        return f"<Post({self.header}>"


class Comment(db.Model):
    __tablename__ = 'comment'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    member_id = db.Column(db.Integer, db.ForeignKey("member.id"))
    member = db.relationship("Member")

    post_id = db.Column(db.Integer, db.ForeignKey("post.id"))
    post = db.relationship("Post")

    def __repr__(self):
        return '<Comment %r>' % self.content
