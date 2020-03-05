const { DataSource } = require('apollo-datasource');

class CommentAPI extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    async getCommentsByPostId({ postId }) {
        return this.store.comments.findAll({ where: { postId } });
    }

}

module.exports = CommentAPI;
