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
                    <div className="col s12 m3" key={user._id}>
                        <div className="card">
                            <div className="card-image favAnimeImg">
                                <Link
                                    to={`/profile/${user.username}`}
                                    style={{ fontWeight: 700 }}
                                    className="text-dark"
                                >
                                    <img className="setVH"src={user.myAnime[0].anime.coverImageLarge} alt={user.myAnime[0].anime.romajiTitle} >
                                        
                                    </img>

                                </Link>
                            </div>
                            <div className="card-content">
                                <h3>
                                    {user.username}
                                </h3>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};

export default AllUsersList;
