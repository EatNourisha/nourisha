import "./download.css";
import Play from "../../assets/playstore.png";
import App from "../../assets/appstore.png";
import Mobile from "../../assets/Body12.png";

const Download = () => {
  return (
    <section id="container-downloading">
      <div className="download">
        <div className="download-one">
          <h1>Download the app!</h1>
          <p>
            Download the Nourisha app now and explore our diverse menu of
            chef-cooked dishes. Enjoy hassle-free delivery and the pleasure of
            restaurant-quality meals in the comfort of your home, across all
            cities in the UK.
          </p>
          <div className="down">
            <a
              href="https://play.google.com/store/apps/details?id=com.eatnourisha.app&hl=en&gl=US"
              target="_blank"
            >
              <img src={Play} alt="Google Playstore" />
            </a>
            <a
              href="https://apps.apple.com/gb/app/nourisha-budget-meal-planner/id6451458690"
              target="_blank"
            >
              <img src={App} alt="Appstore" />
            </a>
          </div>
        </div>
        <div className="mobile">
          <img src={Mobile} alt="Mobile" />
        </div>
      </div>
    </section>
  );
};

export default Download;
