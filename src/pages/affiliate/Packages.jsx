import React from "react";
import "./packages.css";

const Packages = () => {
  return (
    <div className="Packages">
      <div className="container container-packages">
        <h5>We have two packages to choose from;</h5>
        <h1>
          Partner / Collaborators’ <br /> Incentives
        </h1>
        <div className="packagesCard">
          <div className="packageCard card-gr">
            <h3>Package 01</h3>
            <article>
              <h2>01</h2>
              <p>
                £10 fixed fee commission on all sales generated with your code
                (No limit on how many)
              </p>
              <h2>02</h2>
              <p>
                Exclusive time limited offers for your followers and readers
              </p>
              <h2>03</h2>
              <p>
                No monthly targets to achieve, simply join and start earning
              </p>
              <h2>04</h2>
              <p>Fantastic range of creative for you to use onsite.</p>
              <h2>05</h2>
              <p>
                A dedicated point of contact, to help you with any problems you
                may encounter.
              </p>
              <h2>06</h2>
              <p>Payout within 72 hours.</p>
              <div className="howBtn">
                <button className="Butn">Partner with us</button>
              </div>
            </article>
          </div>
          <div className="packageCard card-pi">
            <h3>Package 02</h3>
            <article>
              <h2>01</h2>
              <p>
                £15 fixed fee commission on all sales generated. Minimum of 50
                referrals before eligible for payout or withdrawal.
              </p>
              <h2>02</h2>
              <p>
                Exclusive time limited offers for your followers and readers
              </p>
              <h2>03</h2>
              <p>
                Food supply for a week when you meet your monthly minimum quota,
                and a month’s supply if you referrals is up to 100 for the
                month.
              </p>
              <h2>04</h2>
              <p>Fantastic range of creative for you to use onsite</p>
              <h2>05</h2>
              <p>
                A dedicated point of contact, to help you with any problems you
                may encounter.
              </p>
              <h2>06</h2>
              <p>Payout within 72 hours of meeting target.</p>
              <div className="howBtn">
                <button className="Butn">Partner with us</button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
