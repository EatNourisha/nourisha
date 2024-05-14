import React, { useState } from "react";
import useSWR from "swr";
import { post, get } from "../utils/makeRequest";
import { showToast } from "../utils/toast";

const useEarnings = () => {
  const { data, error, mutate } = useSWR("earnings", get, {
    onSuccess: (data) => {
        localStorage.setItem("earningsData", JSON.stringify(data.data.balance));
      },
  } );
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = React.useState(null);
  

  const withdraw = async (withdrawalData) => {
    setIsLoading(true);
    try {
      const response = await post(`/earnings/withdraw`, withdrawalData);
      if (response.data) {
        mutate((currentData) => {
          return { ...currentData, ...response.data };
        }, false);
        showToast({
          title: "Withdraw",
          description: "Withraw successful",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      setIsLoading(false);
    } catch (error) {
      setRequestError(error);
      showToast({
        title: "Withdraw",
        description: "Insufficient balance",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };
  return {
    data: data?.data || [],
    isLoading: isLoading || (!error && !data),
    error: requestError || error,
    withdraw,
  };
};

export default useEarnings;
