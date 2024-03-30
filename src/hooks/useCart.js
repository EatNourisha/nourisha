import { useState } from 'react';
import useSWR from 'swr';
import { put } from '../utils/makeRequest';
import { destroy } from  '../utils/makeRequest';

const useCart = () => {
  const { data, error, mutate } = useSWR('cart/', put);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);

  const addItemToCart = async (itemData) => {
    setIsLoading(true);
    try {
     
      const response = await put(`cart`, itemData);
     
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
    addItemToCart,
    removeItemToCart,
  };
};

export default useCart;
