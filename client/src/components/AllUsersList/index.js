import React from 'react';
import { Link } from 'react-router-dom';

const AllUsersList = ({ users, title }) => {
    if (!users.length) {
        return <h3>No users</h3>;
    }


    let i = 0;

    const addToI = () => {
        i = i + 1
    }

    return (
        <div className="row">
            {users &&
                users.map(user => (
                    <div key={user._id}>
                        {(i >= 52) ? ('') : (
                            <div className="col s12 m6 l3" key={user._id}>
                                {addToI()}
                                <Link
                                    to={`/profile/${user.username}`}
                                    style={{ fontWeight: 700 }}
                                    className="text-dark"
                                >
                                <div className="card small">
                                    <div className="card-image favAnimeImg responsive-img">
                                            {(user.myAnime[0]) ? 
                                            (<img className="card small" src={user.myAnime[0].anime.coverImageLarge} alt={user.myAnime[0].anime.romajiTitle} ></img>) : 
                                            (<img className="card small"></img>)}
                                            {/* <img className="card small" src={user.myAnime[0].anime.coverImageLarge} alt={user.myAnime[0].anime.romajiTitle} >
                                            </img> */}

                                        
                                    </div>
                                    <div className="username-text card-content">
                                        <h3 className="center-align">
                                            {user.username}
                                        </h3>
                                    </div>
                                    {/* <div className="card-action center-align">
                                        <a href="#">Follow</a>
                                    </div> */}
                                </div>
                                </Link>
                            </div>
                        )}
                    </div>
                ))
            }
        </div >
    );
};

export default AllUsersList;
