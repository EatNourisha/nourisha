import useSWR from 'swr';
import { get, put } from '../utils/makeRequest';
import { useState } from 'react';
import { showToast } from "../utils/toast";

const useSubscription = () => {
  const { data, error, mutate } = useSWR('subscriptions/me', get);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);


  const cancelSubscription = async (plan_id) => {
    setIsLoading(true)
    try {
        const response = await put(`subscriptions/cancel`, plan_id);
        if (response.data) {
            mutate((currentData) => {
                return { ...currentData, ...response.data };   
            }, true)

            showToast({
                title: "Subscription",
                description: "Subscription Cancelled.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            return response.data
        } 
        setIsLoading(false); 
    } catch (error) {
        setRequestError(error);
        showToast({
            title: "Subscription",
            description: 'No active subscription',
            status: "error",
            duration: 5000,
            isClosable: true,
        })
        setIsLoading(false);
    }
  };

  return {
    data: data?.data || [],
    isLoading: isLoading || !error && !data,
    error: requestError || error,
    cancelSubscription,
    
  };
};

export default useSubscription;
