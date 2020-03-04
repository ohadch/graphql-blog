from server import app, db
from settings import HOST, PORT
from server.graphql import schema
from flask_graphql import GraphQLView

db.create_all()

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        # for having the GraphiQL interface
        graphiql=True
    )
)

if __name__ == '__main__':
    app.run(host=HOST, port=PORT)
