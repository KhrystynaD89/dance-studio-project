import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  //function that is removing and displaying a button according to a size of the screen:
  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    }else {
        setButton(true);
    }
  };

  //for the SignUp button not to show up on the mobile version when a page is refreshed
  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <div>
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            STUDIO&nbsp;
            <br /> <FontAwesomeIcon icon={faA} />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"} />
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {/* when you click it on the mobile version, the menu will disappear */}
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
