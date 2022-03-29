import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  const[seletedSection, setSelectedSection] = useState("Home");

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row flex justify-space-between-lg justify-center align-center">
        <h1><Link onClick={() => setSelectedSection("Home")} to="/">ATAnime</Link></h1>
        <Link onClick={() => setSelectedSection("Home")} className={(seletedSection === "Home") ? ("headerSelected") : ('')} to="/">Home</Link>
        <Link onClick={() => setSelectedSection("Anime")} className={(seletedSection === "Anime") ? ("headerSelected") : ('')} to="/anime">Anime</Link>

        <nav className="text-center roundedButton">
          {Auth.loggedIn() ? (
            <>
              <Link onClick={() => setSelectedSection("animeList")} className={(seletedSection === "animeList") ? ("personalSelected") : ('')} to="/profile">My Anime List</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link onClick={() => setSelectedSection("Login")} className={(seletedSection === "Login") ? ("personalSelected") : ('')} to="/login" >Login</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
