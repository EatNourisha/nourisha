import "./nigeria.css";
import { useState, useEffect } from "react";
import IMG81 from "../../../assets/IMG81.png";
import IMG82 from "../../../assets/IMG82.png";
import IMG83 from "../../../assets/IMG83.png";
import IMG84 from "../../../assets/IMG84.png";
import IMG85 from "../../../assets/IMG85.png";
import IMG86 from "../../../assets/IMG86.png";
import IMG87 from "../../../assets/IMG87.png";
import IMG88 from "../../../assets/IMG88.png";
import IMG89 from "../../../assets/IMG89.png";
import IMG90 from "../../../assets/IMG90.png";
import IMG91 from "../../../assets/IMG91.png";
import IMG92 from "../../../assets/IMG92.png";
import IMG93 from "../../../assets/IMG93.png";
import IMG94 from "../../../assets/IMG94.png";
import IMG95 from "../../../assets/IMG95.png";
import IMG96 from "../../../assets/IMG96.png";
import IMG97 from "../../../assets/IMG97.png";

import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
} from "react-icons/bs";

const Zimbabwe = ({ selected, setSelected }) => {
  const [currentFood, setCurrentFood] = useState("swallow");
  const [currenPg, setCurrentPg] = useState(1);
  // add total pages state, to indicate total page for each food
  const [totalPages, setTotalPages] = useState(2); // default is 2 because rice is the default and it's 2

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    //change total page depending on the current food
    if (currentFood === "swallow") {
      setTotalPages(2);
    // } else if (currentFood === "others") {
    //   setTotalPages(2);
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
          {currentFood === "swallow" && currenPg === 1 && (
            <div className="contentFull contentFullT">
              <figure className="ima">
                <img src={IMG81} alt="" />
                <p>Sadza neltsvo dzemombe (Sadza with Cow Kidneys)</p>
              </figure>
              <figure className="ima">
                <img src={IMG82} alt="" />
                <p>CN 3</p>
              </figure>
              <figure className="ima">
                <img src={IMG83} alt="" />
                <p>Sadza nemaguru (Sadza with cow offals)</p>
              </figure>
              <figure className="ima">
                <img src={IMG84} alt="" />
                <p>Sadza ne Hayifiridzi (Sadza with beef and vegetables)</p>
              </figure>
              <figure className="ima">
                <img src={IMG85} alt="" />
                <p>Sadza ne ma trotters (Sadza with trotters)</p>
              </figure>
              <figure className="ima">
                <img src={IMG86} alt="" />
                <p>Sadza ne madora (Sadza with Mopane Worms)</p>
              </figure>
              <figure className="ima">
                <img src={IMG87} alt="" />
                <p>Sadza ne mazondo (Sadza with cow feet)</p>
              </figure>
              <figure className="ima">
                <img src={IMG88} alt="" />
                <p>Sadza ne roadrunner (Sadza with hard chicken)</p>
              </figure>
            </div>
          )}
          {currentFood === "swallow" && currenPg === 2 && (
            <div className="contentFull">
            <figure className="ima">
                <img src={IMG89} alt="" />
                <p>Sadza ne rurimi rwe mombe (Sadza with ox tongue)</p>
              </figure>
            </div>
          )}

          {currentFood === "others" && currenPg === 1 && (
            <div className="contentFull">
              <figure className="ima">
                <img src={IMG90} alt="" />
                <p>Mazondo (cow feet)</p>
              </figure>
              <figure className="ima">
                <img src={IMG91} alt="" />
                <p>Rurimi rwemombe (Ox tongue)</p>
              </figure>
              <figure className="ima">
                <img src={IMG92} alt="" />
                <p>Trotters</p>
              </figure>
              <figure className="ima">
                <img src={IMG93} alt="" />
                <p>Itsvo dzemombe (cow kidneys)</p>
              </figure>
              <figure className="ima">
                <img src={IMG94} alt="" />
                <p>Zvikanganwahama (Gizzards)</p>
              </figure>
              <figure className="ima">
                <img src={IMG95} alt="" />
                <p>Madora (Mopane Worms)</p>
              </figure>
              <figure className="ima">
                <img src={IMG96} alt="" />
                <p>Maguru (Cow Offals)</p>
              </figure>
              <figure className="ima">
                <img src={IMG97} alt="" />
                <p>Roadrunner (Hard Chicken)</p>
              </figure>
            </div>
          )}
          <div className="buttons">
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

    </div>
  );
};

export default Zimbabwe;
