import React from "react";
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

const Account = () => {
  return (
    <div className="account-container">
      <div className="account-first-container">
        <h1>GENERAL</h1>
        <div className="account-inner-div">
          <div className="account-section-tab">
            <CgProfile style={{ width: "24px", height: "24px" }} />
            <p>Profile</p>
          </div>
          <div className="account-section-tab">
            <IoBagHandleOutline style={{ width: "24px", height: "24px" }} />
            <p>My orders</p>
          </div>
          <div className="account-section-tab">
            <GoCreditCard style={{ width: "24px", height: "24px" }} />
            <p>Billings</p>
          </div>
          <div className="account-section-tab">
            <FaRegEdit style={{ width: "24px", height: "24px" }} />
            <p>Edit Food Service</p>
          </div>
          <div className="account-section-tab">
            <FaRegEdit style={{ width: "24px", height: "24px" }} />
            <p>Edit Food Preferences</p>
          </div>
          <div className="account-section-tab">
            <BsGift style={{ width: "24px", height: "24px" }} />
            <p>Refer a Friend</p>
          </div>
        </div>
        <div className="account-center-h3">
          {" "}
          <h1>SETTINGS</h1>
        </div>

        <div className="account-inner-div">
          <div className="account-section-tab">
            <RiLockPasswordLine style={{ width: "24px", height: "24px" }} />
            <p>Change password</p>
          </div>
          <div className="account-section-tab">
            <MdOutlineVerifiedUser style={{ width: "24px", height: "24px" }} />
            <p>Terms of use</p>
          </div>
          <div className="account-section-tab">
            <MdOutlinePrivacyTip style={{ width: "24px", height: "24px" }} />
            <p>Privacy Policy</p>
          </div>
          <div className="account-section-tab">
            <FiPhoneCall style={{ width: "24px", height: "24px" }} />
            <p>Contact us</p>
          </div>
        </div>
      </div>
      <div className="account-second-container">
        <UpAccount />
      </div>
    </div>
  );
};

export default Account;
