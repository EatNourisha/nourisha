import React, { useState } from "react";
import "./overview.css";
import man from "../../../assets/annouce.png";
import useMeal from "../../../hooks/useMeal";
import useCart from "../../../hooks/useCart";
import useMealZimbabwe from "../../../hooks/useMealZimbabwe";
import useMealGhana from "../../../hooks/useMealGhana";
import AddIcon from "../../../assets/icons/add-icon.svg"
import CheckIcon from "../../../assets/icons/check_icon.svg"
import NigerianFlag from "../../../assets/icons/nigeria-flag.svg"
import Loader from "../../../components/loader";

const Overview = () => {
  const [page, setPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const { data: dataNigeria, loading: loadingNigeria, error: errorNigeria } = useMeal(page);
  const { data: dataZimbabwe, loading: loadingZimbabwe, error: errorZimbabwe } = useMealZimbabwe(page);
  const { data: dataGhana, loading: loadingGhana, error: errorGhana } = useMealGhana(page);
  const countries = ["Nigeria", "Zimbabwe", "Ghana"];
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
      alert("Item added to cart!");
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

  const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  // Render main content

  const renderMeals = () => {
    if (loading) {
      return (
        <div className="loading-container">
          <Loader/>
        </div>
      )
    }

    if (error) {
      return (
        <div>

        </div>
      )
    }

    return (
      <>
        <div className="overview-meal-container">
          {
            currentData?.data?.map((meal) => (
              <div key={meal._id} className="meal-container">
                <div className="meal-image-container">
                  <img
                    src={meal.image_url}
                    alt={meal.name}
                    className="meal-image"
                  />
                </div>
                <div className="meal-details-container">
                  <h3 className="meal-name">{meal.name}</h3>
                  <p className="meal-price">£{meal.price.amount}</p>
                </div>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(meal)}
                >
                  <img src={AddIcon} alt="Add Icon"/>
                </button>
              </div>
            ))
          }
        </div>
      </>
    )
  }

  return (
    <div className="overview-container">
      <div className="overview-container-first">
        <div className="overview-container-first-section">
          <div className="overview-container-img">
            <img src={man} alt="annouce" />
          </div>
          <div className="overview-top-content">
            <h2>Get £10 for Every Referral!</h2>
            <p>
              Earn £10 for every friend, or anyone, who subscribes with your
              referral code! No limits on referrals. Let's gooooo!
            </p>
            <button>Refer a friend</button>
          </div>
        </div>
        <div>
          <button className="select-country-btn">
            <h3 className="select-country-btn-title">Which country's cuisine do you prefer</h3>
            <div className="country-icon">
              <img src={NigerianFlag} alt="Nigerian Flag"/>
            </div>
          </button>
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
            <h3 className="overview-meal-heading-title">Order a single meal</h3>
            {
              !loading ? (
                <div className="overview-meal-pagination-container">
                  <button disabled={page === 1} onClick={handleViewLess}>Previous</button>
                  <h3 className="pages-data">{`${page} of ${totalPages}`}</h3>
                  <button disabled={page === totalPages} onClick={handleViewMore} className="overview-meal-heading-p">
                    Next
                  </button>
                </div>
              ) : null
            }
          </div>
          <div>
            {renderMeals()}
          </div>
        </div>
      </div>
      <div>
        <div className="order-now-container">
          <div>
            <h3 className="order-now-title">Don't Miss Out! Save Big. <br/> Up to 40% off your first order.</h3>
            <div className="order-now-price-container">
              <h2 className="order-now-price-tag">
                £120
              </h2>
              <div className="order-now-price-card">
                <div className="order-now-price-card-header">
                  <h3 className="order-now-price-card-header-title">Weekly Plan</h3>
                  <p className="order-now-price-card-header-subtitle">2 chef-cooked meals daily (Lunch and Dinner from Mon. to Sun.)  for a week, of your choice meal.</p>
                </div>
                <div className="days-of-the-week-container">
                  {
                    daysOfTheWeek.map((day, idx) => {
                      return (
                        <div className="day-of-the-week" key={idx}>
                          <h4 className="day-of-the-week-name">{day}</h4>
                          <img src={CheckIcon} alt="Check"/>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="order-now-btn-container">
                  <button className="order-now-btn">Order now</button>
                  <h4 className="order-now-subtext">+ £10 For delivery</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overview-last-container">
          <h3>Unlock 60+ Premium Menu</h3>
          <button>Subscribe to a meal plan</button>
          <p>Trending Menu</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
