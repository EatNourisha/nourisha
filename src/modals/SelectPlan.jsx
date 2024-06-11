import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import useLineUp from "../hooks/useLineUp";

import SubscriptionPlan from "./SubscriptionPlan";
// import DeliveryAddress from "./DeliveryAddress";
import PlanPayment from "./PlanPayment";
import SelectMeal from "./SelectMeal";
import DeliveryDay from "./DeliveryDay";
import DeliveryDayInformation from "./DeliveryDayInformation";
import back from "../assets/back.png";
import chef from "../assets/chef.png"
import greenMark from "../assets/greenMark.png"
import successLogo from "../assets/successLogo.png"
// import { showToast } from "../utils/toast";



const SelectPlan = ({ onClose, initialStep = 1 }) => {
  const { handleMealSelections, data: lineupData} = useLineUp()

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState({});
  // const [addressData, setAddressData] = useState({})
  const [selectedMealData, setSelectedMealData] = useState({})
  // const [isAddressFormValid, setIsAddressFormValid] = useState(false);
  const [weekMealsSelected, setWeekMealsSelected] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [completedOrder ,setCompletedOrder] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const [step, setStep] = useState(initialStep);

  const totalSteps = 5;
  const navigate = useNavigate()

  

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSkip = () => {
    navigate('/dashboard')
  }

  const handleEnableSubmit = (enabled) => {
    setIsSubmitEnabled(enabled);
  };


  // For Subscription Plan
  const handleSubmitSubscriptionPlan = () => {
    handleNext();
  };



  // For Payment
  const handleSubmitPlanPayment = () => {
    // Handle Plan Payment submission
    if (paymentSuccess) {
      handleNext();
    }
  };



// For Address
  // const handleAddressChange = (values) => {
  //   setAddressData(values)
  // }

  // const handleValidationStatus = (isValid) => {
  //   setIsAddressFormValid(isValid);
  // };

  // const handleSubmitDeliveryAddress = () => {
  //   // Handle Delivery Address submission

  //   if(isAddressFormValid) {
  //     handleNext();
  //   }
  // };



  // For Meal Selection
  const handleMealSelectionChange = (data) => {
    const mondayToFridaySelected = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].every(day =>
      Object.keys(data[day]?.Lunch && data[day]?.Dinner || {}).length > 0 // Check if any meal is selected for the day
    );
    setWeekMealsSelected(mondayToFridaySelected);
    setSelectedMealData(data)
  }

  const handleSubmitSelectMeal = async() => {
    handleNext()
  };



  // For Delivery Information
  const handleSubmitDeliveryDayInformation = () => {
    handleNext();
  };



  // For Delivery
  const handleDeliveryChange = (selectedValue) => {
    setDeliveryDate(selectedValue)
  }

  const handleSubmitDeliveryDay = async() => {
    // Handle Delivery Day & Lineup mMeal submission
    const mealsLineup = {
      monday: {
        lunch: selectedMealData.Monday.Lunch._id,
        dinner: selectedMealData.Monday.Dinner._id
      },
      tuesday: {
        lunch: selectedMealData.Tuesday.Lunch._id,
        dinner: selectedMealData.Tuesday.Dinner._id,
      },
      wednesday: {
        lunch: selectedMealData.Wednesday.Lunch._id,
        dinner: selectedMealData.Wednesday.Dinner._id
      },
      thursday: {
        lunch: selectedMealData.Thursday.Lunch._id,
        dinner: selectedMealData.Thursday.Dinner._id
      },
      friday: {
        lunch: selectedMealData.Friday.Lunch._id,
        dinner: selectedMealData.Friday.Dinner._id,
      },
      saturday: {
        lunch: selectedMealData.Saturday.Lunch._id,
        dinner: selectedMealData.Saturday.Dinner._id,
      },
      sunday: {
        lunch: selectedMealData.Sunday.Lunch._id,
        dinner: selectedMealData.Sunday.Dinner._id,
      },
      delivery_date: deliveryDate
    }

    if(mealsLineup) {
      try {
        setIsLoading(true)
        const res = await handleMealSelections(mealsLineup)
        // handleNext();
        setCompletedOrder(true)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
  };


  const renderModalContent = () => {
    switch (step) {
      case 1:
        return {
          content: <SubscriptionPlan handleNext={handleNext} handleSkip={handleSkip} />,
          nextButtonText: "Next",
          submitFunction: handleSubmitSubscriptionPlan,
        };
      case 2:
        return {
          content: <PlanPayment handleSkip={handleSkip} onPaymentSuccess={() => { setPaymentSuccess(true); handleNext();}} />,
          nextButtonText: "Place Order",
          submitFunction: handleSubmitPlanPayment,
        };
      // case 3:
      //   return {
      //     content: <DeliveryAddress handleSkip={handleSkip} handleValidationStatus={handleValidationStatus} handleAddressChange={handleAddressChange} />,
      //     nextButtonText: "Next",
      //     submitFunction: handleSubmitDeliveryAddress,
      //   };
      case 3:
        return {
          content: <SelectMeal handleSkip={handleSkip} handleMealSelectionChange={handleMealSelectionChange} />,
          nextButtonText: `${!lineupData?._id ? "Next" : "Update"}`,
          submitFunction: handleSubmitSelectMeal,
        };
      case 4:
        return {
          content: <DeliveryDayInformation />,
          nextButtonText: "Select Delivery Day",
          submitFunction: handleSubmitDeliveryDayInformation,
        };
      case 5:
        return {
          content: <DeliveryDay onEnableSubmit={handleEnableSubmit} handleDeliveryChange={handleDeliveryChange} />,
          nextButtonText: isLoading ? <span className="flex justify-center items-center px-3">
                                        <Icon icon="gg:spinner" className="animate-spin h-6 w-6" />
                                      </span> : "Submit",
          submitFunction: handleSubmitDeliveryDay,
        };
      default:
        return { content: null, nextButtonText: "", submitFunction: null };
    }
  };


  

  const { content, nextButtonText, submitFunction  } = renderModalContent();

  const renderStepIndicator = () => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(
        <div
          key={i}
          className={`flex-1  ${
            i <= step ? "border-b-orange-500 " : "border-b-[#BDC0CE]"
          } ${
            i !== 1 ? "ml-1" : ""
          } flex items-center px-6 border-b-4 font-md text-[12px] rounded-md`}
        ></div>
      );
    }
    return <div className="flex">{steps}</div>;
  };

  return (
    <div>
      <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center z-[1000] ">
        <div className="bg-white p-[20px] w-[423px] h-[95vh] flex flex-col rounded-lg relative overflow-scroll overflow-x-hidden">
          <div className="flex justify-between items-center">
            <p
              className="text-[20px] text-[#303237] font-bold -mt-5 cursor-pointer "
              onClick={handlePrev}
            >
              <img src={back} alt="" width={25} />
            </p>
            <button
              className="close-btn select-none mb-3 -mt-3"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <div className="px-4 py-2">
            {renderStepIndicator()}
            <div className="mt-4">{content}</div>
          </div>

          <div className="flex flex-col gap-4">

            {step === 1 ? (
              ""
            ) : (
              <button
                onClick={submitFunction}
                // disabled={(step === totalSteps && !deliveryDate) || (step === 2 && !paymentSuccess) || (step === 3 && !isAddressFormValid) || (step === 4 && !weekMealsSelected) }
                disabled={(step === totalSteps && !isSubmitEnabled) || (step === 2 && !paymentSuccess) || (step === 3 && !weekMealsSelected) }
                // className={`mx-4 mt-4 py-2 text-[16px] font-semibold text-white bg-[#FE7E00] rounded-lg select-none ${
                //   (step === totalSteps && !isSubmitEnabled) || (step === 2 && !paymentSuccess) || (step === 3 && !isAddressFormValid) || (step === 4 && !weekMealsSelected) ? "opacity-50 cursor-not-allowed " : ""
                // }`}
                className={`mx-4 mt-4 py-2 text-[16px] font-semibold text-white bg-[#FE7E00] rounded-lg select-none ${
                  (step === totalSteps && !isSubmitEnabled) || (step === 2 && !paymentSuccess) || (step === 3 && !weekMealsSelected) ? "opacity-50 cursor-not-allowed " : ""
                }`}
              >
                
                  {nextButtonText}
              </button>
            )}
          </div>
        </div>
      </div>

      {completedOrder &&
        <div className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center z-[1000] ">
          <div className="relative w-full h-full rounded-lg  md:w-[425px] md:h-[570px] flex flex-col items-center bg-[#FE7E00] "> 
            <img src={successLogo} alt="" width={170} className="mt-5" />
            <img src={chef} alt="" width={250} className="mt-10" />

            <div className="relative bottom-5 bg-white w-[340px] h-[250px] flex flex-col items-center rounded-lg text-center">
              <img src={greenMark} alt="" width={35} className="mt-6" />
              <div className="mt-2">
                <p className="text-[16px] font-bold ">Your order is being processed</p>
                <p className="mt-2 text-[13px]">Our chefs will start making your order <br /> shortly</p>
              </div>

              <button className="p-2 w-72 mt-4 text-white bg-[#FE7E00] rounded-lg " onClick={handleSkip}>Go home</button>
            </div>

          </div>
        </div>
      }
    </div>
  );
};

export default SelectPlan;
