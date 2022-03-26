import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import AnimeCard from '../components/AnimeCard'


import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { userName: userParam },
  });

  const user = data?.me || data?.userByUserName || {};

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



  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
        {userParam ? `` : <button>test</button>}
      </div>

      <div className="justify-space-between mb-3">
        <div className="row">
          <ul className='col s9'>
            {
              user.myAnime.map(animeList => (
                <AnimeCard
                  key={animeList.anime._id}
                  title={animeList.anime.romajiTitle}
                  description={animeList.anime.description}
                  image={animeList.anime.coverImageLarge}
                />
              ))
            }
          </ul>
          {
            user.following.map(list => (
              <Link
                key={list._id}
                to={`/profile/${list.username}`}
                style={{ fontWeight: 700 }}
                className="text-dark"
              >

                {list.username}
              </Link>
            ))
          }
          <div className='col s3'>
            <div className="row">
              <div className="">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
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
