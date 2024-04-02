import React, { useState } from "react";
import "./checkout.css";
import usePlaceOrder from "../hooks/usePlaceOrder";
import useGetCart from "../hooks/useGetCart";

const CheckOut = ({ onClose }) => {
  const { placeOrder } = usePlaceOrder();
  const { data } = useGetCart();
 
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [coupon, setCoupon] = useState("");

  const handlePlaceOrder = async (e) => {
    e.preventDefault(); // Prevent form submission
    const deliveryAddress = {
      address_: address,
      city: city,
      country: country,
      postcode: postcode,
    };
    const placeOrderItem = {
      delivery_address: deliveryAddress,
      delivery_date: deliveryDate,
      coupon: coupon,
      cart_session_id: data.cart.session_id,
    };

    try {
      await placeOrder(placeOrderItem);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Failed to place order", error);
    }
  };

  return (
    <div className="checkout-modal">
      <div className="checkout-content">
        <div className="checkout-container">
          <h1>Delivery Details</h1>
          <p>
            Kindly provide the following information to complete your order. Your meal will be delivered to this address and date.
          </p>
          <form onSubmit={handlePlaceOrder}>
            <div className="form-container">
              <div className="input-container">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label>City/Town</label>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label>Country</label>
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label>Postal Code</label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label>Delivery Date</label>
                <input
                  type="date"
                  placeholder="Delivery Date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label>Coupon Code</label>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
              </div>
              <button type="submit" className="proceed-checkout-btn">Proceed</button>
            </div>
          </form>
        </div>
        <button className="close-checkout-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
