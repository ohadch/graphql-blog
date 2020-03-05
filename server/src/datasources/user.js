const { RESTDataSource } = require('apollo-datasource-rest');
const isEmail = require("isemail");

class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }

    async getUserByEmail(email) {
        const {results} = this.get(`users`);
        return results.find(user => user.email === email);
    }

}

module.exports = UserAPI;