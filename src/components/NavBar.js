import React from "react";
import "../styles/NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <div className="navbar_imageContainer">
          <div id="heroimg">
            <img
              src="https://www.logolynx.com/images/logolynx/e3/e3984faa44107f504f6d8dc6a3d5777e.png"
              alt="race-challenge-logo"
              to="/"
            />
          </div>
        </div>
        <ul className="navbar_links">
          <li className="navbar_links-item">
            <Link className="item" to="/challenges">
              Challenges
            </Link>
            <li className="navbar_links-item">
              <Link className="item" to="/">
                Race Challenge
              </Link>
            </li>
          </li>
          <li className="navbar_links-item">
            <Link className="item" to="/activities">
              Activities
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
