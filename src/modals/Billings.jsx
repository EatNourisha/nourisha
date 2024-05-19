import React, { useState } from "react";
import SubscribeBilling from "./SubscribeBilling";
import icon from "../assets/icon_holder.png";
import "./billings.css";

const Billings = () => {
  const [subscribe, setSubscribe] = useState(false);

  const goToSubscribe = () => {
    setSubscribe(true)
  }

  const handleGoBack = () => {
    setSubscribe(false)
  }

  return (
    <div className="billings-modal-container">
      {!subscribe ? (<div>
        <h1>Billings</h1>
        <div className="billings-modal-center-container">
          <img src={icon} alt="icon" />
          <h3>No Active Subscription</h3>
          <p>Subscribe to one of our meal plans to enjoy</p>
          <button onClick={goToSubscribe}>Subscribe</button>
        </div>
      </div>) 
        : 
        <SubscribeBilling goBack={ handleGoBack} />
      }
      

      
    </div>
  );
};

export default Billings;
