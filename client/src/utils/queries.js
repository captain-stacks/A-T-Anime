import { gql } from '@apollo/client';

export const ALL_ANIME = gql`
  query allAnime($page: Int) {
    allAnime(page: $page) {
      _id
      englishTitle
      romajiTitle
      nativeTitle
      type
      format
      status
      description
      startDate
      endDate
      season
      episodes
      duration
      source
      coverImageLarge
      coverImageMedium
      bannerImage
      genres
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query Users {
  users {
    _id
    username
    email
    followerCount
    followingCount
    myAnime {
      userId
      score
      anime {
        _id
        englishTitle
        romajiTitle
        nativeTitle
        type
        format
        status
        description
        startDate
        endDate
        season
        episodes
        duration
        source
        coverImageLarge
        coverImageMedium
        bannerImage
        genres
      }
    }
  }
}
`;

export const QUERY_USER_BY_ID = gql`
  query Query($userId: ID!) {
  user(userId: $userId) {
    myAnime {
      userId
      score
      anime {
        _id
        englishTitle
        romajiTitle
        nativeTitle
        type
        format
        status
        description
        startDate
        endDate
        season
        episodes
        duration
        source
        coverImageLarge
        coverImageMedium
        bannerImage
        genres
      }
    }
    _id
    username
  }
}
`;


/* export const QUERY_THOUGHTS = gql`
  query thoughts($username: String) {
    thoughts(username: $username) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_THOUGHT = gql`
  query thought($id: ID!) {
    thought(_id: $id) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`; */

export const QUERY_USER = gql`
  query UserByUserName($userName: String!) {
    userByUserName(userName: $userName) {
      _id
      username
      email
      followerCount
      followingCount
      following {
        _id
        username
      }
      myAnime {
        _id
        userId
        score
        anime {
          _id
          englishTitle
          nativeTitle
          romajiTitle
          type
          format
          status
          description
          startDate
          endDate
          season
          episodes
          duration
          source
          coverImageLarge
          coverImageMedium
          bannerImage
          genres
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      followerCount
      followingCount
      following {
        _id
        username
      }
      myAnime {
        _id
        userId
        score
        anime {
          _id
          englishTitle
          nativeTitle
          romajiTitle
          type
          format
          status
          description
          startDate
          endDate
          season
          episodes
          duration
          source
          coverImageLarge
          coverImageMedium
          bannerImage
          genres
        }
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const Query_User_Search = gql `
query userSearchBar($page: Int!, $userName: String!) {
  userSearchBar(page: $page, userName: $userName) {
    _id
    username
    email
    followerCount
    followingCount
    following {
      username
    }
    myAnime {
      userId
      score
      anime {
        _id
        englishTitle
        nativeTitle
        romajiTitle
        type
        format
        status
        description
        startDate
        endDate
        season
        episodes
        duration
        source
        coverImageLarge
        coverImageMedium
        bannerImage
        genres
      }
    }
  }
}
`;

export const Query_Anime_By_Search = gql `
  query getAnimeBySearch($page: Int!, $title: String!) {
    getAnimeBySearch(page: $page, title: $title) {
      _id
      englishTitle
      romajiTitle
      nativeTitle
      type
      format
      status
      description
      startDate
      endDate
      season
      episodes
      duration
      source
      coverImageLarge
      coverImageMedium
      bannerImage
      genres
    }
  }
`
