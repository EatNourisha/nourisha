import React from "react";
import "./earn.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Earn = () => {
  return (
    <section className="earns">
      <h1>Earn based on your Referral</h1>
      <h2>
        At Nourisha, we believe in rewarding our affiliates generously. Your
        earnings are directly linked to the meal plans your referrals choose.{" "}
        <span>Here's how it breaks down:</span>
      </h2>
      <div className="earnCards">
        <div className="earnCard">
          <h4>WEEKLY MEAL PLAN</h4>
          <h3>£120</h3>
          <h6>+ £10 delivery/ Week</h6>
          <div className="checksT">
            <div className="checkT">
              <AiFillCheckCircle className="i" />{" "}
              <span>
                Includes lunch and <br />
                dinner for 7 days
              </span>
            </div>
            <div className="checkT">
              <AiFillCheckCircle className="i" />
              <span>
                Standard menu with a variety <br />
                of meal options
              </span>
            </div>
            <div className="checkT">
              <AiFillCheckCircle className="i" />{" "}
              <span>
                No customization or dietary <br />
                restrictions
              </span>
            </div>
          </div>
        </div>
        <div className="earnCard">
          <h4>MONTHLY MEAL PLAN</h4>
          <h3>£400</h3>
          <h6>+ £40 delivery/ Month</h6>
          <div className="checksT">
            <div className="checkT">
              <AiFillCheckCircle className="i" />{" "}
              <span>
                Includes lunch and <br />
                dinner for 30 days
              </span>
            </div>
            <div className="checkT">
              <AiFillCheckCircle className="i" />
              <span>
                Standard menu with a wide <br />
                range of meal choices
              </span>
            </div>
            <div className="checkT">
              <AiFillCheckCircle className="i" />{" "}
              <span>
                No customization or dietary <br />
                restrictions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earn;
