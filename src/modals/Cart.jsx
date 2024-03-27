import React, { useState } from "react";
import "./cart.css";
import useGetCart from "../hooks/useGetCart";
import useDelCart from "../hooks/useDelCart";

const Cart = ({ onClose, onProceedToCheckout }) => {
  const { data, loading, error } = useGetCart();
  const { removeItemToCart } = useDelCart();

  const subtotal = data?.items?.data.reduce(
    (acc, item) => acc + item.item.price.amount * item.quantity,
    0
  );
  const handleRemoveFromCart = async (cartItem) => {
    const itemData = {
      itemId: cartItem.item._id,
      quantity: 1,
    };

    try {
      await removeItemToCart(itemData);
      alert("Item removed from cart!");
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>
        {loading && <p>Loading cart...</p>}
        {error && <p>Error loading cart: {error.message}</p>}
        <div className="cart-items">
          {data?.items?.data.map((cartItem) => (
            <div key={cartItem._id} className="cart-item">
              <div className="cart-top1">
                <img src={cartItem.item.image_url} alt={cartItem.item.name} />
                <div className="cart-name-price">
                  <h3>{cartItem.item.name}</h3>
                  <p>£{cartItem.item.price.amount}</p>
                </div>
              </div>
              <div className="item-details">
                <p onClick={() => handleRemoveFromCart(cartItem)}>Remove</p>
                <div className="cart-plus-minus-container">
                  <button className="cart-plus">+</button>
                  <span>{cartItem.quantity}</span>
                  <button className="cart-minus">-</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-subtotal">
            <p>Subtotal</p>
            <h3>£{subtotal}</h3>
          </div>
        </div>
        <div className="cart-footer">
          <button className="checkout-btn" onClick={onProceedToCheckout}>
            Proceed to checkout
          </button>
          <button className="continue-shopping-btn" onClick={onClose}>
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
