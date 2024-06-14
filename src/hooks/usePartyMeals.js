import useSWR from 'swr';
import { post, get } from '../utils/makeRequest';
import { useState } from 'react';
import { showToast } from "../utils/toast";

const usePartyMeals = () => {
  const { data, error, mutate } = useSWR('meals/parties/', get);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);

  const partyPlan = async (partyMeals) => {
    setIsLoading(true)
    try {
        const response = await post(`meals/parties/`, partyMeals);
        if (response.data) {
            mutate((currentData) => {
                return { ...currentData, ...response.data };   
            }, false)

            showToast({
                title: "Party Plan",
                description: "Submitted successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        } 
        setIsLoading(false); 
    } catch (error) {
        setRequestError(error);
        showToast({
            title: "Party Plan",
            description: error.message,
            status: "error",
            duration: 5000,
            isClosable: true,
        })
        setIsLoading(false);
    }
  };

  return {
    data: data?.data?.data || [],
    isLoading: isLoading || !error && !data,
    error: requestError || error,
    partyPlan,
    
  };
};

export default usePartyMeals;
