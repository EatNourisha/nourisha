import React from "react";
import FemaleChef from "../../assets/Rectangle18.png";
import Zag from "../../assets/Vector1.png";
import "./chef.css";

const Chef = () => {
  return (
    <section className="showcase-two">
      <div className="container container-chefT">
        <div className="left">
          <h1>
            Join the <span>Nourisha</span> Affiliate Program
          </h1>
          <p>
            Nourisha is a culinary haven that brings together all the vibrant
            tastes of Africa, all in one place. Our mission is to nourish our
            subscribers’ through an exciting fusion of flavors that transcend
            borders. <br />
            At Nourisha, every subscriber on either our WEEKLY or MONTHLY plans
            —Staring from £120/week and £400/month, gets enjoy 2 freshly-cooked,
            African meals, daily. Served 7 days a week, delivered once weekly to
            each subscriber, anywhere in the UK.
          </p>
        </div>
        <div className="right">
          <img src={FemaleChef} alt="Chef" />
        </div>
        <div className="chef-btn">
          <button>Join us</button>
        </div>{" "}
      </div>
      <div className="zigT">
        <img src={Zag} alt="zig-zag" />
      </div>
    </section>
  );
};

export default Chef;
