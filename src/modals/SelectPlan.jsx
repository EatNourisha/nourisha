import React, { useState } from "react";
import SubscriptionPlan from "./SubscriptionPlan";
import DeliveryAddress from "./DeliveryAddress";
import PlanPayment from "./PlanPayment";
import SelectMeal from "./SelectMeal";
import DeliveryDay from "./DeliveryDay";

const SelectPlan = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

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

  const renderModalContent = () => {
    switch (step) {
      case 1:
        return <div><SubscriptionPlan /></div>;
      case 2:
        return <div><DeliveryAddress /></div>;
      case 3:
        return <div><PlanPayment /></div>;
      case 4:
        return <div><SelectMeal /></div>;
      case 5:
        return <div><DeliveryDay /></div>;
      default:
        return null;
    }
  };

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
            <p className="text-[20px] text-[#303237] font-bold -mt-5 "></p>
            <button
              className="close-btn select-none mb-3 -mt-3"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <div className="px-4 py-2">
            {renderStepIndicator()}
            <div className="mt-4">{renderModalContent()}</div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={handlePrev}
              disabled={step === 1}
              className={`mx-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg ${
                step === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={step === totalSteps}
              className={`mx-4 py-2 text-[16px] font-semibold text-white bg-[#FE7E00] rounded-lg ${
                step === totalSteps ? "opacity-50 cursor-not-allowed " : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
