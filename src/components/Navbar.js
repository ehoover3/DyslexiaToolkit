import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const history = useHistory();

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

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const targetElement = document.querySelector(hash);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [history.location.hash]);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Dyslexia Toolkit
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/#tools' className='nav-links' onClick={closeMobileMenu}>
                Tools
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/books' className='nav-links' onClick={closeMobileMenu}>
                Books
              </Link>
            </li>
            <li>
              <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
