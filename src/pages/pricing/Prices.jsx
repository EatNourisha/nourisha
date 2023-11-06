import React from "react";
import "./prices.css";

const Prices = () => {
  return (
    <div className="prices-head">
      <h1>Great food, delivered to you on a budget.</h1>
      <h2>
        Whatever plan you choose, stay home, we will bring your food to you.
      </h2>

      <div className="cards-box">
        <div className="card-box">
          <h3>Individual (Weekly Plan)</h3>
          <h4>&#163; 120.00</h4>
          <h5>(Plan for just 1 person)</h5>
          <nav>
            <ul>
              <li>Dinner and Lunch daily for 1 week(7 days)</li>
              <li>Customise your meal plan from our wide range of menu</li>
              <li>Meal delivered once a week</li>
            </ul>
            <a href="#container-downloading">
              <button>Subscribe</button>
            </a>
          </nav>
        </div>
        <div className="card-box">
          <h3>Individual (Monthly Plan)</h3>
          <h4>&#163; 400.00</h4>
          <h5>(Plan for just 1 person)</h5>
          <nav>
            <ul>
              <li>Dinner and Lunch daily for 1 month(28 days)</li>
              <li>Customise your meal plan from our wide range of menu</li>
              <li>Meal delivered once a week</li>
            </ul>
            <a href="#container-downloading">
              <button>Subscribe</button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Prices;
