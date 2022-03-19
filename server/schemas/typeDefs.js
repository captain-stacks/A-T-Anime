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
    myAnime: [MyAnime]
  }

  type Auth {
    token: ID!
    user: User
  }

  type MyAnime {
    anime: Anime
  }

  type Anime {
    _id: ID
    name: String
    imageUrl: String
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    follow(followingId: ID!): User
    addAnime(animeId: ID!, name: String!, imageUrl: String!): MyAnime
    createAnime(name: String!, imageUrl: String!): Anime
  }
`;

// export the typeDefs
module.exports = typeDefs;