import { useState } from 'react';
import useSWR from 'swr';
import { destroy } from  '../utils/makeRequest';

const useDelCart = () => {
  const { data, error, mutate } = useSWR('cart', destroy);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);

  const removeItemToCart = async (itemData) => {
    setIsLoading(true);
    try {
     
      const response = await destroy(`cart/`, itemData);
     
      if (response.data) {
      
        mutate((currentData) => {
          return { ...currentData, ...response.data };
        }, false); 
      }
      setIsLoading(false);
    } catch (error) {
      setRequestError(error);
      setIsLoading(false);
    }
  };

  return {
    data: data?.data || [],
    isLoading: isLoading || !error && !data,
    error: requestError || error,
    removeItemToCart,
  };
};

export default useDelCart;
