import "./food.css";
import Google from "../../assets/Group2.png";
import App from "../../assets/Group1.png";
import Icon1 from "../../assets/Group4.png";
import Icon2 from "../../assets/Group5.png";
import Icon3 from "../../assets/Group3.png";
import IPhone from "../../assets/IPhone12.png";
import Top from "../../assets/Vector1.png";
import Bot from "../../assets/Vector2.png";
import { Helmet } from "react-helmet-async";

const Food = () => {
  return (
    <div className="container container-food">
      <Helmet>
        <title>
          Delicious Chef-Cooked Meals Delivered in All UK Cities | Order from
          Our Menu
        </title>
        <meta
          name="description"
          content="Craving fresh, chef-cooked meals in the UK? Order from our diverse menu and enjoy hassle-free delivery across all cities. No market runs, no prep-time. Just heat, eat, and enjoy!"
        />
        <meta name="keywords" content="eatnourisha, nourisha" />
      </Helmet>
      <div className="showcase-one">
        <div className="sides">
          <div className="left-side">
            <button>1# Food App</button>
            <h1>
              <span>Food</span> for here, there and everywhere.
            </h1>
            <p>
              Welcome to Nourisha, your gateway to indulging in mouthwatering
              chef-cooked meals from our diverse menu. We're excited to bring
              the culinary experience to your doorstep across all cities in the
              UK. Say goodbye to the challenges of shopping and cooking. With
              us, it's as simple as selecting, heating, and savoring.
            </p>
            <h3>Download the App</h3>
            <div className="images">
              <img src={Google} alt="Get it on Google Play" />
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
              <img src={IPhone} alt="" />
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

export default Food;
