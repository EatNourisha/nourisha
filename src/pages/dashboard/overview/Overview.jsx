import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./overview.css";
import man from "../../../assets/annouce.png";
import useMeal from "../../../hooks/useMeal";
import useCart from "../../../hooks/useCart";
import useMealZimbabwe from "../../../hooks/useMealZimbabwe";
import useMealGhana from "../../../hooks/useMealGhana";

const Overview = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const { data: dataNigeria, isLoading: loadingNigeria, error: errorNigeria } = useMeal(page);
  const { data: dataZimbabwe, isLoading: loadingZimbabwe, error: errorZimbabwe } = useMealZimbabwe(page);
  const { data: dataGhana, isLoading: loadingGhana, error: errorGhana } = useMealGhana(page);
  const countries = ["Nigeria", "Zimbabwe", "Ghana"];

  const loadingData = loadingNigeria || loadingZimbabwe || loadingGhana;
  console.log("dataLoading:", loadingData)

  let currentData;
  let loading;
  let error;
  switch (selectedCountry) {
    case "Nigeria":
      currentData = dataNigeria;
      loading = loadingNigeria;
      error = errorNigeria;
      break;
    case "Zimbabwe":
      currentData = dataZimbabwe;
      loading = loadingZimbabwe;
      break;
    case "Ghana":
      currentData = dataGhana;
      loading = loadingGhana;
      break;
    default:
      currentData = { data: [] }; 
      loading = false;
  }


  const { addItemToCart } = useCart();
  const itemsPerPage = 10;
  let totalItems = currentData?.totalCount || 0
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleAddToCart = async (meal) => {
    const itemData = {
      itemId: meal._id,
      quantity: 1,
    };

    try {
      await addItemToCart(itemData);
    } catch (error) {
      console.error("Failed to add item to cart", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };
  const handleViewMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleViewLess = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="overview-container">
      <div className="overview-container-first">
        <div className="overview-container-first-section">
          <img src={man} alt="annouce" />
          <div className="overview-top-content">
            <h2>Get £10 for Every Referral!</h2>
            <p>
              Earn £10 for every friend, or anyone, who subscribes with your
              referral code! No limits on referrals. Let's gooooo!
            </p>

            <button>Refer a friend</button>
          </div>
        </div>
       
        <div className="overview-dropdown">
          <div
            className="overview-dropdown-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCountry}
          </div>
          {isDropdownOpen && (
            <div className="overview-dropdown-content">
              {countries.map((country) => (
                <p key={country} onClick={() => handleSelectCountry(country)}>
                  {country}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="overview-meal-heading">
          <h3>Order a single meal</h3>{" "}
          <div className="overview-meal-pagination-container">
          {page > 1 && <button onClick={handleViewLess}>Previous</button>}
          {page < totalPages && (
            <button onClick={handleViewMore} className="overview-meal-heading-p">
              Next
            </button>
          )}
          </div>
        </div>
        <div className="overview-meal-container">
          {loadingData ? (
            <Icon icon="gg:spinner" className="animate-spin w-10 h-10 md:w-16 md:h-16 text-orange-400 ml-72 justify-center items-center mx-auto" />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            currentData?.data?.map((meal) => (
              <div key={meal._id} className="meal-container">
                <img
                  src={meal.image_url}
                  alt={meal.name}
                  style={{ width: "223px", height: "136px",  }}
                  className="meal-image"
                />
                <h3>{meal.name}</h3>

                <p>Price: £{meal.price.amount}</p>
                <div className="cart-container">
                  <div
                    className="add-to-cart"
                    onClick={() => handleAddToCart(meal)}
                  >
                    + 
                  </div>
        
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="overview-last-container">
        <h3>Unlock 60+ Premium Menu</h3>
        <button>Subscribe to a meal plan</button>
        <p>Treading Menu</p>
      </div>
    </div>
  );
};

export default Overview;
