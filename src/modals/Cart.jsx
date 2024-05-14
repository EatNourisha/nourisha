import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./cart.css";
import useGetCart from "../hooks/useGetCart";
import useCart from "../hooks/useCart";
import cartStore from '../stores/cartStore';



const Cart = ({ onClose, onProceedToCheckout }) => {
  const [cartItems, setCartItems] = useState([])
  const { data, loading, error } = useCart();
  const { increaseQuantityOnServer, decreaseQuantityOnServer, removeItemToCartOnServer } = useCart()
  const { removeFromCart, increaseQuantity, decreaseQuantity, cart, getTotalItemCount } = cartStore()


  const subtotal = data?.items?.data.reduce((acc, item) => {
    const priceAmount = item?.item?.price?.amount || 0;
    return acc + priceAmount * (item.quantity || 0);
  }, 0);

  
  useEffect(() => {
    if(!data) return
    const { items } = data;
    const {data: itemData} = items 
    setCartItems(itemData)
    getTotalItemCount(items.totalCount)
  }, [data])


  const increaseQuantityitem = async (cartItem) => {
    const itemData = {
      itemId: cartItem.item._id,
      quantity: cartItem.quantity + 1,
    }

    try {
      const res =  await increaseQuantityOnServer(itemData)
      if(res?.data?._id) increaseQuantity(itemData)
     
    } catch (error) {
      console.log(error, "error in increasing quantity")
    }
  }


  const removeQuantity = async (cartItem) => {
    const itemData = {
          itemId: cartItem.item._id,
          quantity: cartItem.quantity - 1,
    };

    try {
      if(cartItem.quantity === 1){
        const res = await removeItemToCartOnServer(cartItem)
        if(res?.data?._id) decreaseQuantity(itemData)
      }
    } catch (error) {
      console.log(error, "error in decreasing quantity")
    }
  }


  const removeItemFromCart = async (cartItem) => {
    const itemData = {
          itemId: cartItem.item._id,
          quantity: cartItem.quantity,
    };


    try {
      const res = await removeItemToCartOnServer(itemData)
      if(res?.data?._id) removeFromCart(itemData)

    } catch (error) {
      console.log(error, "error in increasing quantity")
    }
  }  



  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>Error loading cart: {error.message}</p>;
  if (!data?.items?.data.length) return <p>Your cart is empty.</p>; // This line checks for empty cart

 

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
                {loading ? (
                    <span className="flex items-center px-3">
                      <Icon icon="gg:spinner" className="animate-spin h-6 w-6" />
                    </span>
                  ) : (
                    <div className="cart-plus-minus-container">
                    <button
                      className="cart-minus"
                      onClick={() => removeQuantity(cartItem)}
                    >
                      -
                      
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      className="cart-plus"
                      onClick={() => increaseQuantityitem(cartItem)}
                    >
                      +
                    </button>
                  </div>
                  )}
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

// import React, { useState } from "react";
// import "./cart.css";
// import useGetCart from "../hooks/useGetCart";
// import useDelCart from "../hooks/useDelCart";

// const Cart = ({ onClose, onProceedToCheckout }) => {
//   const { data, loading, error } = useGetCart();
//   const { removeItemToCart } = useDelCart();

//   const subtotal = data?.items?.data.reduce(
//     (acc, item) => {
//       // Ensure item.item exists and has a price before accessing price.amount
//       const priceAmount = item?.item?.price?.amount || 0;
//       return acc + priceAmount * (item.quantity || 0);
//     },
//     0
//   );

//   const handleRemoveFromCart = async (cartItem) => {
//     const itemData = {
//       itemId: cartItem.item._id,
//       quantity: 1,
//     };

//     try {
//       await removeItemToCart(itemData);
//       alert("Item removed from cart!");
//     } catch (error) {
//       console.error("Failed to add item to cart", error);
//     }
//   };

//   return (
//     <div className="cart-modal">
//       <div className="cart-content">
//         <div className="cart-header">
//           <h2>Cart</h2>
//           <button className="close-btn" onClick={onClose}>
//             x
//           </button>
//         </div>
//         {loading && <p>Loading cart...</p>}
//         {error && <p>Error loading cart: {error.message}</p>}
//         <div className="cart-items">
//           {data?.items?.data.map((cartItem) => (
//             <div key={cartItem._id} className="cart-item">
//               <div className="cart-top1">
//               <img src={cartItem.item?.image_url} alt={cartItem.item?.name} />
//                 <div className="cart-name-price">
//                   <h3>{cartItem.item?.name}</h3>
//                   <p>£{cartItem.item?.price.amount}</p>
//                 </div>
//               </div>
//               <div className="item-details">
//                 <p onClick={() => handleRemoveFromCart(cartItem)}>Remove</p>
//                 <div className="cart-plus-minus-container">
//                   <button className="cart-plus">+</button>
//                   <span>{cartItem.quantity}</span>
//                   <button className="cart-minus">-</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="cart-subtotal">
//             <p>Subtotal</p>
//             <h3>£{subtotal}</h3>
//           </div>
//         </div>
//         <div className="cart-footer">
//           <button className="checkout-btn" onClick={onProceedToCheckout}>
//             Proceed to checkout
//           </button>
//           <button className="continue-shopping-btn" onClick={onClose}>
//             Continue shopping
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
