const isEmail = require("isemail");

const resolvers = {
    Query: {
        posts: async (_, __, { dataSources }) => dataSources.postAPI.getAllPosts(),
        comments: async (_, { postId }, { dataSources }) => dataSources.commentAPI.getCommentsByPostId({ postId }),
        users: async (_, __, { dataSources }) => dataSources.userAPI.getAllUsers(),
        authenticate: (_, { email }, { dataSources }) => dataSources.userAPI.authenticate({ email }),
        me: (_, __, { dataSources }) => dataSources.userAPI.getUser()
    },
    Mutation: {
        register: (_, { email, firstName, lastName }, { dataSources }) => {
            if (!isEmail.validate(email)) throw new Error("Email is invalid");
            return dataSources.userAPI.register({ email, firstName, lastName })
        }
    }
};

module.exports = resolvers;