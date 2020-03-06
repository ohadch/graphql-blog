const { ApolloServer } = require("apollo-server");
const isEmail = require("isemail");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { sequelize, store } = require("./database");

const UserAPI = require("./datasources/user");
const PostAPI = require("./datasources/post");
const CommentAPI = require("./datasources/comment");


const server = new ApolloServer({
    context: async ({ req }) => {
        // Auth check on request
        const auth = req.headers && req.headers.authorization || '';
        const email = Buffer.from(auth, 'base64').toString('ascii');
        if (!isEmail.validate(email)) return {user: null};
        // Find user by email
        const users = await store.users.findOrCreate({ where: { email } });
        const user = users && users[0] || null;
        return { user: { ...user.dataValues } }
    },
    typeDefs,
    resolvers,
    dataSources: () => ({
        userAPI: new UserAPI({ store }),
        postAPI: new PostAPI({ store }),
        commentAPI: new CommentAPI({ store }),
    })
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })
    .then(() => {
        server.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    });