import "./enjoy.css";
import Unsplash from "../../assets/unsplash.png";
import { AiFillCheckCircle } from "react-icons/ai";

const Enjoy = () => {
  return (
    <div className=" container container-enjoy">
      <h1>
        Best Chef-Cooked Meals Delivered Across All UK Cities | Order from Our
        Menu
      </h1>
      <div className="pic">
        <img src={Unsplash} alt="" />
      </div>
      <div className="checks">
        <div className="check">
          <AiFillCheckCircle className="i" />{" "}
          <span>Fresh chef-cooked meals delivered to you</span>
        </div>
        <div className="check">
          <AiFillCheckCircle className="i" />
          <span>No market run. No prep-time. No extra delivery charge</span>
        </div>
        <div className="check">
          <AiFillCheckCircle className="i" /> <span>Just heat and eat</span>
        </div>
      </div>
      <button>Plan My Meal</button>
    </div>
  );
};

export default Enjoy;
