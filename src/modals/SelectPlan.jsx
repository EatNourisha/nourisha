import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionPlan from "./SubscriptionPlan";
import DeliveryAddress from "./DeliveryAddress";
import PlanPayment from "./PlanPayment";
import SelectMeal from "./SelectMeal";
import DeliveryDay from "./DeliveryDay";
import back from "../assets/back.png";
import DeliveryDayInformation from "./DeliveryDayInformation";

const SelectPlan = ({ onClose }) => {
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [deliveryDateData, setDeliveryDateData] = useState({});
  const [addressData, setAddressData] = useState({})
  const [selectedMealData, setSelectedMealData] = useState({})
  const [isAddressFormValid, setIsAddressFormValid] = useState(false);
  const [weekMealsSelected, setWeekMealsSelected] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 6;
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
    console.log("Submitting Plan Payment");
    handleNext();
  };



// For Address
  const handleAddressChange = (values) => {
    setAddressData(values)
  }

  const handleValidationStatus = (isValid) => {
    setIsAddressFormValid(isValid);
  };

  const handleSubmitDeliveryAddress = () => {
    // Handle Delivery Address submission

    if(isAddressFormValid) {
      console.log("Submitting Delivery Address", addressData);
      handleNext();
    }
  };



  // For Meal Selection
  const handleMealSelectionChange = (data) => {
    console.log(data, 'handleselectionChange')
    const mondayToFridaySelected = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].every(day =>
      Object.keys(data[day]?.Lunch && data[day]?.Lunch || {}).length > 0 // Check if any meal is selected for the day
    );
    setWeekMealsSelected(mondayToFridaySelected);
    setSelectedMealData(data)
  }

  const handleSubmitSelectMeal = () => {
    // Handle Select Meal submission
    if(weekMealsSelected) {
      console.log("Submitting Select Meal", selectedMealData);
      handleNext();
    }
  };



  // For Delivery Information
  const handleSubmitDeliveryDayInformation = () => {
    handleNext();
  };



  // For Delivery
  const handleDeliveryChange = (selectedValue) => {
    setDeliveryDateData(selectedValue)
  }

  const handleSubmitDeliveryDay = () => {
    // Handle Delivery Day submission
    console.log("Selected value:", deliveryDateData);
    localStorage.removeItem("selectedDeliveryDay");
    handleNext();
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
          content: <PlanPayment handleSkip={handleSkip} />,
          nextButtonText: "Place Order",
          submitFunction: handleSubmitPlanPayment,
        };
      case 3:
        return {
          content: <DeliveryAddress handleSkip={handleSkip} handleValidationStatus={handleValidationStatus} handleAddressChange={handleAddressChange} />,
          nextButtonText: "Next",
          submitFunction: handleSubmitDeliveryAddress,
        };
      case 4:
        return {
          content: <SelectMeal handleSkip={handleSkip} handleMealSelectionChange={handleMealSelectionChange} />,
          nextButtonText: "Next",
          submitFunction: handleSubmitSelectMeal,
        };
      case 5:
        return {
          content: <DeliveryDayInformation />,
          nextButtonText: "Select Delivery Day",
          submitFunction: handleSubmitDeliveryDayInformation,
        };
      case 6:
        return {
          content: <DeliveryDay onEnableSubmit={handleEnableSubmit} handleDeliveryChange={handleDeliveryChange} />,
          nextButtonText: "Submit",
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
                disabled={(step === totalSteps && !isSubmitEnabled) || (step === 3 && !isAddressFormValid) || (step === 4 && !weekMealsSelected) }
                className={`mx-4 mt-4 py-2 text-[16px] font-semibold text-white bg-[#FE7E00] rounded-lg select-none ${
                  (step === totalSteps && !isSubmitEnabled) || (step === 3 && !isAddressFormValid) || (step === 4 && !weekMealsSelected) ? "opacity-50 cursor-not-allowed " : ""
                }`}
              >
                {nextButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
