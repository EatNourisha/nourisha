import React from "react";
import icon from "../assets/icon_holder.png";
import "./billings.css";

const Billings = () => {
  return (
    <div className="billings-modal-container">
      <h1>Billings</h1>
      <div className="billings-modal-center-container">
        <img src={icon} alt="icon" />
        <h3>No Active Subscription</h3>
        <p>Subscribe to one of our meal plans to enjoy</p>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Billings;
