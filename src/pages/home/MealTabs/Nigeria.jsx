import "./nigeria.css";
import { useState, useEffect } from "react";
import IMG1 from "../../../assets/IMG1.png";
import IMG2 from "../../../assets/IMG2.png";
import IMG3 from "../../../assets/IMG3.png";
import IMG4 from "../../../assets/IMG4.png";
import IMG5 from "../../../assets/IMG5.png";
import IMG6 from "../../../assets/IMG6.png";
import IMG7 from "../../../assets/IMG7.png";
import IMG8 from "../../../assets/IMG8.png";
import IMG9 from "../../../assets/IMG9.png";
import IMG10 from "../../../assets/IMG10.png";
import IMG11 from "../../../assets/IMG11.png";
import IMG12 from "../../../assets/IMG12.png";
import IMG13 from "../../../assets/IMG13.png";
import IMG14 from "../../../assets/IMG14.png";
import IMG15 from "../../../assets/IMG15.png";
import IMG16 from "../../../assets/IMG16.png";
import IMG17 from "../../../assets/IMG17.png";
import IMG18 from "../../../assets/IMG18.png";
import IMG19 from "../../../assets/IMG19.png";
import IMG20 from "../../../assets/IMG20.png";
import IMG21 from "../../../assets/IMG21.png";
import IMG22 from "../../../assets/IMG22.png";
import IMG23 from "../../../assets/IMG23.png";
import IMG24 from "../../../assets/IMG24.png";
import IMG25 from "../../../assets/IMG25.png";
import IMG26 from "../../../assets/IMG26.png";
import IMG27 from "../../../assets/IMG27.png";
import IMG28 from "../../../assets/IMG28.png";
import IMG29 from "../../../assets/IMG29.png";
import IMG30 from "../../../assets/IMG30.png";
import IMG31 from "../../../assets/IMG31.png";
import IMG32 from "../../../assets/IMG32.png";
import IMG33 from "../../../assets/IMG33.png";
import IMG34 from "../../../assets/IMG34.png";
import IMG35 from "../../../assets/IMG35.png";
import IMG36 from "../../../assets/IMG36.png";
import IMG37 from "../../../assets/IMG37.png";
import IMG38 from "../../../assets/IMG38.png";
import IMG39 from "../../../assets/IMG39.png";
import IMG40 from "../../../assets/IMG40.png";
import IMG41 from "../../../assets/IMG41.png";
import IMG42 from "../../../assets/IMG42.png";
import IMG43 from "../../../assets/IMG43.png";
import IMG44 from "../../../assets/IMG44.png";
import IMG45 from "../../../assets/IMG45.png";
import IMG46 from "../../../assets/IMG46.png";
import IMG47 from "../../../assets/IMG47.png";
import IMG48 from "../../../assets/IMG48.png";
import IMG49 from "../../../assets/IMG49.png";
import IMG50 from "../../../assets/IMG50.png";
import IMG51 from "../../../assets/IMG51.png";
import IMG52 from "../../../assets/IMG52.png";
import IMG53 from "../../../assets/IMG53.png";
import IMG54 from "../../../assets/IMG54.png";
import IMG55 from "../../../assets/IMG55.png";
import IMG56 from "../../../assets/IMG56.png";
import IMG57 from "../../../assets/IMG57.png";
import IMG58 from "../../../assets/IMG58.png";
import IMG59 from "../../../assets/IMG59.png";
import IMG60 from "../../../assets/IMG60.png";
import IMG61 from "../../../assets/IMG61.png";
import IMG62 from "../../../assets/IMG62.png";
import IMG63 from "../../../assets/IMG63.png";
import IMG64 from "../../../assets/IMG64.png";
import IMG65 from "../../../assets/IMG65.png";
import IMG66 from "../../../assets/IMG66.png";
import IMG67 from "../../../assets/IMG67.png";
// import ArrowRight from "../../assets/arrow-right.png";
// import ArrowLeft from "../../assets/arrow-left.png";
import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
} from "react-icons/bs";

const Nigeria = ({ selected, setSelected }) => {
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
      setTotalPages(2);
    } else if (currentFood === "swallow") {
      setTotalPages(6);
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
            className={currentFood === "beans" ? "tab active-tabs" : "tab"}
            onClick={() => handleTabs("beans")}
          >
            Beans
          </div>
          <div
            className={currentFood === "yam" ? "tab active-tabs" : "tab"}
            onClick={() => handleTabs("yam")}
          >
            Yam
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
            <div className="contentFull">
              <div className="ima">
                <img src={IMG1} alt="" />
                <p>Jollof Rice, Peppered Beef, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG2} alt="" />
                <p>Jollof Rice, Peppered Chicken, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG3} alt="" />
                <p>Jollof Rice, Peppered Fish, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG4} alt="" />
                <p>Fried Rice, Peppered Chicken, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG5} alt="" />
                <p>Fried Rice, Peppered Beef, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG6} alt="" />
                <p>Fried Rice, Peppered Fish, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG7} alt="" />
                <p>
                  Plain White Rice, Assorted Ofada Sauce, Fried Plantain Side
                </p>
              </div>
              <div className="ima">
                <img src={IMG8} alt="" />
                <p>Plain White Rice, Stew, Beef, Fried Plantain Side</p>
              </div>
            </div>
          )}
          {currentFood === "rice" && currenPg === 2 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG9} alt="" />
                <p>Plain White Rice, Stew, Chicken, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG10} alt="" />
                <p>Plain White Rice, Stew, Fish, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG11} alt="" />
                <p>Coconut Rice, Peppered Chicken, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG12} alt="" />
                <p>Coconut Rice, Peppered Beef, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG13} alt="" />
                <p>Coconut Rice, Peppered Fish, Fried Plantain Side</p>
              </div>
            </div>
          )}

          {currentFood === "swallow" && currenPg === 1 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG14} alt="" />
                <p>Semo, Bitterleaf Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG15} alt="" />
                <p>Semo, Bitterleaf Soup, Chicken</p>
              </div>
              <div className="ima">
                <img src={IMG16} alt="" />
                <p>Semo, Bitterleaf Soup, Goat Meat</p>
              </div>
              <div className="ima">
                <img src={IMG17} alt="" />
                <p>Semo, Bitterleaf Soup, Assorted Meats</p>
              </div>
              <div className="ima">
                <img src={IMG18} alt="" />
                <p>Garri, Bitterleaf Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG19} alt="" />
                <p>Garri, Bitterleaf Soup, Chicken</p>
              </div>
              <div className="ima">
                <img src={IMG20} alt="" />
                <p>Garri, Bitterleaf Soup, Goat Meat</p>
              </div>
              <div className="ima">
                <img src={IMG21} alt="" />
                <p>Garri, Bitterleaf Soup, Assorted Meats</p>
              </div>
            </div>
          )}
          {currentFood === "swallow" && currenPg === 2 && (
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
          )}

          {currentFood === "swallow" && currenPg === 3 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG30} alt="" />
                <p>Garri, Okro Soup, Chicken</p>
              </div>
              <div className="ima">
                <img src={IMG31} alt="" />
                <p>Garri, Okro Soup, Assorted Meats</p>
              </div>
              <div className="ima">
                <img src={IMG32} alt="" />
                <p>Semo, Ogbono Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG33} alt="" />
                <p>Semo, Ogbono Soup, Chicken</p>
              </div>
              <div className="ima">
                <img src={IMG34} alt="" />
                <p>Semo, Ogbono Soup, Goat Meat</p>
              </div>
              <div className="ima">
                <img src={IMG35} alt="" />
                <p>Semo, Ogbono Soup, Assorted Meats</p>
              </div>
              <div className="ima">
                <img src={IMG36} alt="" />
                <p>Garri, Ogbono Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG37} alt="" />
                <p>Garri, Ogbono Soup, Chicken</p>
              </div>
            </div>
          )}

          {currentFood === "swallow" && currenPg === 4 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG38} alt="" />
                <p>Garri, Ogbono Soup, Goat Meat</p>
              </div>
              <div className="ima">
                <img src={IMG39} alt="" />
                <p>Garri, Ogbono Soup, Assorted Meats</p>
              </div>
              <div className="ima">
                <img src={IMG40} alt="" />
                <p>Semo, Oha Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG41} alt="" />
                <p>Semo, Oha Soup, Chicken</p>
              </div>
              <div className="ima">
                <img src={IMG42} alt="" />
                <p>Semo, Oha Soup , Goat Meat</p>
              </div>
              <div className="ima">
                <img src={IMG43} alt="" />
                <p>Semo, Oha Soup, Assorted Meats</p>
              </div>
              <div className="ima">
                <img src={IMG44} alt="" />
                <p>Garri, Oha Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG45} alt="" />
                <p>Garri, Oha Soup, Chicken</p>
              </div>
            </div>
          )}

          {currentFood === "swallow" && currenPg === 5 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG46} alt="" />
                <p>Garri, Oha Soup, Goat Meat</p>
              </div>
              <div className="ima">
                <img src={IMG47} alt="" />
                <p>Garri, Oha Soup, Assorted Meats</p>
              </div>
              <div className="ima">
                <img src={IMG48} alt="" />
                <p>Semo, Vegetable Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG49} alt="" />
                <p>Semo, Vegetable Soup, Chicken</p>
              </div>
              <div className="ima">
                <img src={IMG50} alt="" />
                <p>Semo, Vegetable Soup, Goat Meat</p>
              </div>
              <div className="ima">
                <img src={IMG51} alt="" />
                <p>Semo, Vegetable Soup, Assorted Meats</p>
              </div>
              <div className="ima">
                <img src={IMG52} alt="" />
                <p>Garri, Vegetable Soup, Beef</p>
              </div>
              <div className="ima">
                <img src={IMG53} alt="" />
                <p>Garri, Vegetable Soup, Chicken</p>
              </div>
            </div>
          )}

          {currentFood === "swallow" && currenPg === 6 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG54} alt="" />
                <p>Garri, Vegetable Soup, Goat Meat</p>
              </div>
              <div className="ima">
                <img src={IMG55} alt="" />
                <p>Garri, Vegetable Soup, Assorted Meats</p>
              </div>
            </div>
          )}

          {currentFood === "beans" && currenPg === 1 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG56} alt="" />
                <p>Beans Porridge, Peppered Beef, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG57} alt="" />
                <p>Beans Porridge, Peppered Chicken, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG58} alt="" />
                <p>Beans Porridge, Peppered Fish, Fried Plantain Side</p>
              </div>
              <div className="ima">
                <img src={IMG59} alt="" />
                <p>Beans (Moin Moin), Stew, Peppered Beef</p>
              </div>
              <div className="ima">
                <img src={IMG60} alt="" />
                <p>Beans (Moin Moin), Stew, Peppered Fish</p>
              </div>
            </div>
          )}
          {currentFood === "yam" && currenPg === 1 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG61} alt="" />
                <p>Yam Porridge, Peppered Beef</p>
              </div>
              <div className="ima">
                <img src={IMG62} alt="" />
                <p>Yam Porridge, Peppered Fish</p>
              </div>
              <div className="ima">
                <img src={IMG63} alt="" />
                <p>Spicy Fried Yam Slices, Peppered Beef, Sweet Pepper Dip</p>
              </div>
              <div className="ima">
                <img src={IMG64} alt="" />
                <p>Spicy Fried Yam Slices, Peppered Fish, Sweet Pepper Dip</p>
              </div>
            </div>
          )}

          {currentFood === "others" && currenPg === 1 && (
            <div className="contentFull">
              <div className="ima">
                <img src={IMG65} alt="" />
                <p>Suya</p>
              </div>
              <div className="ima">
                <img src={IMG66} alt="" />
                <p>Goat Meat Pepper Soup, Yam</p>
              </div>
              <div className="ima">
                <img src={IMG67} alt="" />
                <p>Asun</p>
              </div>
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

      {/* <div className="bin">
            <button>I Want a Meal Plan</button>
        </div> */}
    </div>
  );
};

export default Nigeria;
