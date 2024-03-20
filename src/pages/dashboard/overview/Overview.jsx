import React, { useState, useEffect } from "react";
import "./overview.css";
import man from "../../../assets/annouce.png";
import useMeal from "../../../hooks/useMeal";

const Overview = () => {
  const { data, loading, error } = useMeal();
 
  console.log("----", data);
  return (
    <div className="overview-container">
      <div className="overview-container-first">
        <div className="overview-container-first-section">
          <img src={man} alt="annouce" />
          <div className="overview-top-content">
            <h2>Get £10 for Every Referral!</h2>
            <p>
              Earn £10 for every friend, or anyone, who subscribes with your
              referral code! No limits on referrals. Let's gooooo!
            </p>

            <button>Refer a friend</button>
          </div>
        </div>
        <div className="overview-container-search">
          <input type="text" placeholder="Which Country do u perfer" />
        </div>
        <div className="overview-meal-heading">
          <h3>Order a single meal</h3>{" "}
          <p >View more</p>
        </div>
        <div className="overview-meal-container">
          {loading ? (
            <p>loading.....</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            data?.data?.map((meal) => (
              <div key={meal._id} className="meal-container">
                <img
                  src={meal.image_url}
                  alt={meal.name}
                  style={{ width: "138px", height: "142px" }}
                />
                <h3>{meal.name}</h3>
                
                <p>Price: £{meal.price.amount}</p>
                <div className="cart-container">
                <div className="add-to-cart">+</div>
                </div>
                  
              </div>
            ))
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Overview;
