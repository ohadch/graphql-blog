from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from settings import DB_CONNECTION_STRING

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DB_CONNECTION_STRING
db = SQLAlchemy(app)
