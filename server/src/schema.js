const {gql} = require("apollo-server");


const typeDefs = gql`

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        token: String!
        createdAt: String
        updatedAt: String
    }
    
    type Post {
        id: ID!
        author: User!
        title: String!
        body: String!
        createdAt: String
        updatedAt: String
    }
    
    type Comment {
        id: ID!
        author: User!
        post: Post!
        body: String!
        createdAt: String
        updatedAt: String
    }
    
    
    type Query {
        posts: [Post]!
        comments(postId: ID!): [Comment]!
        me: User
    }
`;

module.exports = typeDefs;