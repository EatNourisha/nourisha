import React, { useEffect, useState } from "react";

const DeliveryDay = ({ onEnableSubmit, handleDeliveryChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [errorMessage,setErrorMessage] = useState("")
  // const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    // const savedOption = localStorage.getItem("selectedDeliveryDate");
    // if (savedOption) {
      // setSelectedOption(savedOption);
      onEnableSubmit(false);
      // handleDeliveryChange(savedOption);
    // }
  }, []);

  const handleOnchangeDate = (event) => {
    const newValue = event.target.value;
    setDeliveryDate(event.target.value)
    setSelectedOption(newValue);
    // localStorage.setItem("selectedDeliveryDate", newValue);
    onEnableSubmit(true);
    handleDeliveryChange(newValue);
  };

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = (tomorrow.getMonth() + 1).toString().padStart(2, "0");
    const day = tomorrow.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const validateDateInput = (e) => {
    
    const inputDate = e.target.value;
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Regex to match YYYY-MM-DD format
    if (!datePattern.test(inputDate)) {
      setErrorMessage("Please enter a valid date in the format.");
      setDeliveryDate("");
    } else {
      const enteredDate = new Date(inputDate);
      const tomorrowDate = new Date(getTomorrowDate());
      if (enteredDate < tomorrowDate) {
        setErrorMessage(
          "Please select a date that is at least one day in the future."
        );
        setDeliveryDate("");
      } else {
        setErrorMessage(""); // Clear error message
        setDeliveryDate(inputDate);
      }
    }
  };



  return (
    <div>
      <div className="flex flex-col">
        <p className="text-[18px] font-semibold text-[#303237] ">
          Delivery date
        </p>
        <p className="text-[14px] mt-2 text-[#7E8494] ">
          Choose the date you want your meal delivered
        </p>
      </div>

      <form
        // onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md mt-4 mb-4"
      >
        <div className="">
          {/* <label className="mr-3 block select-none">Delivery Date</label> */}
          <input
                          type="date"
                          placeholder="Select Delivery Date"
                          value={deliveryDate}
                          // onChange={(e) => setDeliveryDate(e.target.value)}
                          onChange={handleOnchangeDate}
                          onBlur={validateDateInput} // Validate on blur
                          min={getTomorrowDate()}
                          // filterDate={isDayDisabled}
                          className="w-full lg:w-[180px] p-2 xl:w-[205px] select-none"
                        />
          {errorMessage && (
            <div className="text-red-400 text-[14px]">{errorMessage}</div>
          )}
        </div>

        {/* <div className="mb-4 border border-solid border-[#BDC0CE] rounded-lg p-4 shadow-md">
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
        </div> */}
      </form>
    </div>
  );
};

export default DeliveryDay;
