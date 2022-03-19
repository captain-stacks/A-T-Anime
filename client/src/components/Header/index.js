import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1><Link to="/">ATAnime</Link></h1>
        <Link to="/">Home</Link>
        <Link to="/anime">Anime</Link>
        <Link to="/your-list">Your List</Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
