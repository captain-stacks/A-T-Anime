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
    score: Int
    anime: Anime
  }

  type Anime {
    _id: ID
    englishTitle: String
    romajiTitle: String
    nativeTitle: String
    status: String
    description: String
    startDate: String
    endDate: String
    season: String
    episodes: Int
    coverImageLarge: String
    coverImageMedium: String
    bannerImage: String
    popularity: Int
    studioName: String
    studioUrl: String
  }

  type Query {
    me: User
    user(userId: ID!): User
    users: [User]
    animebyId(animeId: ID!): Anime
    allAnime: [Anime]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    follow(followingId: ID!): User
    addAnime(animeId: ID!, score: Int): MyAnime
    createAnime(
      englishTitle: String,
      romajiTitle: String,
      nativeTitle: String,
      status: String,
      description: String,
      startDate: String,
      endDate: String,
      season: String,
      episodes: Int,
      coverImageLarge: String,
      coverImageMedium: String,
      bannerImage: String,
      popularity: Int,
      studioName: String,
      studioUrl: String
    ): Anime
  }
`;

// export the typeDefs
module.exports = typeDefs;