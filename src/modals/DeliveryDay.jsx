import React, { useEffect, useState } from "react";

const DeliveryDay = ({ onEnableSubmit, handleDeliveryChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  // const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const savedOption = localStorage.getItem("selectedDeliveryDay");
    if (savedOption) {
      setSelectedOption(savedOption);
      onEnableSubmit(true);
      handleDeliveryChange(savedOption);
    }
  }, []);

  const handleOnchangeDay = (event) => {
    const newValue = event.target.value
    setSelectedOption(newValue);
    localStorage.setItem("selectedDeliveryDay", newValue);
    onEnableSubmit(true)
    handleDeliveryChange(newValue)
  }
  

  return (
    <div>
      <div className="flex flex-col">
        <p className="text-[18px] font-semibold text-[#303237] ">
          Delivery Day
        </p>
        <p className="text-[14px] mt-2 text-[#7E8494] ">
          Choose the day of the week you want your meal delivered
        </p>
      </div>

      <form
        // onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md mt-4 mb-4"
      >
        <div className="mb-4 border border-solid border-[#BDC0CE] rounded-lg p-4 shadow-md">
          <label className="flex justify-between items-center">
            <span className="ml-2 text-[#303237] text-[16px] ">Sunday</span>
            <input
              type="radio"
              name="option"
              value="sunday"
              checked={selectedOption === "sunday"}
              onChange={handleOnchangeDay}
              className="form-radio h-5 w-5 text-blue-600"
            />
          </label>
        </div>
        <div className="mb-4 border border-solid border-[#BDC0CE] rounded-lg p-4 shadow-md">
          <label className="flex justify-between items-center">
            <span className="ml-2 text-[#303237] text-[16px] ">Monday</span>
            <input
              type="radio"
              name="option"
              value="monday"
              checked={selectedOption === "monday"}
              onChange={handleOnchangeDay}
              className="form-radio h-5 w-5 text-blue-600"
            />
          </label>
        </div>
        <div className="mb-4 border border-solid border-[#BDC0CE] rounded-lg p-4 shadow-md">
          <label className="flex justify-between items-center">
            <span className="ml-2 text-[#303237] text-[16px] ">Tuesday</span>
            <input
              type="radio"
              name="option"
              value="tuesday"
              checked={selectedOption === "tuesday"}
              onChange={handleOnchangeDay}
              className="form-radio h-5 w-5 text-blue-600"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default DeliveryDay;
