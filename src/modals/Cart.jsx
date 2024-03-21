import React from 'react';
import './cart.css';

const Cart = ({ onClose }) => {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-btn" onClick={onClose}>x</button>
        </div>
        <div className="cart-items">
          {/* Render your cart items here */}
          {/* Example: */}
          <div className="cart-item">
            {/* <img src="item-image.jpg" alt="Item" /> */}
            <div className="item-details">
              <h3>Item Name</h3>
              <p>Price: $10</p>
              <p>Quantity: 2</p>
            </div>
          </div>
        </div>
        <div className="cart-footer">
          <button className="checkout-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
