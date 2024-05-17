import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./cart.css";
import useCart from "../hooks/useCart";
import cartStore from "../stores/cartStore";

const Cart = ({ onClose, onProceedToCheckout }) => {
  const [cartItems, setCartItems] = useState([]);
  const { data, isLoading, error } = useCart();
  const [uiLoading, setUiLoading] = useState(null)
  const { increaseQuantityOnServer, decreaseQuantityOnServer, removeItemToCartOnServer } = useCart();
  const { removeFromCart, increaseQuantity, decreaseQuantity, setTotalItemCount} = cartStore();

  const subtotal = data?.items?.data.reduce((acc, item) => {
    const priceAmount = item?.item?.price?.amount || 0;
    return acc + priceAmount * (item.quantity || 0);
  }, 0);


  useEffect(() => {
    if (!data) return;
    const { items } = data;
    const { data: itemData } = items;
    setCartItems(itemData);
    setTotalItemCount(items.totalCount);
  }, [data]);

  const increaseQuantityitem = async (cartItem) => {
    
    const itemData = {
      itemId: cartItem.item._id,
      quantity: 1,
    };
    
    try {
      setUiLoading(cartItem.item._id)

      const res = await increaseQuantityOnServer(itemData);
      if (res?.data?._id) increaseQuantity(itemData);

      setTimeout(() => {
        setUiLoading(null)
      }, 700);

    } catch (error) {
      console.log(error, "error in increasing quantity");
      setUiLoading(null)
    }
  };

  const removeQuantity = async (cartItem) => {
    const itemData = {
      itemId: cartItem.item._id,
      quantity: 1,
    };

    try {
      setUiLoading(cartItem.item._id)

      if (cartItem.quantity > 1) {
        const res = await decreaseQuantityOnServer(itemData);
        if (res?.data?._id) decreaseQuantity(itemData);

        setTimeout(() => {
          setUiLoading(null)
        }, 700);
      }
    } catch (error) {
      console.log(error, "error in decreasing quantity");
    }
  };

  const removeItemFromCart = async (cartItem) => {
    const itemData = {
      itemId: cartItem.item._id,
      quantity: cartItem.quantity,
    };

    try {
      const res = await removeItemToCartOnServer(itemData);
      if (res?.data?._id) removeFromCart(itemData);
    } catch (error) {
      console.log(error, "error in increasing quantity");
    }
  };

  // if (uiLoading) return <p>uiLoading cart...</p>;
  // if (error) return <p>Error uiLoading cart: {error.message}</p>;
  // if (!data?.items?.data.length) return <p>Your cart is empty.</p>; // This line checks for empty cart

  return (
    <div className="cart-modal overflow-x-hidden">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-btn select-none" onClick={onClose}>
            x
          </button>
        </div>
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <div key={cartItem._id} className="cart-item">
              <div className="cart-top1">
                <img src={cartItem.item?.image_url} alt={cartItem.item?.name} />
                <div className="cart-name-price">
                  <h3>{cartItem.item?.name}</h3>
                  <p>£{cartItem.item?.price?.amount}</p>
                </div>
              </div>
              <div className="item-details">
                <p onClick={() => removeItemFromCart(cartItem)}>Remove</p>

                <div className="flex justify-between border  border-[#EDEDF3] p-2 gap-2  py-1 bg-white shadow-md rounded-3xl select-none">
                  <button
                    className="border border-solid border-[#030517] text-[#030517] px-2 rounded-full select-none"
                    onClick={() => removeQuantity(cartItem)}
                    disabled={cartItem.quantity === 1}
                  >
                    -
                  </button>

                  {uiLoading === cartItem.item._id ? (
                    <span className="flex items-center px-[6px] ">
                      <Icon icon="gg:spinner" className="animate-spin h-4 w-4 text-orange-500" />
                    </span>
                  ) : (
                    <span className="border-x-2 border-[#EDEDF3] px-2 text-[14px] select none">
                      {cartItem.quantity}
                    </span>
                  )}

                  <button
                    className="border bordr-solid border-[#030517]  text-[#030517] px-[6px] rounded-full select-none "
                    onClick={() => increaseQuantityitem(cartItem)}
                  >
                    +
                  </button>
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

