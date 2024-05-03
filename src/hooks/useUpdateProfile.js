import React from 'react';
import useSWR from 'swr';
import { put, get } from '../utils/makeRequest';
import { showToast } from "../utils/toast";


const useUpdateProfile = () => {
  const { data, error, mutate } = useSWR('customers/me', get);
  const [isLoading, setIsLoading] = React.useState(false);
  const [requestError, setRequestError] = React.useState(null);

  const update = async (updateDate) => {
    setIsLoading(true);
    try {
      const response = await put(`customers/me`, updateDate);
      if (response.data) {
        mutate((currentData) => {
          return { ...currentData, ...response.data };
        }, false);
        showToast({
          title: "Update Profile",
          description: "Profile updated successfully.",
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
    isLoading: isLoading || !error && !data,
    error: requestError || error,
    update,
  }
}

export default useUpdateProfile;