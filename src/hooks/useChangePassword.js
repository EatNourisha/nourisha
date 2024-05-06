import React from 'react';
import { put } from '../utils/makeRequest';
import { showToast } from "../utils/toast";


const useChangePassword = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [requestError, setRequestError] = React.useState(null);

  const changePassword = async (passwordData) => {
    setIsLoading(true);
    try {
      const response = await put(`customers/password`, passwordData);
      console.log(response, "res")

      if (response.status === 'success') {
        showToast({
          title: "Change Password",
          description: "Change password successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        showToast({
            title: "Change Password",
            description: response.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
      }
      setIsLoading(false);
    } catch (error) {
      setRequestError(error);
      setIsLoading(false);
      showToast({
        title: "Change Password",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return {
    isLoading: isLoading,
    error: requestError,
    changePassword,
  }
}

export default useChangePassword;