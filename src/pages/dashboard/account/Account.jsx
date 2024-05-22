import React, { useState } from "react";
import "./account.css";
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineVerifiedUser, MdOutlinePrivacyTip } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsGift } from "react-icons/bs";
import UpAccount from "../../../modals/UpAccount";
import Billings from "../../../modals/Billings";
import MyOrders from "../../../modals/MyOrders";
import FoodService from "../../../modals/FoodService";
import FoodPreference from "../../../modals/FoodPreference";
import ReferFriend from "../../../modals/ReferFriend";
import ChangePassword from "../../../modals/ChangePassword";
import TermsOfUse from "../../../modals/TermsOfUse";
import PrivacyPolicy from "../../../modals/PrivacyPolicy";
import ContactUs from "../../../modals/ContactUs";


const Account = () => {
  const [activeTab, setActiveTab] = useState(window.innerWidth >= 768 ? 'Profile' : '');
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Close the menu on mobile when a tab is clicked
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <UpAccount isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(true)} />;
      case "MyOrders":
        return <MyOrders onClose={() => setIsMenuOpen(true)} />;
      case "Billings":
        return <Billings onClose={() => setIsMenuOpen(true)} />;
      case "FoodService":
        return <FoodService onClose={() => setIsMenuOpen(true)} />;
      case "FoodPreference":
        return <FoodPreference onClose={() => setIsMenuOpen(true)} />;
      case "ReferFriend":
        return <ReferFriend onClose={() => setIsMenuOpen(true)} />;
      case "ChangePassword":
        return <ChangePassword onClose={() => setIsMenuOpen(true)} />;
      case "TermsOfUse":
        return <TermsOfUse />;
      case "PrivacyPolicy":
        return <PrivacyPolicy />;
      case "ContactUs":
        return <ContactUs />;
      default:
        return null;
    }
  };

  return (
    <div className="account-container mt-14 md:mt-0">
      <div className={`account-first-container w-full md:w-2/6 p-4 ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <h1>GENERAL</h1>
        <div className="account-inner-div">
          <div
            className={`account-section-tab cursor-pointer ${
              activeTab === "Profile" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Profile")}
          >
            <CgProfile style={{ width: "24px", height: "24px" }} />
            <p>Profile</p>
          </div>
          <div
            className={`account-section-tab cursor-pointer ${
              activeTab === "MyOrders" ? "active" : ""
            }`}
            onClick={() => handleTabClick("MyOrders")}
          >
            <IoBagHandleOutline style={{ width: "24px", height: "24px" }} />
            <p>My orders</p>
          </div>
          <div
            className={`account-section-tab cursor-pointer ${
              activeTab === "Billings" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Billings")}
          >
            <GoCreditCard style={{ width: "24px", height: "24px" }} />
            <p>Billings</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "FoodService" ? "active" : ""
            }`}
            onClick={() => handleTabClick("FoodService")}
          >
            <FaRegEdit style={{ width: "24px", height: "24px" }} />
            <p>Edit Food Service</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "FoodPreference" ? "active" : ""
            }`}
            onClick={() => handleTabClick("FoodPreference")}
          >
            <FaRegEdit style={{ width: "24px", height: "24px" }} />
            <p>Edit Food Preferences</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "ReferFriend" ? "active" : ""
            }`}
            onClick={() => handleTabClick("ReferFriend")}  
          >
            <BsGift style={{ width: "24px", height: "24px" }} />
            <p>Refer a Friend</p>
          </div>
        </div>
        <div className="account-center-h3">
          {" "}
          <h1>SETTINGS</h1>
        </div>

        <div className="account-inner-div">
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "ChangePassword" ? "active" : ""
            }`}
            onClick={() => handleTabClick("ChangePassword")}   >
            <RiLockPasswordLine style={{ width: "24px", height: "24px" }} />
            <p>Change password</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "TermsOfUse" ? "active" : ""
            }`}
            onClick={() => handleTabClick("TermsOfUse")} >
            <MdOutlineVerifiedUser style={{ width: "24px", height: "24px" }} />
            <p>Terms of use</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "PrivacyPolicy" ? "active" : ""
            }`}
            onClick={() => handleTabClick("PrivacyPolicy")}>
            <MdOutlinePrivacyTip style={{ width: "24px", height: "24px" }} />
            <p>Privacy Policy</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "ContactUs" ? "active" : ""
            }`}
            onClick={() => handleTabClick("ContactUs")}>
            <FiPhoneCall style={{ width: "24px", height: "24px" }} />
            <p>Contact us</p>
          </div>
        </div>
      </div>
      <div className="account-second-container">
      {activeTab && renderContent()}
      </div>
  
    </div>
  );
};

export default Account;
