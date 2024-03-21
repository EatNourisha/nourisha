import React, { useRef, useEffect, useState } from "react";
import "./nav-bar.css";
import Logo from "../src/assets/group16.png";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  RiNotification2Line,
  RiAccountCircleLine,
  RiArrowDropDownLine,
} from "react-icons/ri";
import PartyLogo from "../src/assets/noto_party-popper.png";
import { BsCart2 } from "react-icons/bs";
import useAuth from "./hooks/useAuth";

const NavBar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const location = useLocation();
  const [navHeading, setNavHeading] = useState("");

  useEffect(() => {
    const determineHeading = () => {
      const path = location.pathname;
      if (path === "/dashboard/overview") {
        setNavHeading("Dashboard");
      } else if (path === "/dashboard/account") {
        setNavHeading("Account");
      } else if (path === "/dashboard/party") {
        setNavHeading("Party Plans");
      } else if (path === "/dashboard/single-plan") {
        setNavHeading("Order");
      } else if (path === "/dashboard/history") {
        setNavHeading("History");
      } else {
        setNavHeading("Navigation");
      }
    };

    // Call the function initially and whenever location changes
    determineHeading();

    // Clean up any effects when component unmounts
    return () => {
      // Optionally, you can clean up any subscriptions or timers here
    };
  }, [location.pathname]);

  const { isSignedIn, token } = useAuth();

  return (
    <header>
      {isSignedIn ? (
        <div className="dashboard-navbar-container">
          <div className="dashboard-navbar-heading">
            <h1>{navHeading}</h1>
          </div>
          <div className="dashboard-second-div">
            <div className="dashboard-second-inner">
              <div className="cont-nav-left">
                <RiNotification2Line />
              </div>
              <div className="cont-nav-left">
                <img src={PartyLogo} alt="party-logo" />
              </div>
              <div className="dashboard-cart-container">
                <span style={{color: "#fe7e00"}}>Cart</span>
                <BsCart2 style={{color: "#fe7e00"}}/>
                <div>0</div>
              </div>
            </div>
            <div className="dashboard-last-div">
              <RiAccountCircleLine style={{color: "#fe7e00"}}/>
              <span>Account</span>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
      ) : (
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
              {/* <NavLink to="/" onClick={showNavBar}>
                Home
              </NavLink> */}
              <NavLink to="why-nourisha" onClick={showNavBar}>
                Why Nourisha?
              </NavLink>
              <NavLink to="pricing" onClick={showNavBar}>
                Pricing
              </NavLink>
              <NavLink to="contact-us" onClick={showNavBar}>
                Contact Us
              </NavLink>
              <NavLink to="affiliate" onClick={showNavBar}>
                Affiliate
              </NavLink>
              <NavLink to="party-plan" onClick={showNavBar}>
                Party Plan
              </NavLink>
              <a href="https://blog.eatnourisha.com/" onClick={showNavBar}>
                Blog
              </a>
              {/* <p to="liwe-are-hiring">We Are Hiring</p> */}
              <button className="nav-close-btn" onClick={showNavBar}>
                <FaTimes />
              </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
              <FaBars />
            </button>
          </div>
          <div className="btn-container-navbar">
            <div className="btn">
              <a href="/register">
                <button>Get Started</button>
              </a>
            </div>
            <div className="btn">
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
// const stripe = require('stripe')('sk_test_yourSecretKey');

// async function createPercentOffCoupon() {
//   const coupon = await stripe.coupons.create({
//     percent_off: 10,
//     duration: 'repeating',
//     duration_in_months: 3,
//     max_redemptions: 10,
//   });

//   console.log(coupon);
// }

// createPercentOffCoupon();
