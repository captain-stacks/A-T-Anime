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
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1><Link onClick={() => setSelectedSection("Home")} className="fontWebsite" to="/">AtAnime</Link></h1>
        <Link onClick={() => setSelectedSection("Home")} className={(seletedSection === "Home") ? ("headerSelected") : ('')} id="fontWebsiteNav"  to="/">Home</Link>
        <Link onClick={() => setSelectedSection("Anime")} className={(seletedSection === "Anime") ? ("headerSelected") : ('')} id="fontWebsiteNav" to="/anime">Anime</Link>

        <nav className="text-center roundedButton">
          {Auth.loggedIn() ? (
            <>
              <Link onClick={() => setSelectedSection("animeList")} className={(seletedSection === "animeList") ? ("personalSelected") : ('')} id="fontWebsiteNav" to="/profile">My Anime List</Link>
              <a href="/" id="fontWebsiteNav" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link onClick={() => setSelectedSection("Login")} className={(seletedSection === "Login") ? ("personalSelected") : ('')} to="/login" id="fontWebsiteNav" >Login</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
