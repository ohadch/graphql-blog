from server import app, db
from settings import HOST, PORT


if __name__ == '__main__':
    db.create_all()
    app.run(host="localhost", port=4000)
