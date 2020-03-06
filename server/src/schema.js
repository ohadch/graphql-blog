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
        users: [User]!
        me: User
    }
    
    type Mutation {
        register(firstName: String!, lastName: String!, email: String!): User!
    }
`;

module.exports = typeDefs;