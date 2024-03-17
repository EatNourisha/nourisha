import "./nigeria.css";
import { useState, useEffect } from "react";
import IMG68 from "../../../assets/IMG68.jpg";
import IMG69 from "../../../assets/IMG69.jpg";
import IMG70 from "../../../assets/IMG70.jpg";
import IMG71 from "../../../assets/IMG71.jpg";
import IMG72 from "../../../assets/IMG72.jpg";
import IMG73 from "../../../assets/IMG73.jpg";
import IMG74 from "../../../assets/IMG74.jpg";
import IMG75 from "../../../assets/IMG75.jpg";
import IMG76 from "../../../assets/IMG76.jpg";
import IMG77 from "../../../assets/IMG77.jpg";
import IMG78 from "../../../assets/IMG78.jpg";
import IMG79 from "../../../assets/IMG79.jpg";
import IMG80 from "../../../assets/IMG80.jpg";

import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
} from "react-icons/bs";

const Ghana = ({ selected, setSelected }) => {
  const [currentFood, setCurrentFood] = useState("rice");
  const [currenPg, setCurrentPg] = useState(1);
  // add total pages state, to indicate total page for each food
  const [totalPages, setTotalPages] = useState(2); // default is 2 because rice is the default and it's 2

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    //change total page depending on the current food
    if (currentFood === "rice") {
      setTotalPages(1);
    // } else if (currentFood === "swallow") {
    //   setTotalPages(6);
      // set it to 1 as default if it;s nither rice nor swallow
    } else {
      setTotalPages(1);
    }
  }, [currentFood]);

  const nextPage = () => {
    //if current page is 1 or more than 1 then you can use next
    if (currenPg >= 1) {
      setCurrentPg(currenPg + 1);
    }
  };
  const prevPage = () => {
    //if current page is less than or equal to total pages you can use previous
    if (currenPg <= totalPages) {
      setCurrentPg(currenPg - 1);
    }
  };

  const handleTabs = (food) => {
    setCurrentFood(food);
    setCurrentPg(1);
    setClick(!click);
    setSelected(food);
  };

  return (
    <div className="meals">
      <div className="container container-meals">
        <div className="chevrons" onClick={handleClick}>
          <div className="tops-btn">
            <h1>{selected}</h1>
            <span>
              {click ? (
                <BsChevronUp className="bs" />
              ) : (
                <BsChevronDown className="bs" />
              )}
            </span>
          </div>
        </div>

        <div className={click ? "tabs-active tabs" : "tabs"}>
          <div
            className={currentFood === "rice" ? "tab active-tabs" : "tab"}
            onClick={() => handleTabs("rice")}
          >
            Rice
          </div>
          <div
            className={currentFood === "swallow" ? "tab active-tabs" : "tab"}
            onClick={() => handleTabs("swallow")}
          >
            Swallow/Soup
          </div>
          <div
            className={currentFood === "others" ? "tab active-tabs" : "tab"}
            onClick={() => handleTabs("others")}
          >
            Others
          </div>
        </div>

        <div className="content-tabs">
          {currentFood === "rice" && currenPg === 1 && (
            <div className="contentFull contentFullT">
              <figure className="ima">
                <img src={IMG68} alt="" />
                <p>Assorted Fried Rice (Chicken and Shito_Hot Sauce)</p>
              </figure>
              <figure className="ima">
                <img src={IMG69} alt="" />
                <p>Assorted Jollof Rice (Chicken and Shito_Hot Sauce)</p>
              </figure>
            </div>
          )}
      

          {currentFood === "swallow" && currenPg === 1 && (
            <div className="contentFull contentFullT">
              <figure className="ima">
                <img src={IMG70} alt="" />
                <p>Chicken Soup</p>
              </figure>
              <figure className="ima">
                <img src={IMG71} alt="" />
                <p>Riceball and Groundnut</p>
              </figure>
              <figure className="ima">
                <img src={IMG72} alt="" />
                <p>Kenkey and Okro Stew</p>
              </figure>
              <figure className="ima">
                <img src={IMG73} alt="" />
                <p>Kenkey and Gravy Sauce</p>
              </figure>
              <figure className="ima">
                <img src={IMG74} alt="" />
                <p>Kenkey and Bean Stew</p>
              </figure>
              <figure className="ima">
                <img src={IMG75} alt="" />
                <p>Banku and Okro Stew</p>
              </figure>
              <figure className="ima">
                <img src={IMG76} alt="" />
                <p>Banku and Beans Stew</p>
              </figure>
              <figure className="ima">
                <img src={IMG77} alt="" />
                <p>Banku and Gravy Stew</p>
              </figure>
            </div>
          )}
          {/* {currentFood === "swallow" && currenPg === 2 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG22} alt="" />
                <p>Semo, Egusi Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG23} alt="" />
                <p>Semo, Egusi Soup, Chicken</p>
              </div>
              <div className="ima">
                <img src={IMG24} alt="" />
                <p>Garri, Egusi Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG25} alt="" />
                <p>Garri, Egusi Soup, Chicken</p>
              </div>
              <div className="ima">
                <img src={IMG26} alt="" />
                <p>Garri, Egusi Soup, Goat Meat</p>
              </div>
              <div className="ima">
                <img src={IMG27} alt="" />
                <p>Semo, Okro Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG28} alt="" />
                <p>Semo, Okro Soup, Chicken</p>
              </div>
              <div className="ima">
                <img src={IMG29} alt="" />
                <p>Semo, Okro Soup, Assorted Meats</p>
              </div>
            </div>
          )} */}

          {currentFood === "others" && currenPg === 1 && (
            <div className="contentFull contentFullT">
              <figure className="ima">
                <img src={IMG78} alt="" />
                <p>Waakye, Assorted Meat, Fish, Stew and Shito</p>
              </figure>
              <figure className="ima">
                <img src={IMG79} alt="" />
                <p>White Rice, Plantain and Beans Stew</p>
              </figure>
              <figure className="ima">
                <img src={IMG80} alt="" />
                <p>White Rice, Plantain and Gravy Sauce with Chicken</p>
              </figure>
            </div>
          )}
          <div className="buttons buttonsT">
            <button
              onClick={prevPage}
              disabled={currenPg === 1}
              //className={currenPg === 1 ? 'disabledC' : '' }
            >
              <BsChevronLeft className="chev" />
            </button>
            <button
              onClick={nextPage}
              disabled={currenPg >= totalPages}
              //className={currenPg > totalPages ? "disabledC" : ""}
            >
              <BsChevronRight className="chev" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="bin">
            <button>I Want a Meal Plan</button>
        </div> */}
    </div>
  );
};

export default Ghana;
