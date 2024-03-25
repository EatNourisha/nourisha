import useSWR, { mutate } from "swr";
import { put } from "../utils/makeRequest";

const useCart = () => {
  const { data, error } = useSWR(`cart/`, put);

  
  const addToCart = async (mealId) => {
    try {
      await put(`cart`, { itemId: mealId, quantity: 1 }); 
      mutate("cart/");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw error; 
    }
  };

  return {
    data: data?.data || [],
    isLoading: !error && !data,
    error,
    addToCart, 
  };
};

export default useCart;
