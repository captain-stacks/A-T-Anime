const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    followerCount: Int
    followers: [User]
    followingCount: Int
    following: [User]
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    follow(followingId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;