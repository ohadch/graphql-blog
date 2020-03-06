const { DataSource } = require('apollo-datasource');

class CommentAPI extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    initialize(config) {
        this.context = config.context;
    }

    async getCommentsByPostId({ postId }) {
        return this.store.comments.findAll({ where: { postId } });
    }

    async createComment({ body, postId }) {
        const comment = this.store.comments.build({
            body,
            postId,
            userId: this.context.user.id
        });
        await comment.save();
        return comment;
    }

}

module.exports = CommentAPI;
