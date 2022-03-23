import React from 'react';
import { Link } from 'react-router-dom';

const AnimeList = ({ animes, title }) => {
  if (!animes.length) {
    return <h3>No Anime Lists Yet</h3>;
  }

  return (
    <div id="root">
      <div>
        <h3>Anime Title</h3>
        <div className="row">
          <div className="col s12 m4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title col s6">My Karate List</span>
                <span className="dot">Number 1 List</span>
              </div>
            </div>

          </div>

          <div className="col s12 m4 offset-m4">
            <div className="card blue-grey darken-1">
              <h2 className="black white-text center-align">My Anime</h2>
              <div className="card-content white-text favAnime">
                <ul className="row">

                  <li className="btn-anime col s12 m12 l6">
                    <a href="https://anilist.co/anime/132405/Sono-Bisque-Doll-wa-Koi-wo-Suru/" className="favAnimeContainer">
                      <h3 className="h3FavAnimesTitle">
                        <span className="spanFavAnimesTitle">
                          Sono Bisque Doll wa Koi wo Suru
                        </span>
                      </h3>
                      <img classNameName="favAnimeImg" width="175" height="250" alt="Sono Bisque Doll wa Koi wo Suru" src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-Iy6Lze5SOme8.jpg"></img>
                    </a>
                  </li>

                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
