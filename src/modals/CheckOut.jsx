import React from "react";
import "./checkout.css";

const CheckOut = ({ onClose }) => {
  return (
    <div className="checkout-modal">
      <div className="checkout-content">
        <div className="checkout-container">
          <h1>Delivery Details</h1>
          <p>
            kindly provide the following information to complete your order.
            your meal will be delivered to this address and date
          </p>
          <form>
            <div className="form-container">
              <div className="input-container">
                <label>Address</label>
                <input type="text" placeholder="address" />
              </div>
              <div className="input-container">
                <label>City/Town</label>
                <input type="text" placeholder="city" />
              </div>
              <div className="input-container">
                <label>Country</label>
                <input type="text" placeholder="country" />
              </div>
              <div className="input-container">
                <label>Postal Code</label>
                <input type="text" placeholder="postcode" />
              </div>
              <div className="input-container">
                <label>Delivery Date</label>
                <input type="date" placeholder="dd/mm/year" />
              </div>
              <div className="input-container">
                <label>Coupon Code</label>
                <input type="text" placeholder="coupon code" />
              </div>
              <button>Proceed</button>
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
