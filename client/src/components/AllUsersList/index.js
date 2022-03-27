import React from 'react';
import { Link } from 'react-router-dom';

const AllUsersList = ({ users, title }) => {
    if (!users.length) {
        return <h3>No users Yet</h3>;
    }

    return (
        <div className="row">
            {users &&
                users.map(user => (
                    <div className="col s12 m6 l3" key={user._id}>
                        <div className="card small">
                            <div className="card-image favAnimeImg responsive-img">
                                <Link
                                    to={`/profile/${user.username}`}
                                    style={{ fontWeight: 700 }}
                                    className="text-dark"
                                >
                                    <img className="card small" src={user.myAnime[0].anime.coverImageLarge} alt={user.myAnime[0].anime.romajiTitle} >
                                    </img>

                                </Link>
                            </div>
                            <div className="card-content">
                                <h3 className="center-align">
                                    {user.username}
                                </h3>
                            </div>
                            {/* <div className="card-action center-align">
                                <a href="#">Follow</a>
                            </div> */}
                        </div>
                    </div>
                ))
            }
        </div >
    );
};

export default AllUsersList;
