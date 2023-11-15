import React from "react";
import Dishes from "../../assets/dishes.png";
import Google from "../../assets/Group2.png";
import App from "../../assets/Group1.png";
import Icon1 from "../../assets/Group4.png";
import Icon2 from "../../assets/Group5.png";
import Icon3 from "../../assets/Group3.png";
import Top from "../../assets/Vector1.png";
import Bot from "../../assets/Vector2.png";

const Delight = () => {
  return (
    <div className="container container-food">
      <div className="showcase-one">
        <div className="sides">
          <div className="left-side">
            <button>Request Your Ideal Party Menu Today.</button>
            <h1>
              Delight Your Guests with <span>Perfect Party</span> Meals{" "}
            </h1>
            <p>
              Are you planning a memorable party or event? Let us take care of
              the culinary magic for you. We specialize in crafting delectable
              dishes that will leave your guests raving. Whether it's an
              intimate gathering or a grand celebration, we have the perfect
              menu waiting for you.
            </p>
            <h3>Download the App</h3>
            <div className="images">
              <a
                href="https://play.google.com/store/apps/details?id=com.eatnourisha.app&hl=en&gl=US"
                target="_blank"
              >
                <img src={Google} alt="Get it on Google Play" />
              </a>
              <a
                href="https://apps.apple.com/gb/app/nourisha-budget-meal-planner/id6451458690"
                target="_blank"
              >
                <img src={App} alt="Download from the App Store" />
              </a>
            </div>
          </div>

          <div className="right-side">
            <div className="ip">
              <img src={Dishes} alt="" />
            </div>
            <div className="top">
              <img src={Top} alt="" />
            </div>
            <div className="bot">
              <img src={Bot} alt="" />
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="box">
            <img src={Icon1} alt="" />
            <div className="write">
              <h3>Healthy Meals</h3>
              <p>Enjoy your food fresh crispy & hot</p>
            </div>
          </div>
          <div className="box">
            <img src={Icon2} alt="" />
            <div className="write">
              <h3>Fast Delivery</h3>
              <p>Promise to deliver on time</p>
            </div>
          </div>
          <div className="box">
            <img src={Icon3} alt="" />
            <div className="write">
              <h3>Meal Selection</h3>
              <p>Select your weekly meals from our menu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delight;
