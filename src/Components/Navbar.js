import React, { useState } from 'react';
import './Navbar.css';
import Link from 'react-scroll';
const NavBar = (hh) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src="firstconnect.png" alt="Logo" />
      </div>
      {/* {hh['hh'] ? (
  <div>
    <li >
      <Link activeClass="active" smooth spy to="about">
        ABOUT
      </Link>
    </li>
    <li >
      <Link activeClass="active" smooth spy to="SandI">
        Services and Industries
      </Link>
    </li>
    <li >
      <Link activeClass="active" smooth spy to="testimonials">
        Testimonials
      </Link>
    </li>
    <li >
      <Link activeClass="active" smooth spy to="contact">
        CONTACT ME
      </Link>
    </li>
  </div>
) : null} */}
      <div className="navbar-links">
        <a href="/">Shippers</a>
        <a href="/">Carriers</a>
        <a href="/services">Services</a>
        <a href="/industries">Industries</a>
        <a href="/">Company</a>
        {/* <div className="dropdown"> */}
          {/* <div className="dropdown-toggle" onClick={toggleMenu}>
            Dashboard
          </div> */}
          <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="/">Contact us</a>
            <a href="/">About us</a>
            <a href="/">Career</a>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
