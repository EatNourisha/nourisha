import React from "react";
import Logo from "../../assets/dashboardLogo.png";
import { NavLink, Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { CiCreditCard2 } from "react-icons/ci";
import { MdEditNote, MdOutlineRateReview } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import "./sidebar.css";
import Logo1 from "../../assets/group16.png";

const Sidebar = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <nav className="sidenav">
        <div className="sidenav-container">
          <div>
            <Link to="/" className="link-log-side">
              <div className="logo">
                <div>
                  <img src={Logo1} alt="Nourisha Logo" />
                </div>
                <div className="logo-text">
                  <span>nourisha</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <NavLink
                  // className={({ isActive }) =>
                  //   isActive || window.location.pathname.includes('dashboard/')
                  //     ? 'sidenav-link active'
                  //     : 'sidenav-link'
                  // }
                  to="profile"
                >
                  <div className="sidebar-link-content">
                    <ImProfile className="sidebar-icon" />
                    <span>Profile</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  // className={({ isActive }) =>
                  //   isActive || window.location.pathname.includes('dashboard/')
                  //     ? 'sidenav-link active'
                  //     : 'sidenav-link'
                  // }
                  to="billings"
                >
                  <CiCreditCard2 className="sidebar-icon" />
                  <span>Billing</span>
                </NavLink>
              </li>
              <li>
                {/* <NavLink
                  className={({ isActive }) =>
                    isActive || window.location.pathname.includes('loans/')
                      ? 'sidenav-link active'
                      : 'sidenav-link'
                  }
                  to="loans"
                > */}
                <CiCreditCard2 className="sidebar-icon" />
                <span>Subscription AutoRenewal</span>
                {/* </NavLink> */}
              </li>

              <li>
                {/* <NavLink
                  className={({ isActive }) =>
                    isActive ||
                    window.location.pathname.includes('/investments')
                      ? 'sidenav-link active'
                      : 'sidenav-link'
                  }
                  to="investments"
                > */}
                <MdEditNote className="sidebar-icon" />
                <span>Edit Food Services</span>
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink
                  className={({ isActive }) =>
                    isActive || window.location.pathname.includes('guarantors/')
                      ? 'sidenav-link active'
                      : 'sidenav-link'
                  }
                  to="users"
                > */}
                <MdEditNote className="sidebar-icon" />
                <span>Edit Food Preferences</span>
                {/* </NavLink> */}
              </li>

              <li>
                {/* <NavLink
                  className={({ isActive }) =>
                    isActive || window.location.pathname.includes('wallet/')
                      ? 'sidenav-link active'
                      : 'sidenav-link'
                  }
                  to="admins"
                > */}
                <FaUserFriends className="sidebar-icon" />
                <span>Refer A friend</span>
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink
                  className={({ isActive }) =>
                    isActive || window.location.pathname.includes('limit/')
                      ? 'sidenav-link active'
                      : 'sidenav-link'
                  }
                  to="limit"
                > */}
                <MdOutlineRateReview className="sidebar-icon" />
                <span>Review</span>
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink
                  className={({ isActive }) =>
                    isActive || window.location.pathname.includes('wallet/')
                      ? 'sidenav-link active'
                      : 'sidenav-link'
                  }
                  to="wallets"
                > */}
                <IoSettingsOutline className="sidebar-icon" />
                <span>Settings</span>
                {/* </NavLink> */}
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              onClick={handleModal}
              style={{ color: "white" }}
            >
              <RiLogoutCircleLine />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </nav>

      {openModal && (
        <div className="dc-popp-modal">
          <div className="dc-modal">
            <div className="close_modal" onClick={handleModal}>
              X
            </div>
            <div className="imgg">
              <img
                // src={`${BaseDirectories.IMAGES_DIR}/cancel.png`}
                alt=""
              />
            </div>
            <div className="logout_modal justify-content-center py-3">
              <h3>Are you sure you want to logout? </h3>
              <div className="py-5 d-flex gap-3">
                <button
                  type="button"
                  className="secondary-btn px-4"
                  //   onClick={handleLogOut}
                >
                  Yes
                </button>
                <button onClick={handleModal} classes="primary-btn px-4">
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
