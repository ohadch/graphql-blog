const resolvers = {
    Query: {
        posts: async (_, __, { dataSources }) => dataSources.postAPI.getAllPosts(),
        comments: async (_, { postId }, { dataSources }) => dataSources.commentAPI.getCommentsByPostId({ postId }),
        me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
};

module.exports = resolvers;