import React from "react";
import "./how-our.css";
// import Man from "../../assets/Rectangle23.png";
import Man from "../../assets/Rect.png";

const HowOur = () => {
  return (
    <div className="howOur">
      <section className="container container-howOur">
        <article>
          <h1>How Our Collaboration Program works</h1>
          <div>
            <img src={Man} alt="" />
          </div>
        </article>
        <article>
          <h2>01</h2>
          <p>Joining is FREE, simple and straightforward.</p>
          <h2>02</h2>
          <p>Download Nourisha App and Sign up</p>
          <h2>03</h2>
          <p>
            Click on “Refer Friend” button to retrieve your referral code and
            share with your friends and followers
          </p>
          <h2>04</h2>
          <p>
            You earn anytime someone uses your link to signup and subscribe to
            either our weekly or monthly food subscription.
          </p>
          <div className="howBtn">
            <button className="Butn">Partner with us</button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default HowOur;
