const {gql} = require("apollo-server");


const typeDefs = gql`

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
    
    type Post {
        id: ID!
        author: User!
        title: String!
        content: String!
        createdAt: String!
    }
    
    type Comment {
        id: ID!
        author: User!
        post: Post!
        content: String!
        createdAt: String!
    }
    
    
    type Query {
        posts: [Post]!
        comments(postId: ID!): [Comment]!
        me: User
    }
`;

module.exports = typeDefs;