const { DataSource } = require('apollo-datasource');

class PostAPI extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    async getAllPosts() {
        return this.store.posts.findAll();
    }

}

module.exports = PostAPI;
