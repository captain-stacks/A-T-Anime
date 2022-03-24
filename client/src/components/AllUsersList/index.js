import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER_BY_ID } from '../../utils/queries';

const AllUsersList = ({ users, title }) => {
    if (!users.length) {
        return <h3>No users Yet</h3>;
    }

    console.log(users[0].myAnime[0].anime.romajiTitle);
    

    return (
        <div>
            <h3>{title}</h3>
            {users &&
                users.map(user => (
                    <div key={user._id} className="card mb-3">
                        <p className="card-header">
                            <Link
                                to={`/profile/${user.username}`}
                                style={{ fontWeight: 700 }}
                                className="text-light"
                            >
                                {user.username}
                            </Link>
                        </p>
                        <div className="card-body">
                            <Link to={`/user/${user._id}`}>
                                <p>{user.followerCount}</p>
                                <p className="mb-0">
                                    Following Count: {user.followingCount} || Click to{' '}
                                    {user.reactionCount ? 'see' : 'start'} the discussion!
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default AllUsersList;
