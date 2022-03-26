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
    type: String
    format: String
    status: String
    description: String
    startDate: String
    endDate: String
    season: String
    episodes: Int
    duration: Int
    source: String
    coverImageLarge: String
    coverImageMedium: String
    bannerImage: String
    genres: [String]
  }

  type Query {
    me: User
    user(userId: ID!): User
    userByUserName(userName: String!): User
    users: [User]
    animebyId(animeId: ID!): Anime
    allAnime(page: Int): [Anime]
    userSearchBar(userName: String!): [User]
    getAnimeBySearch(page: Int!, title: String!): [Anime]
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
      type: String,
      format: String,
      status: String,
      description: String,
      startDate: String,
      endDate: String,
      season: String,
      episodes: Int,
      duration: Int
      source: String
      coverImageLarge: String,
      coverImageMedium: String,
      bannerImage: String,
      genres: [String]
    ): Anime
  }
`;

// export the typeDefs
module.exports = typeDefs;