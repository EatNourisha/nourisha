import React, { useEffect, useState } from "react";
import { FaCcMastercard } from "react-icons/fa";
import back from "../assets/back.png";
import wallet from "../assets/wallet.png";
import BillingHistory from "./BillingHistory";
import useSubscription from "../hooks/useSubscription";
import SelectPlan from "./SelectPlan";

const SubscribeBilling = ({ goBack }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [rememberCard, setRememberCard] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState([])
  const [showPlanPayment, setShowPlanPayment] = useState(false)

  const {data, cancelSubscription} = useSubscription()

  const dateStr = subscriptionData?.next_billing_date
  const date = new Date(dateStr);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  useEffect(() => {
    setSubscriptionData(data)
  }, [data])


  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setRememberCard(e.target.checked);
  };

  const addCard = () => {
    setShowCard(!showCard);
  };

  const handleBillingHistory = () => {
    setShowHistory(true)
  }

  const handleCancelSubscription = async() => {
    try {
      const res = await cancelSubscription(subscriptionData.plan?._id)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubscription = () => {
    console.log("subscribe")
    setShowPlanPayment(true)
  }

  return (
    <div className="w-[400px] ">
      <div className="flex items-center space-x-6">
        {/* <img
          src={back}
          alt=""
          width={25}
          onClick={goBack}
          className="cursor-pointer"
        /> */}
        <h1>Billings</h1>
      </div>

      <div className="mt-4">
        <h2 className="text-[#7E8494] text-[14px] leading-[18px] font-normal"> {subscriptionData?.status === "cancelled" ? "Create a new subscription service" : "Active Subscription"} </h2>
        <div className="flex justify-between items-center">
          {subscriptionData?.status === "cancelled" ? (
            <p>No Active Subscription</p>
          ) : (
            <p>£{subscriptionData?.plan?.amount}</p>
          )}
          
          {subscriptionData?.status === "active" ? <button className="p-2 px-4 text-[14px] bg-red-500 text-white rounded-xl " onClick={handleCancelSubscription}>Cancel</button> : <button className="p-2 px-4 text-[14px] bg-red-500 text-white rounded-xl " onClick={handleSubscription}>Subscribe</button>} 
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <p className="text-[#7E8494] text-[14px] leading-[18px] font-normal ">
          Next Billing Amount
        </p>
        <p className="mt-2 text-[#303237] text-[15px] font-medium ">£{subscriptionData?.plan?.amount}</p>

        <hr className="my-4" />

        <p className="text-[#7E8494] text-[14px] leading-[18px] font-normal">
          Next Billing Date
        </p>
        <p className="mt-2 text-[#303237] text-[15px] font-medium ">
          {formattedDate}
        </p>

        <div className="mx-auto text-center mt-8 cursor-pointer" onClick={handleBillingHistory}>
          <p className="text-[#FE7E00] text-[15px] font-bold ">
            View Billing History
          </p>
        </div>
      </div>

      <div className="p-[#7E8494] mt-10">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[20px] text-[#303237] ">Cards</h1>
          <button
            className="outline outline-[#20AF0B] p-2 rounded-lg  text-[14px] text-[#20AF0B] "
            onClick={addCard}
          >
            Add Card
          </button>
        </div>
        <div className="mt-5 mb-3">
          <p>Tap a card to set it as your primary payment method</p>

          {!showCard ? (
            <div className="flex flex-col justify-center items-center mt-12">
              <img src={wallet} alt="wallet" />
              <h1 className="mt-5 mb-2">No card Added Yet</h1>
              <p>Complete your setup by adding your card</p>
            </div>
          ) : (
            <div className="flex flex-col items-start space-y-4 w-full max-w-md mt-8">
              <div className="relative w-full flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[##FE7E00]">
                <FaCcMastercard className="absolute left-3 text-gray-500" />{" "}
                {/* Mastercard icon */}
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  className="flex-grow pl-10 pr-3 py-2 focus:outline-none"
                  placeholder="Card Number"
                />
                <input
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  className="w-24 pl-3 pr-3 py-2 border-l border-gray-300 focus:outline-none"
                  placeholder="MM/YY"
                />
                <label className="flex items-center ml-2 pr-3 space-x-2">
                  <input
                    type="checkbox"
                    checked={rememberCard}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {showHistory && <BillingHistory close={() => setShowHistory(false)} />}
      {showPlanPayment && <SelectPlan onClose={() => setShowPlanPayment(false)} initialStep={2} />}
    </div>
  );
};

export default SubscribeBilling;
