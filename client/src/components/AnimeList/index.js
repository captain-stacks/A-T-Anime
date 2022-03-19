import React from 'react';
import { Link } from 'react-router-dom';

const AnimeList = ({ animes, title }) => {
  if (!animes.length) {
    return <h3>No Anime Lists Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {animes &&
        animes.map(anime => (
          <div key={anime._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${anime.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {anime.username}
              </Link>{' '}
              anime on {anime.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/anime/${anime._id}`}>
                <p>{anime.animeText}</p>
                <p className="mb-0">
                  Reactions: {anime.reactionCount} || Click to{' '}
                  {anime.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnimeList;
