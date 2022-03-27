import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import AnimeCard from '../components/AnimeCard'


import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import { FOLLOW_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();


  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { userName: userParam },
  });

  const user = data?.me || data?.userByUserName || {};

  const [followUser] = useMutation(FOLLOW_USER, {
    refetchQueries: [
      QUERY_ME, // DocumentNode object parsed with gql
      'Me' // Query name
    ],
  });

  const meRes = useQuery(QUERY_ME);
  const meFollowing = meRes.data?.me?.following || [];
  const meAnime = meRes.data?.me?.myAnime || [];

  

  // Navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }



  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await followUser({
        variables: { followingId: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };
  
  const favoriteCheck = (animeList) => {
    meAnime.map(meanime => {
      if (meanime.anime._id == animeList.anime._id) {
        favorite = true;
      }
    });
}

  let favorite = false;
  let isfollow = false;

  return (
    <div className="px-5">
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
        { meFollowing.map(follow => {
            if (follow._id == user._id || !userParam) {
              isfollow = true;
            }
        })}
        {(!Auth.loggedIn()) ? (isfollow = true) : ('')}
        {(!isfollow) ? (<button onClick={handleClick}>Follow</button>) : ('')}
        {isfollow = false}
      </div>

      <div className="justify-space-between mb-3">
        <div className="row">
          <ul className='col s9'>
            {
              user.myAnime.map(animeList => (
                <div key={animeList.anime._id}>

                  {favoriteCheck(animeList)}
                  {(!Auth.loggedIn()) ? (favorite = true) : ('')}
                  <AnimeCard
                    title={animeList.anime.romajiTitle}
                    description={animeList.anime.description}
                    image={animeList.anime.coverImageLarge}
                    animeId={animeList.anime._id}
                    favorite={favorite}
                    userParam={userParam}
                  />
                  {favorite = false}
                </div>
              ))
            }
          </ul>
          <div className='col s3'>
            <div className="row">
              <div className="">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title"> {userParam ? `${user.username} is` : 'Your'} following</span>
                    {!user.following[0] ? "[nobody]" : ""}
                    {
                      user.following.map(list => (
                        <div key={list._id}>
                          <Link
                            to={`/profile/${list.username}`}
                            style={{ fontWeight: 700, display: 'block' }}
                            className="text-dark"
                          >
                              <div  className='col'>
                                {list.username}
                              </div>
                          </Link>
                          <br />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
