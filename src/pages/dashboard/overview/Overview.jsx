import React, { useState } from "react";
import "./overview.css";
import man from "../../../assets/annouce.png";
import useMeal from "../../../hooks/useMeal";
import useCart from '../../../hooks/useCart';

const Overview = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useMeal(page);
  const { addItemToCart } = useCart();
  const itemsPerPage = 10; // Assuming you load 10 items per page, adjust based on your actual limit
  const totalItems = data?.totalCount; 
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

console.log({ page, totalItems });
 
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
        <div className="overview-container-search">
          <input type="text" placeholder="Which Country do u perfer" />
        </div>
        <div className="overview-meal-heading">
          <h3>Order a single meal</h3>{" "}
          {page > 1 && (
          <p onClick={handleViewLess}>View Less</p>
        )}
        {page < totalPages && (
          <p onClick={handleViewMore} className="overview-meal-heading-p">View More</p>
        )}
        </div>
        <div className="overview-meal-container">
          {loading ? (
            <p>loading.....</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            data?.data?.map((meal) => (
              <div key={meal._id} className="meal-container">
                <img
                  src={meal.image_url}
                  alt={meal.name}
                  style={{ width: "138px", height: "142px" }}
                />
                <h3>{meal.name}</h3>
                
                <p>Price: £{meal.price.amount}</p>
                <div className="cart-container">
                <div className="add-to-cart" onClick={() => handleAddToCart(meal)}>+</div>
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
