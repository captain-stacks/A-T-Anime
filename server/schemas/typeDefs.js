const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    FollowerCount: Int
    Followers: [User]
    FollowingCount: Int
    Following: [User]
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;