import React, { useState } from "react";
import SubscribeBilling from "./SubscribeBilling";
import icon from "../assets/icon_holder.png";
import "./billings.css";
import back from '../assets/back.png'

const Billings = ({ onClose }) => {
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
        <div className="flex items-center gap-2">
        <img src={back} alt="" onClick={onClose} width={25} className="md:hidden -ml-2 cursor-pointer" />
        <h1>Billings</h1>
      </div>
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
