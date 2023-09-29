import "./footer.css";
import logo from "../../assets/group16.png";
import Play from "../../assets/playstore.png";
import App from "../../assets/appstore.png";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import { MdCall } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container container-footer">
      <footer>
        <div className="first">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="nourisha logo" />
            </Link>
            <Link to="/">
              <span>nourisha</span>
            </Link>
          </div>
          <h4>Start eating amazing food today.</h4>
          <div className="apps">
            <a href="">
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

        <div className="second">
          <h2>Company</h2>
          <nav className="bottom-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/why-nourisha">Why Nourisha?</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
            <NavLink to="/terms-of-service">Terms of service</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            {/* <NavLink to="/join-nourisha">Join Nourisha</NavLink> */}
          </nav>
        </div>

        <div className="third">
          <h2>Contact</h2>
          <div className="call">
            <div className="img">
              <MdCall />
              <h6>020 3443 3303</h6>
            </div>
          </div>

          <div className="call">
            <div className="img">
              <MdEmail />
              <h6>help@eatnourisha.com</h6>
            </div>
          </div>
        </div>

        <div className="fourth">
          <h2>Social media</h2>
          <div className="icons">
            <div className="facebook">
              <a
                href="https://web.facebook.com/people/Eatnourisha/100068259570536/?mibextid=LQQJ4d"
                target="_blank"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </div>
            <div className="twitter">
              <a
                href="https://twitter.com/nourisha12/status/1652961343736086529?s=46"
                target="_blank"
              >
                <img src={twitter} alt="twitter" />
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://www.instagram.com/eatnourisha/?igshid=MmJiY2I4NDBkZg=="
                target="_blank"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <p>&copy; 2023 House of Nourisha Ltd</p>
    </div>
  );
};

export default Footer;
