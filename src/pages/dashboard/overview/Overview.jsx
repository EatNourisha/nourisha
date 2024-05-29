import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./overview.css";
import man from "../../../assets/annouce.png";
import backgroundImg from "../../../assets/bgmeal.png";
import check from "../../../assets/check.png";
import img_1 from "../../../assets/IMG20.png";
import img_2 from "../../../assets/IMG23.png";
import img_3 from "../../../assets/IMG21.png";
import img_4 from "../../../assets/IMG22.png";

import useMeal from "../../../hooks/useMeal";
import useCart from "../../../hooks/useCart";
import useMealZimbabwe from "../../../hooks/useMealZimbabwe";
import useMealGhana from "../../../hooks/useMealGhana";
import cartStore from "../../../stores/cartStore";
import MealDetails from "../../../modals/MealDetails";
import ReferFriend from "../../../modals/ReferFriend";
import SelectPlan from "../../../modals/SelectPlan";


const Overview = () => {
  const [page, setPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const {
    data: dataNigeria,
    isLoading: loadingNigeria,
    error: errorNigeria,
  } = useMeal(page);
  const {
    data: dataZimbabwe,
    isLoading: loadingZimbabwe,
    error: errorZimbabwe,
  } = useMealZimbabwe(page);
  const {
    data: dataGhana,
    isLoading: loadingGhana,
    error: errorGhana,
  } = useMealGhana(page);
  const countries = ["Nigeria", "Zimbabwe", "Ghana"];

  const gradientStyle = {
    background: `
          url(${backgroundImg}) bottom center / cover no-repeat
        `,
   
  };

  const { addItemToCartOnServer, data } = useCart();
  const { addToCart, setTotalItemCount } = cartStore();
  const [mealId, setMealId] = useState(null);
  const [openMealToggle, setOpenMealToggle] = useState(false);
  const [referToggle, setReferToggle] = useState(false);
  const [refreshCart, setRefreshCart] = useState(false);
  const [selectPlan, setSelectPlan] = useState(false);


  const loadingData = loadingNigeria || loadingZimbabwe || loadingGhana;

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

  const itemsPerPage = 10;
  let totalItems = currentData?.totalCount || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // useEffect(() => {
  //   if(!data.items) return
  //   const { items } = data;
  //   const total = items.totalCount || 0
  //   setTotalItemCount(total)
  // }, [data, refreshCart])


  const handleAddToCart = async (meal) => {
    const itemData = {
      itemId: meal._id,
      quantity: 1,
    };

    try {
      const res = await addItemToCartOnServer(itemData);
      if (res?.data?._id) await addToCart(itemData);
      setRefreshCart(!refreshCart);
    } catch (error) {
      console.log(error, "Can't add to cart");
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

  const handleMealDetails = (meal) => {
    console.log(meal._id);
    setMealId(meal);
    setOpenMealToggle(!openMealToggle);
  };

  const handleReferFriend = () => {
    setReferToggle(!referToggle);
  };

  const handleSelectPlan = () => {
    setSelectPlan(true)
  }

  return (
    <div className="overview-container lg:flex">
      <div className="overview-container-first w-full mt-[70px] md:w-[83%] lg:w-[48%] xl:w-[67%] box-border  md:mt-0">
        <div className="overview-container-first-section">
          <img src={man} alt="annouce" />
          <div className="overview-top-content">
            <h2>Get £10 for Every Referral!</h2>
            <p>
              Earn £10 for every friend, or anyone, who subscribes with your
              referral code! No limits on referrals. Let's gooooo!
            </p>

            <button onClick={() => handleReferFriend()}>Refer a friend</button>
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
              <button
                onClick={handleViewMore}
                className="overview-meal-heading-p"
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="overview-item  grid justify-center items-center xs:grid-cols-2 gap-4 xl:grid-cols-3">
          {loadingData ? (
            <Icon
              icon="gg:spinner"
              className="animate-spin w-10 h-10 mt-16 mx-auto text-orange-400 flex justify-center items-center  md:ml-72 md:w-16 md:h-16"
            />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            currentData?.data.map((meal) => (
              <div key={meal._id} className="meal-container cursor-pointer">
                <img
                  src={meal.image_url}
                  alt={meal.name}
                  style={{ width: "223px", height: "136px" }}
                  className="meal-image select-none"
                  onClick={() => handleMealDetails(meal)}
                />
                <h3
                  onClick={() => handleMealDetails(meal)}
                  className="select-none pl-2"
                >
                  {meal.name}
                </h3>

                <p className="pl-2 text-[17px] font-bold text-[#FE7E00]">£{meal.price.amount}</p>

                <div className="cart-container">
                  <button
                    className="add-to-cart select-none"
                    onClick={() => handleAddToCart(meal)}
                    disabled={!meal?.available_quantity}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* <CheckoutForm /> */}

      </div>

      <div className="flex flex-col bg-white md:w-[83%] lg:bg-transparent items-center lg:items-start">
        <div className="relative w-full h-full rounded-lg  md:w-[344px] md:h-[550px] mt-10 lg:mt-0 flex flex-col items-center " style={gradientStyle}>
          <div className="relative p-6">
            <h1 className="text-white text-[20px] font-bold leadding-[22px] items-center ">
              Don't Miss Out! Save Big. <br /> Up to 40% off your first order.
            </h1>
            <div className="relative bg-white rounded-lg w-[294px] h-[416px] mt-10 ">
              <p className="absolute -top-5 left-28 text-[19px] text-white text-center font-bold bg-[#FF0000] p-2 border border-white w-[70px] rounded-lg ">
                £120
              </p>

              <div className="p-2 pt-10 text-center  ">
                <p className="font-bold text-[#1E1E1E] text-[18px]">
                  Weekly Plan
                </p>
                <p className="leading-[18px] mt-2 text-[12px]">
                  2 chef-cooked meals daily <br /> (Lunch and Dinner from Mon.
                  to Sun.) for a week, of your choice meal.
                </p>
              </div>

              <div className="flex flex-col mt-4 px-8">
                <hr className="mb-3" />

                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Monday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Tuesday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Wednesday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Thursday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Friday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Saturday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Sunday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>

                <div className="mt-3">
                  <button className="text-white text-[12px] font-bold p-2 w-full bg-[#FF0000]/70 rounded-lg" onClick={handleSelectPlan}>
                    Order now
                  </button>
                  <p className="text-center text-[#FE7E00] text-[12px] mt-1 ">
                    + £10 For delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center w-full h-[280px] rounded-lg mb-10  mt-4 bg-[#FFF2EB] md:w-[344px] md:mt-10 ">
          <h3 className="text-center text-[#242524] text-[20px] font-extrabold ">
            Unlock 60+ <br /> Premium Menu
          </h3>
          <button className="text-[14px] text-white font-medium bg-[#FF0000]/70 p-2 px-6 rounded-lg mt-4 ">
            Subscribe to a meal plan
          </button>
          <p className="text-[20px] font-extrabold text-[#FE7E00] mt-3 ">
            Treading Menu
          </p>

          <div className="flex flex-col px-4 items-center mt-3">
            <div className="flex gap-4 items-center mb-3">
              <div className="flex gap-2 items-center border p-1 px-3 shadow rounded-3xl">
                <img src={img_1} alt="" width={30} className="rounded-full" />
                <p className="font-bold text-[14px] text-[#030838] ">Rice</p>
              </div>
              <div className="flex gap-2 items-center border p-1 px-3 shadow rounded-3xl">
                <img src={img_2} alt="" width={30} className="rounded-full" />
                <p className="font-bold text-[14px] text-[#030838] ">Swallow/Soup</p>
              </div>{" "}
              <br />
            </div>

            <div className="flex justify-center gap-2 -ml-2 items-center">
              <div className="flex gap-2 items-center border p-1 px-3 shadow rounded-3xl">
                <img src={img_3} alt="" width={30} className="rounded-full" />
                <p className="font-bold text-[14px] text-[#030838] ">Beans</p>
              </div>
              <div className="flex gap-2 items-center border p-1 px-3 shadow rounded-3xl">
                <img src={img_4} alt="" width={30} className="rounded-full" />
                <p className="font-bold text-[14px] text-[#030838] ">Yam</p>
              </div>
              <div className="flex gap-2 items-center border p-1 px-3 shadow rounded-3xl">
                <img src={img_4} alt="" width={30} className="rounded-full" />
                <p className="font-bold text-[14px] text-[#030838] ">Others</p>
              </div>
            </div>
          </div>

        </div>
        {/* <useStripeCheckout /> */}
      </div>

      {/* Select Plan */}
      {selectPlan && <SelectPlan onClose={() => setSelectPlan(false)} />}

      {/* Refer a friend modal */}
      {referToggle && <ReferFriend onClose={() => setReferToggle(false)} />}

      {/* Modal for Meal Details */}
      {openMealToggle && (
        <MealDetails onClose={() => setOpenMealToggle(false)} mealId={mealId} />
      )}
    </div>
  );
};

export default Overview;
