import React from "react";
import "./cart.css";

const Cart = ({ onClose }) => {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>
        <div className="cart-items">
          <div className="cart-item">
            <div className="cart-top1">
              <img src="item-image.jpg" alt="Item" />
              <div className="cart-name-price">
                <h3>Item Name</h3>
                <p>£10</p>
              </div>
            </div>
            <div className="item-details">
              <p>Remove</p>
              <div className="cart-plus-minus-container">
                <button className="cart-plus">+</button>
                <span>1</span>
                <button className="cart-minus">-</button>
              </div>
            </div>
          </div>
          <div className="cart-subtotal">
            <p>Subtotal</p>
            <h3>£28.00</h3>
          </div>
        </div>

        <div className="cart-footer">
          <button className="checkout-btn">Proceed to checkout</button>
          <button className="continue-shopping-btn">Continue shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
