import { useState } from "react";
import useSWR from "swr";
import { destroy, get, put } from "../utils/makeRequest";
import { showToast } from "../utils/toast";


const useCart = () => {

  const { data, error, mutate } = useSWR("cart/", get);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);
  

  const addItemToCartOnServer = async (itemData) => {
    setIsLoading(true);
    try {
      const response = await put("cart/", itemData);

      if (response.data) {
        mutate((currentData) => {
          return { ...currentData, ...response.data };
        }, true);
        showToast({
          title: "Add to Cart",
          description: "Item added to cart successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      setIsLoading(false);
    } catch (error) {
      setRequestError(error);
      setIsLoading(false);
    }
  };

  const increaseQuantityOnServer = async (itemData) => {
    try {
      setIsLoading(true);
      const response = await put("cart/", itemData);

      if (response.data) {
        mutate((currentData) => {
          return { ...currentData, ...response.data };
        }, true);
      }
      setIsLoading(false);
    } catch (error) {
      setRequestError(error);
      setIsLoading(false);
    }
  };

  const decreaseQuantityOnServer = async (itemData) => {
    try {
      setIsLoading(true);
      const response = await destroy("cart/", itemData);

      if (response.data) {
        mutate((currentData) => {
          return { ...currentData, ...response.data };
        }, true);
      }
      setIsLoading(false);
    } catch (error) {
      setRequestError(error);
      setIsLoading(false);
    }
  };

  const removeItemToCartOnServer = async (itemData) => {
    setIsLoading(true);
    try {
      const response = await destroy(`cart/`, itemData);

      if (response.data) {
        mutate((currentData) => {
          return { ...currentData, ...response.data };
        }, true);
        showToast({
          title: "Remove from Cart",
          description: "Item removed from cart successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      setIsLoading(false);
    } catch (error) {
      setRequestError(error);
      setIsLoading(false);
    }
  };

  return {
    data: data?.data || [],
    isLoading: isLoading || (!error && !data),
    error: requestError || error,
    addItemToCartOnServer,
    increaseQuantityOnServer,
    decreaseQuantityOnServer,
    removeItemToCartOnServer,
  };
};

export default useCart;




// import { useState } from 'react';
// import useSWR from 'swr';
// import { destroy, put } from  '../utils/makeRequest';
// import { showToast } from "../utils/toast";

// const useCart = () => {
//   const { data, error, mutate } = useSWR('cart/', put);
//   const [isLoading, setIsLoading] = useState(false);
//   const [requestError, setRequestError] = useState(null);

//   const addItemToCart = async (itemData) => {
//     setIsLoading(true);
//     try {

//       const response = await put(`cart`, itemData);

//       if (response.data) {

//         mutate((currentData) => {
//           return { ...currentData, ...response.data };
//         }, false);
//         showToast({
//           title: "Add to Cart",
//           description: "Item added to cart successfully.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//         })
//       }
//       setIsLoading(false);
//     } catch (error) {
//       setRequestError(error);
//       setIsLoading(false);
//     }
//   };

//   const removeItemToCart = async (itemData) => {
//     setIsLoading(true);
//     try {

//       const response = await destroy(`cart/`, itemData);

//       if (response.data) {

//         mutate((currentData) => {
//           return { ...currentData, ...response.data };
//         }, false);
//       }
//       setIsLoading(false);
//     } catch (error) {
//       setRequestError(error);
//       setIsLoading(false);
//     }
//   };

//   return {
//     data: data?.data || [],
//     isLoading: isLoading || !error && !data,
//     error: requestError || error,
//     addItemToCart,
//     removeItemToCart,
//   };
// };

// export default useCart;
