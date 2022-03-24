import React from 'react';
import AllUsersList from '../components/AllUsersList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import {  QUERY_ALL_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ALL_USERS);
  const users = data?.users || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <AllUsersList
                title="Top Popular Anime Lists"
                users={users}
              />
            </div>
          )}
        </div>
        
      </div>
    </main>
  );
};

export default Home;
