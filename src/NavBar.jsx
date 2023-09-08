import React, { useRef } from "react";
import "./nav-bar.css";
import Logo from "../src/assets/group16.png";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="container container-header">
        <div className="left">
          <Link to="/">
            <img src={Logo} alt="Nourisha Logo" />
          </Link>
          <Link to="/">
            <h2>nourisha</h2>
          </Link>
        </div>

        <div className="mobile-menus">
          <nav ref={navRef}>
            <NavLink to="/" onClick={showNavBar}>
              Home
            </NavLink>
            <NavLink to="why-nourisha" onClick={showNavBar}>
              Why Nourisha?
            </NavLink>
            <NavLink to="pricing" onClick={showNavBar}>
              Pricing
            </NavLink>
            <NavLink to="contact-us" onClick={showNavBar}>
              Contact Us
            </NavLink>
            <p to="we-are-hiring">We Are Hiring</p>
            <button className="nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </div>

        <div className="btn">
          <a href="#container-downloading">
            <button>Get Started</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
