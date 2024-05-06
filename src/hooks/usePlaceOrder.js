import useSWR from 'swr';
import { post, get } from '../utils/makeRequest';
import { useState } from 'react';
import { showToast } from "../utils/toast";

const usePlaceOrder = () => {
  const { data, error, mutate } = useSWR('orders/', get);
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
            showToast({
                title: "Place Order",
                description: "Order placed successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        } 
        setIsLoading(false); 
    } catch (error) {
        setRequestError(error);
        setIsLoading(false);
    }
  };

  return {
    data: data?.data?.data || [],
    isLoading: isLoading || !error && !data,
    error: requestError || error,
    placeOrder,
    
  };
};

export default usePlaceOrder;
