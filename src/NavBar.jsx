import React, { useRef, useEffect, useState } from "react";
import "./nav-bar.css";
import Logo from "../src/assets/group16.png";
import { NavLink, Link, useLocation, useNavigate  } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  RiNotification2Line,
  RiAccountCircleLine,
  RiArrowDropDownLine,
} from "react-icons/ri";
import PartyLogo from "../src/assets/noto_party-popper.png";
import { BsCart2 } from "react-icons/bs";
import Cart from "./modals/Cart";
import CheckOut from "./modals/CheckOut";
import useCart from "./hooks/useCart";
import useAuthStore from "./stores/auth";
import cartStore from "./stores/cartStore";


const NavBar = () => {
  const token = localStorage.getItem('authToken')
  const navRef = useRef();
  const { data } = useCart();
  const { itemCount, setTotalItemCount } = cartStore()
  

  useEffect(() => {
    if(!data) return
    if (data?.items) {
      const { items } = data;
      setTotalItemCount(items?.totalCount)
    }
  }, [data])


  const location = useLocation();
  const navigate = useNavigate();
  const [navHeading, setNavHeading] = useState("");
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const handleProceedToCheckout = () => {
    setIsCartModalOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handlePartyPlan = () => {
    navigate("/dashboard/party")
  }
  
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
        setNavHeading("");
      }
    };
    determineHeading();
    return () => {
      // Optionally, you can clean up any subscriptions or timers here
    };
  }, [location.pathname]);


  const pathname = location.pathname.startsWith("/dashboard")

  useEffect(() => {
    if ( location.pathname === "/dashboard") {
      navigate("/dashboard/overview");
    }
  }, [pathname, location.pathname, navigate]);

  return (
    <header>
      { token && pathname ? (
        <div className="dashboard-navbar-container">
          <div className="dashboard-navbar-heading">
            <h1>{navHeading}</h1>
          </div>
          <div className="dashboard-second-div">
            <div className="dashboard-second-inner">
              <div className="cont-nav-left cursor-pointer select-none">
                <RiNotification2Line />
              </div>
              <div className="cont-nav-left cursor-pointer select-none" onClick={handlePartyPlan}>
                <img src={PartyLogo} alt="party-logo" />
              </div>
              <div
                className="dashboard-cart-container cursor-pointer select-none"
                onClick={toggleCartModal}
              >
                <span style={{ color: "#fe7e00" }}>Cart</span>
                <BsCart2 style={{ color: "#fe7e00" }} />
                <div>{itemCount}</div>
              </div>
            </div>
            <div className="dashboard-last-div cursor-pointer select-none">
              <RiAccountCircleLine style={{ color: "#fe7e00" }} />
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
              <a href="/register">Get Started</a>
              <a href="/login">Login</a>

              {/* <p to="liwe-are-hiring">We Are Hiring</p> */}
              <button className="nav-close-btn" onClick={showNavBar}>
                <FaTimes />
              </button>
            </nav>

            <button className="nav-btn" onClick={showNavBar}>
              <FaBars />
            </button>
          </div>
        </div>
      )}

      {isCartModalOpen && (
        <Cart
          onClose={() => setIsCartModalOpen(false)}
          onProceedToCheckout={handleProceedToCheckout}
        />
      )}
      {isCheckoutModalOpen && (
        <CheckOut onClose={() => setIsCheckoutModalOpen(false)} />
      )}
    </header>
  );
};

export default NavBar;
