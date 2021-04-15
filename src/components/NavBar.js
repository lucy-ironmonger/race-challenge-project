import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavBar] = useState(false);
  const [navbarLink, setNavBarlink] = useState(false);

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

  const changeLink = () => {
    if (window.scrollY >= 80) {
      setNavBarlink(true);
    } else {
      setNavBarlink(false);
    }
  };

  window.addEventListener("scroll", changeLink);

  const hambClass = () => {
    if (click && navbarLink) {
      return "fas fa-times hamburger-white";
    } else if (click && !navbarLink) {
      return "fas fa-times hamburger-orange";
    } else if (!click && navbarLink) {
      return "fas fa-bars hamburger-white";
    } else {
      return "fas fa-bars hamburger-orange";
    }
  };

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar_container">
          <Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
            <i
              className={`fas fa-running ${navbarLink ? "running-icon" : " "}`}
            ></i>
          </Link>

          <div className="navbar_menu-icon" onClick={handleClick}>
            <i className={hambClass()} />
          </div>
          <ul className={click ? "navbar_menu active" : "navbar_menu"}>
            <li className="navbar_item">
              <Link
                to="/"
                className={navbarLink ? "navbarLink active" : "navbarLink"}
                onClick={closeMobileMenu}
              >
                Race Challenge
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                to="/activities"
                className={navbarLink ? "navbarLink active" : "navbarLink"}
                onClick={closeMobileMenu}
              >
                Activities
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                to="/challenges"
                className={navbarLink ? "navbarLink active" : "navbarLink"}
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
};

export default Navbar;
