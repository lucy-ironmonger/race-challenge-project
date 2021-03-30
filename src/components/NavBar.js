import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavBar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}></Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Race Challenge
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/activities"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/challenges"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Challenges
              </Link>
            </li>

            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
