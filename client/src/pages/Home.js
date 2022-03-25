import React, { useState } from 'react';
import AllUsersList from '../components/AllUsersList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import {  QUERY_ALL_USERS, Query_User_Search } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_ALL_USERS);
  // let users = data?.users || [];
  
  const [searchedUser, setSearchedUser] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const {loading, singleData} = useQuery(Query_User_Search, { variables: { userName: searchedUser} });
  const users = singleData?.users || [];
  
  const loggedIn = Auth.loggedIn();
  

  const handleSearch = async query => {
    setSearchedUser(query);
  }


  const handleFormSubmit = event => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    handleSearch(searchInput);
  };

  return (
    <main>
      <div className="flex-row justify-space-between">
      <form class="col s12" onSubmit={handleFormSubmit}>
            <div class="row">
                <div className="search-wrapper focused">
                    <input id="search" placeholder="Type to search user..." value={searchInput} onSubmit={e => setSearchInput(e.target.value)}><i className="material-icons">search</i></input>
                    <label for="search">Find a User: </label>
                </div>
                <button type="submit"></button>
            </div>
        </form>
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
