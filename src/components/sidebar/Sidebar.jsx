import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoMdTime } from "react-icons/io";
import { BiParty } from "react-icons/bi";
import { MdOutlineFoodBank } from "react-icons/md";
import { RiLogoutCircleLine, RiAccountCircleLine } from "react-icons/ri";
import "./sidebar.css";
import Logo1 from "../../assets/group16.png";
import hamburger from "../../assets/hamburger.png";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const { logout } = useAuth();

  return (
    <>
      <nav
        className={`fixed top-0 left-0  bg-white z-40 transform  lg:w-[15%] ${
          !sidebarOpen ? "-translate-x-5" : "translate-x-0 w-[45%] md:w-[25%]"
        } transition-transform duration-300 ease-in-out md:translate-x-0 lg:relative`}
      >
        <div className="sidebar-logo flex-col justify-between items-center px-2 mt-2">
          <Link to="/">
            <div className="logo hidden -mt-20 lg:flex ">
              <div className="logo-text">
                <img src={Logo1} alt="Nourisha Logo" />
              </div>
              <div className="logo-text">
                <span>nourisha</span>
              </div>
            </div>
          </Link>

          <div onClick={handleSidebarToggle} className="ml-5 lg:hidden">
            {!sidebarOpen ? (
              <img src={hamburger} alt="" className="" />
            ) : (
                <div className="flex justify-between items-center -ml-2 cursor-pointer">
                  <div className="logo-text flex items-center gap-2 -ml-4 ">
                    <img src={Logo1} alt="Nourisha Logo" width={30} /> <p className="font-bold text-[18px] -ml-2 ">Nourisha</p>  
                  </div>
                  
                <p className="text-[20px] font-bold mr-2 text-[#fe7e00]">x</p>
                </div>
            )}
          </div>
        </div>

        <div
          className={`sidenav-container ${
            !sidebarOpen && "hidden"
          } h-screen lg:flex `}
        >
          <ul className="list-item-dashboard">
            <li>
              <NavLink
                to="overview"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={closeSidebar}
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
                onClick={closeSidebar}
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
                onClick={closeSidebar}
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
                onClick={closeSidebar}
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
                <button onClick={() => logout()}>Yes</button>
                <button onClick={handleModal}>No</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

{
  /* <li>
<NavLink
  to="single-plan"
  className={({ isActive }) => (isActive ? "active-link" : "")}
>
  <div className="sidebar-link-content">
    <MdOutlineFoodBank className="sidebar-icon" />
    <span>Single orders</span>
  </div>
</NavLink>
</li> */
}
