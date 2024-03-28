import useSWR from 'swr';
import { post } from '../utils/makeRequest';
import { useState } from 'react';

const usePlaceOrder = () => {
  const { data, error, mutate } = useSWR('orders/', post);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);

  const placeOrder = async (placeOrderItem) => {
    setIsLoading(true)
    try {
        const response = await post(`orders/`, placeOrderItem);
        if (response.data) {
            mutate((currentData) => {
                return { ...currentData, ...response.data };   
            }, false)
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
    placeOrder,
    
  };
};

export default usePlaceOrder;
