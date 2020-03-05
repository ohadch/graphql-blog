const { RESTDataSource } = require('apollo-datasource-rest');

class PostAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }

    async getAllPosts(id) {
        const {results} = this.get(`posts`);
        return results;
    }

    async getPost(id) {
        const {result} = this.get(`posts/${id}`);
        return result;
    }

    async getPostComments(id) {
        const {results} = await this.get(`posts/${id}`);
        return results;
    }
}

module.exports = PostAPI;