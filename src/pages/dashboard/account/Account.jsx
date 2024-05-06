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
  const [activeTab, setActiveTab] = useState("Profile");

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <UpAccount />;
      case "MyOrders":
        return <MyOrders />;
      case "Billings":
        return <Billings />;
      case "FoodService":
        return <FoodService />;
      case "FoodPreference":
        return <FoodPreference />;
      case "ReferFriend":
        return <ReferFriend />;
      case "ChangePassword":
        return <ChangePassword />;
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
    <div className="account-container">
      <div className="account-first-container">
        <h1>GENERAL</h1>
        <div className="account-inner-div">
          <div
            className={`account-section-tab cursor-pointer ${
              activeTab === "Profile" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Profile")}
          >
            <CgProfile style={{ width: "24px", height: "24px" }} />
            <p>Profile</p>
          </div>
          <div
            className={`account-section-tab cursor-pointer ${
              activeTab === "MyOrders" ? "active" : ""
            }`}
            onClick={() => setActiveTab("MyOrders")}
          >
            <IoBagHandleOutline style={{ width: "24px", height: "24px" }} />
            <p>My orders</p>
          </div>
          <div
            className={`account-section-tab cursor-pointer ${
              activeTab === "Billings" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Billings")}
          >
            <GoCreditCard style={{ width: "24px", height: "24px" }} />
            <p>Billings</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "FoodService" ? "active" : ""
            }`}
            onClick={() => setActiveTab("FoodService")}
          >
            <FaRegEdit style={{ width: "24px", height: "24px" }} />
            <p>Edit Food Service</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "FoodPreference" ? "active" : ""
            }`}
            onClick={() => setActiveTab("FoodPreference")}
          >
            <FaRegEdit style={{ width: "24px", height: "24px" }} />
            <p>Edit Food Preferences</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "ReferFriend" ? "active" : ""
            }`}
            onClick={() => setActiveTab("ReferFriend")}  
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
            onClick={() => setActiveTab("ChangePassword")}   >
            <RiLockPasswordLine style={{ width: "24px", height: "24px" }} />
            <p>Change password</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "TermsOfUse" ? "active" : ""
            }`}
            onClick={() => setActiveTab("TermsOfUse")} >
            <MdOutlineVerifiedUser style={{ width: "24px", height: "24px" }} />
            <p>Terms of use</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "PrivacyPolicy" ? "active" : ""
            }`}
            onClick={() => setActiveTab("PrivacyPolicy")}>
            <MdOutlinePrivacyTip style={{ width: "24px", height: "24px" }} />
            <p>Privacy Policy</p>
          </div>
          <div className={`account-section-tab cursor-pointer ${
              activeTab === "ContactUs" ? "active" : ""
            }`}
            onClick={() => setActiveTab("ContactUs")}>
            <FiPhoneCall style={{ width: "24px", height: "24px" }} />
            <p>Contact us</p>
          </div>
        </div>
      </div>
      <div className="account-second-container">
      {renderContent()}
      </div>
  
    </div>
  );
};

export default Account;
