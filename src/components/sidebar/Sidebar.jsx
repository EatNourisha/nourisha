import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoMdTime } from "react-icons/io";
import { BiParty } from "react-icons/bi";
import { MdOutlineFoodBank } from "react-icons/md";
import { RiLogoutCircleLine, RiAccountCircleLine } from "react-icons/ri";
import "./sidebar.css";
import Logo1 from "../../assets/group16.png";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

 const { logout } = useAuth();


  return (
    <>
      <nav className="sidenav">
        <div className="sidebar-logo">
          <Link to="/" >
            <div className="logo">
              <div className="logo-text">
                <img src={Logo1} alt="Nourisha Logo" />
              </div>
              <div className="logo-text">
                <span>nourisha</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="sidenav-container">
          <ul className="list-item-dashboard">
            <li>
              <NavLink
                to="overview"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <div className="sidebar-link-content">
                  <RxDashboard className="sidebar-icon" />
                  <span>Dashboard</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="account"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <div className="sidebar-link-content">
                  <RiAccountCircleLine className="sidebar-icon" />
                  <span>Account</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="party"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <div className="sidebar-link-content">
                  <BiParty className="sidebar-icon" />
                  <span>Party plan</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="history"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <div className="sidebar-link-content">
                  <IoMdTime className="sidebar-icon" />
                  <span>History</span>
                </div>
              </NavLink>
            </li>
            <div
              onClick={handleModal}
              style={{ color: "#FF4159" }}
              className="logout-dashboard"
            >
              <RiLogoutCircleLine className="sidebar-icon" />
              <span>Log out</span>
            </div>
          </ul>
        </div>
      </nav>

      {openModal && (
        <div className="dc-popp-modal">
          <div className="dc-modal">
            <div className="close_modal" onClick={handleModal}>
              X
            </div>
            <div className="logout_modal">
              <h3>Are you sure you want to logout? </h3>
              <div className="logout-button-container">
                <button
                    onClick={()=> logout()}
                >
                  Yes
                </button>
                <button onClick={handleModal} >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

{/* <li>
<NavLink
  to="single-plan"
  className={({ isActive }) => (isActive ? "active-link" : "")}
>
  <div className="sidebar-link-content">
    <MdOutlineFoodBank className="sidebar-icon" />
    <span>Single orders</span>
  </div>
</NavLink>
</li> */}
