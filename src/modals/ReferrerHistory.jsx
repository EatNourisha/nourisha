import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import share from "../assets/share.png";
import back from "../assets/back.png";
import PendingReferral from "./PendingReferral";
import CompletedReferral from "./CompletedReferral";


const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full items-center">
      <div className="flex border-b border-gray-200 justify-centernter items-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? "border-orange-500 text-orange-500 text-[14px] font-bold border-b-4 text-center"
                : "border-transparent text-[#303237] hover:text-gray-700 hover:border-gray-300 text-[12px]"
            } flex items-center px-16 py-2 border-b-2 font-bold text-[14px]`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

const ReferrerHistory = ({ closeHistory, copyReferralCode, shareReferralCode, completed_referral, pending_referral }) => {

  const pendingRefData = pending_referral?.data
  const pendingRefLoading = pending_referral?.isLoading
  const completedRefData = completed_referral?.data
  const completedRefLoading = completed_referral?.isLoading

  const navigate = useNavigate();
  const referralCode = localStorage.getItem('referralCode')


//   console.log(pendingData, "pending data")
  const tabs = [
    { name: "Pending", content: <PendingReferral pendingRefData={pendingRefData} loading={pendingRefLoading} /> },
    { name: "Completed", content: <CompletedReferral completedRefData={completedRefData} loading={completedRefLoading} /> },
  ];

  const backRoDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-black bg-opacity-5 fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center z-[1000] ">
      <div className="bg-white p-[20px] w-[423px] h-[95vh] flex flex-col rounded-lg relative overflow-scroll overflow-x-hidden">
        <div className="flex justify-between items-center p-[10px] -mt-5 ">
          <h2 className="text-[18px] font-semibold leading-[27px] flex justify-between gap-4 ">
            <img
              src={back}
              alt="back_icon"
              width={25}
              className="-ml-5 cursor-pointer"
              onClick={closeHistory}
            />
            Referral A History
          </h2>
          <button
            className="close-btn -mt-1 "
            onClick={() => backRoDashboard()}
          >
            x
          </button>
        </div>

        <Tab tabs={tabs} />

        <div className="flex justify-between items-center mb-4 gap-3 md:gap-4 mt-40">
          <div className="flex justify-end items-center px-2 space-x-10 py-3 bg-[#F9FAFB] rounded-md md:space-x-8 md:px-6">
            <p className="uppercase text-[14px]">{referralCode}</p>
            <button className="font-bold text-[#303237] text-[16px] " onClick={() => copyReferralCode()}>
              copy
            </button>
          </div>

          <button className="flex justify-between items-center pl-6 pr-10 space-x-3 py-3 bg-[#FE7E00] rounded-md md:pl-3" onClick={() => shareReferralCode()}>
            <img src={share} alt="share_icon" width={20} className="mt-1" />
            <p className="text-white text-[16px] font-bold">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferrerHistory;
