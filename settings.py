import os

HOST = "localhost"
PORT = 4000
DB_CONNECTION_STRING = f'sqlite:///{os.path.join(os.getcwd(), "database.db")}'
