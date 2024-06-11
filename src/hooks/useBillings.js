import useSWR from 'swr';
import { post, get } from '../utils/makeRequest';
import { showToast } from "../utils/toast";
import { useState } from 'react';

const useBillings = () => {
//   const { data, error, mutate } = useSWR('billings/', get);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);

  const subscribe = async (subscribePlan) => {
    setIsLoading(true)
    try {
        const response = await post(`billings/subscribe`, subscribePlan);
        if (response.data) {
          // console.log(response.data)
            // mutate((currentData) => {
            //     return { ...currentData, ...response.data };   
            // }, false)

            return response.data
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
    // data: data?.data?.data || [],
    // isLoading: isLoading || !error && !data,
    // error: requestError || error,
    subscribe,
  };
};

export default useBillings;
