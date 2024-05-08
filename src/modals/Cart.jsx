import React, { useEffect, useState } from "react";
import "./cart.css";
import useGetCart from "../hooks/useGetCart";
import useDelCart from "../hooks/useDelCart";
import useCart from "../hooks/useCart";
import useAuthStore from "../stores/auth";



const Cart = ({ onClose, onProceedToCheckout }) => {
  const { data, loading, error } = useGetCart();
  const { removeItemToCart } = useDelCart();
  const { addItemToCart } = useCart();
  const [cartItems, setCartItems] = useState([]);
  const { count, setCount } = useAuthStore();




  useEffect(() => {
    setCartItems(data?.items?.data);
  }, [data?.items?.data]);


  const subtotal = cartItems?.reduce((acc, item) => {
    const priceAmount = item?.item?.price?.amount || 0;
    return acc + priceAmount * (item.quantity || 0);
  }, 0);


  const increaseQuantity = async (cartItem) => {
    const itemData = {
      itemId: cartItem.item._id,
      quantity: cartItem.quantity += 1,
    };

    try{
      const response = await addItemToCart(itemData);
      
      // Update the local state with the new quantity
      const updatedCartItems = cartItems.map(item => {
        if (item._id === cartItem._id) {
          return {
            ...item,
            quantity: itemData.quantity
          };
        }
        return item;
      });
      
      // Set the local state with the updated items
      setCartItems(updatedCartItems);
      
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const response = await addItemToCart(itemData);
    //   cartItem.quantity = itemData.quantity;
    //   console.log(response);
    // } 
    
  };

  const removeQuantity = async (cartItem) => {
    console.log("cartItem coming from DecreaseQuantity", cartItem);

    const itemData = {
      itemId: cartItem.item._id,
      quantity: (cartItem.quantity -= 1),
    };

    console.log(
      cartItems.filter((item) => item._id !== cartItem._id),
      "HandleRemoveFromCart"
    );

    try {
      if (cartItem.quantity <= 0) {
        // If quantity becomes zero or less, remove the item from the cart
        await handleRemoveFromCart(cartItem);
        return;
      } else {
        const response = await removeItemToCart(itemData);

        // Update the quantity locally after the server request succeeds
        cartItem.quantity = itemData.quantity;
        setCartItems([...cartItems]); // Trigger re-render
        console.log("response from decrease", response);

      }
      // const response = await removeItemToCart(itemData);
    } catch (error) {
      console.log(error);
    }
  };


  const handleRemoveFromCart = async (cartItem) => {
    // console.log(cartItem._id)

    const itemData = {
      itemId: cartItem.item._id,
      quantity: 1,
    };

    try {
      const res = await removeItemToCart(itemData);
      setCartItems(cartItems.filter((item) => item._id !== cartItem._id));
      setCount(count - 1)
      console.log(res)
    } catch (error) {
      // console.log(error.message);
      console.error("Failed to remove item from cart", error);
    }
  };


 

  



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
          {cartItems?.map((cartItem) => (
            <div key={cartItem._id} className="cart-item">
              <div className="cart-top1">
                <img src={cartItem.item?.image_url} alt={cartItem.item?.name} />
                <div className="cart-name-price">
                  <h3>{cartItem.item?.name}</h3>
                  <p>£{cartItem.item?.price?.amount}</p>
                </div>
              </div>
              <div className="item-details">
                <p onClick={() => handleRemoveFromCart(cartItem)}>Remove</p>
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
                    onClick={() => increaseQuantity(cartItem)}
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
