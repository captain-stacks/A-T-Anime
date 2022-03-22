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
    userId: String
    anime: Anime
  }

  type Anime {
    _id: ID
    title: String
    type: String
    format: String
    status: String
    description: String
    startDate: year: Int, month: Int, day: Int
    endDate: year: Int, month: Int, day: Int
    season: String
    episodes: Int
    duration: Int
    source: String
    coverImage: large: String, medium: String
    bannerImage: String
    genres: [String]
    studio: String
  }

  type Query {
    me: User
    users: [User]
    anime: [Anime]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    follow(followingId: ID!): User
    addAnime(animeId: ID!): MyAnime
    createAnime(name: String!, imageUrl: String!): Anime
  }
`;

// export the typeDefs
module.exports = typeDefs;