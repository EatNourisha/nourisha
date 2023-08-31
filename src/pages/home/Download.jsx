import "./download.css";
import Play from "../../assets/playstore.png";
import App from "../../assets/appstore.png";
import Mobile from "../../assets/Body12.png";

const Download = () => {
  return (
    <section id="container container-downloading">
      <div className="download">
        <div className="download-one">
          <h1>Download the app!</h1>
          <p>
            Download the Eatnourisha app now and explore our diverse menu of
            chef-cooked dishes. Enjoy hassle-free delivery and the pleasure of
            restaurant-quality meals in the comfort of your home, across all
            cities in the UK.
          </p>
          <div className="down">
            <img src={Play} alt="Google Playstore" />
            <img src={App} alt="Appstore" />
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
