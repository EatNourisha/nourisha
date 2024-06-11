import { useState } from "react";
import useSWR from "swr";
import { post, put, get } from "../utils/makeRequest";
import { showToast } from "../utils/toast";

const useLineUp = () => {
  const { data, error, mutate } = useSWR("lineups/me", get);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);


  const handleMealSelections = async (mealSelections) => {
    setIsLoading(true);
    try {
        if (data?.data?._id) {
          // If data.data._id exists, update the lineup
          const response = await put(`lineups/${data.data._id}`, mealSelections);
    
          if (response.data) {
            showToast({
              title: "Updated Lineup",
              description: "Lineup updated successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });

            return response.data
          }
        } else {
          // If data.data._id does not exist, create a new lineup
          const response = await post(`lineups`, mealSelections);
    
          if (response.data) {
            showToast({
              title: "Created Lineup",
              description: "Lineup created successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });

            return response.data
          }
        }
        setIsLoading(false);
      } catch (error) {
        setRequestError(error);
        setIsLoading(false);
        showToast({
          title: "Meal Selection",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
  }

//   const createLineUp = async (mealSelections) => {
//     setIsLoading(true);

//     try {
//       const response = await post(`lineups`, mealSelections);

//       if (response.data) {
//         mutate((currentData) => {
//           return { ...currentData, ...response.data };
//         }, false);
//         // showToast({
//         //   title: "Remove from Cart",
//         //   description: "Item removed from cart successfully.",
//         //   status: "success",
//         //   duration: 5000,
//         //   isClosable: true,
//         // })
//       }
//       setIsLoading(false);
//     } catch (error) {
//       setRequestError(error);
//       setIsLoading(false);
//       showToast({
//         title: "Meal Selection",
//         description: error.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const updateLineUp = async (plan_id, mealSelections) => {
//     setIsLoading(true);

//     try {
//       const response = await put(`lineups/${plan_id}`, mealSelections);

//       if (response.data) {
//         mutate((currentData) => {
//           return { ...currentData, ...response.data };
//         }, false);
//         // showToast({
//         //   title: "Remove from Cart",
//         //   description: "Item removed from cart successfully.",
//         //   status: "success",
//         //   duration: 5000,
//         //   isClosable: true,
//         // })
//       }
//       setIsLoading(false);
//     } catch (error) {
//       setRequestError(error);
//       setIsLoading(false);
//       showToast({
//         title: "Meal Selection",
//         description: error.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

  return {
    data: data?.data || [],
    isLoading: isLoading || (!error && !data),
    error: requestError || error,
    handleMealSelections,
    // createLineUp,
    // updateLineUp
  };
};

export default useLineUp;
