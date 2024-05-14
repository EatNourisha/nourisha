import React, { useEffect, useState } from "react";
import { showToast } from "../utils/toast";
import { Icon } from "@iconify/react";
import refererImg from "../assets/referrer_img.png";
import icon_holder from "../assets/icon_holder.png";
import share from "../assets/share.png";
import ReferrerHistory from "./ReferrerHistory";
import useEarnings from "../hooks/useEarnings";
import usePendingReferral from "../hooks/usePendingReferral";
import useCompletedReferral from "../hooks/useCompletedReferral";


const ReferFriend = ({ onClose }) => {
  const { data, isLoading, withdraw } = useEarnings()
  const pending_referral = usePendingReferral()
  const completed_referral = useCompletedReferral()
  const [ earnings, setEarnings ] = useState()
  const [toggleHistory, setToggleHistory] = useState(false);
  const referralCode = localStorage.getItem('referralCode')


  const pendingReward = pending_referral?.data?.totalCount * 10
  const completedReferral = completed_referral?.data?.totalCount

  const totalReffered = pending_referral?.data?.totalCount + completedReferral



  useEffect(() => {
    const earningsAmount  =  localStorage.getItem('earningsData')
    

    if(earningsAmount) {
      setEarnings(earningsAmount)
    } else setEarnings(data?.balance)
  }, [])


  const handleToggleHistory = () => {
    setToggleHistory(!toggleHistory);
  };

  const copyReferralCode = () => {
    const referralCodeInput = document.getElementById("referralCode");
    referralCodeInput.select();
    document.execCommand("copy");
    // Clear the selection after copying
    window.getSelection().removeAllRanges();
    showToast({
      title: "Referral Code",
      description: "Referral code copied.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const shareReferralCode = async () => {
    const referralUrl = `${window.location.href}?ref=${referralCode}`;
    window.getSelection().removeAllRanges();

    try {
      await navigator.share({
        title: "Referral Code",
        text: `Use my referral code: ${referralCode}`,
        url: referralUrl,
      });
    } catch (error) {
      showToast({
        title: "Referral Code",
        description: "Error sharing referral code.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleWithdrawal = async() => {

    try {
      await withdraw();

    } catch (error) {
      console.log(error);
      showToast({
        title: "Withdraw",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <div>
      <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center z-[1000] ">
        <div className="bg-white p-[20px] w-[400px] h-[95vh] flex flex-col rounded-lg relative overflow-scroll overflow-x-hidden">
          <div className="flex justify-between items-center border-b border-[#ededf3] p-[10px] -mt-5 ">
            <h2 className="text-[18px] font-semibold leading-[27px] ">
              Refer A Friend
            </h2>
            <button className="close-btn -mt-1 " onClick={onClose}>
              x
            </button>
          </div>

          <div className="text-[12px] text-[#303237] font-normal">
            <div className="flex flex-col bg-[#F9FAFB] mt-2 border  border-gray-200 border-opacity-50 rounded-[4px] px-[12px] py-[6px]">
              <p>Pending reward</p>
              <p className="font-bold">£{pendingReward}</p>
            </div>

            <div className="flex justify-between items-center bg-[#F9FAFB] mt-3 border  border-gray-200 border-opacity-50 rounded-[4px] px-[12px] py-[6px]">
              <div className="flex flex-col">
                <p className=" ">You’ve earned</p>
                <p className="font-bold">£{earnings}</p>
              </div>
              <button className="text-white bg-[#FE7E00] py-[8px] px-[32px] rounded font-semibold leading-[24px] text-center " onClick={handleWithdrawal}>
                {isLoading ? (
                    <span className="flex justify-center items-center">
                      <Icon icon="gg:spinner" className="animate-spin h-6 w-12" />
                    </span>
                  ) : ( <span>Withdraw </span> )}
                
              </button>
            </div>

            <div className="flex justify-between items-center  py-[8px] mt-3  ">
              <div className="flex flex-col">
                <img src={refererImg} alt="" />
              </div>
              <button
                onClick={() => handleToggleHistory()}
                className="text-[#FE7E00] border border-[#FE7E00] py-[8px] px-[32px] rounded font-semibold leading-[24px] text-center "
              >
                View history
              </button>
            </div>

            <div className="flex flex-col px-[12px] py-[6px] mt-3  ">
              <div className="flex justify-between items-center">
                <p>Total referred</p>
                <p className="pr-8">{totalReffered} friends</p>
              </div>
              <span className="bg-gradient-to-r from-orange-500 to-orange-100 py-[4px] px-[32px] rounded text-center mt-2 ">
                {" "}
              </span>
              <p className="flex justify-center items-center mt-2">
                {completedReferral} completed referrals
              </p>
            </div>

            <div className=" bg-[#FFE6E4]  px-[12px] py-[6px] mt-3 rounded-[8px] ">
              <div className="flex flex-col items-center">
                <img
                  src={icon_holder}
                  alt="holder"
                  width={90}
                  className="mt-4"
                />

                <p className="font bold text-[20px] text-[#303237] mt-2 ">
                  Earn a free meal
                </p>

                <p className="text-[#7E8494] text-center w-[242px] mt-3 ">
                  Share you referral code to family and friends. Get a free meal
                  when they register and subscribe to a plan
                </p>
              </div>

              <div className="flex justify-center items-center mt- mb-4 gap-3 md:gap-4">
                <div className="flex justify-end items-center px-2 space-x-10 py-3 bg-white rounded-md md:space-x-6 md:px-6">
                  <input className="uppercase text-[14px] w-20 outline-none select-none" id="referralCode" value={referralCode} readOnly/>
                  <button className="font-bold text-[#303237] text-[16px] select-none focus:outline-none" onClick={copyReferralCode}>
                    copy
                  </button>
                </div>

                <button className="flex justify-between items-center pl-6 pr-10 space-x-3 py-3 bg-[#FE7E00] rounded-md md:pl-3 outline-none select-none">
                  <img
                    src={share}
                    alt="share_icon"
                    width={20}
                    className="mt-1"
                  />
                  <p className="text-white text-[16px] font-bold" onClick={shareReferralCode}>Share</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Referral History */}
      {toggleHistory && (
        <ReferrerHistory pending_referral={pending_referral} completed_referral={completed_referral} closeHistory={() => setToggleHistory(false)} copyReferralCode={copyReferralCode} shareReferralCode={shareReferralCode} />
      )}
    </div>
  );
};

export default ReferFriend;
