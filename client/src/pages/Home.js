import React, { useState } from 'react';
import AllUsersList from '../components/AllUsersList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { Query_User_Search, QUERY_ME } from '../utils/queries';

const Home = () => {
  const [page, setPage] = useState(1);

  const [searchedUser, setSearchedUser] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const userRes = useQuery(Query_User_Search, { variables: { page: page, userName: searchedUser } });
  const users = userRes.data?.userSearchBar || [];

  const loggedIn = Auth.loggedIn();

  


  const next = () => {
    setPage(page + 1);
  }

  const prev = () => {
    setPage(page - 1);
  }
  const handleSearch = async query => {
    setSearchedUser(query);
  }


  const handleFormSubmit = event => {
    event.preventDefault();

    setPage(1);

/*     if (!searchInput) {
      return false;
    } */

    handleSearch(searchInput);
  };

  return (
    <main>
      <div className="">
        <form className="col s12" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="search-wrapper focused container px-5">
              <input autoComplete="off" id="search" placeholder="Type Find a User..." value={searchInput} onChange={e => setSearchInput(e.target.value)}></input>
              <label htmlFor="search">Find a User: </label>
            </div>
          </div>
        </form>
        <div className="container">
          <div className={`col-12 mb-3 ${loggedIn}`}>
            {userRes.loading ? (
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
        <div className="center-align pb-4">
                <h4>
                    <button className="waves-effect waves-orange btn-large btn-orange" onClick={prev} disabled={page === 1}>
                        Previous page
                    </button>
                    <span className="pr-3">
                        {page}
                    </span>
                    <button className="waves-effect waves-orange btn-large btn-orange" onClick={next} disabled={users.length < 53}>
                        Next page
                    </button>
                </h4>
            </div>
      </div>
    </main>
  );
};

export default Home;
