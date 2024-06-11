import React, { useState } from "react";
import ReferFriend from "./ReferFriend";
import SelectPlan from "./SelectPlan";
import img_1 from "../assets/IMG20.png";
import img_2 from "../assets/IMG23.png";
import img_3 from "../assets/IMG21.png";
import img_4 from "../assets/IMG22.png";
import green from "../assets/round_green.png";
import orange from "../assets/round_orange.png";
import man from "../assets/annouce.png";
import back from "../assets/back.png";

const DeliveryDayInformation = () => {
  const [toggleReferFriend, setToggleReferFriend] = useState(false);

  const handleReferFriend = () => {
    setToggleReferFriend(true);
  };

  return (
    <div className="-ml-5">
      <h2 className="text-center text-[18px] font-semibold mb-4">Delivery day information</h2>  
      <div className="px-4 leading-[20px]">
        <div className="flex justify-between items-center">
          <div className="border p-1 px-4 shadow rounded-3xl">
            <img src={img_1} alt="" width={30} className="rounded-full" />
          </div>
          <div className="border p-1 px-4 shadow rounded-3xl">
            <img src={img_2} alt="" width={30} className="rounded-full" />
          </div>
          <div className="border p-1 px-4 shadow rounded-3xl">
            <img src={img_3} alt="" width={30} className="rounded-full" />
          </div>
          <div className="border p-1 px-4 shadow rounded-3xl">
            <img src={img_4} alt="" width={30} className="rounded-full" />
          </div>
        </div>

        <p className="text-[14px] text-[#125309] font-medium mt-3 ">
            You are a few hours away from enjoying well-made food.
        </p>

        {/* <p className="text-[15px] text-[#303237] font-semibold mt-3">
          Here are a few important things to note:
        </p> */}

        <div className="flex flex-col mt-6">
          <div className="flex flex-col p-4 bg-[#F7FFE4] rounded-md mb-3 ">
            <div className="relative top-0 left-0">
              <img src={orange} alt="" className="absolute z-10" />
              <img src={green} alt="" className="absolute left-1 top-1" />
            </div>
            <div className="text-[15px] text[#303237] mt-8 leading-[20px] ">
            We aim to delivery your food box within 24-48 hours for all orders placed on week days. <br /><br />Orders placed on Fridays or Weekends will be delivered the following Tuesday. <br /><br />Our delivery days are : <span className="font-bold">Tuesday, Wednesday, Thursday and Friday</span> . We are unable to deliver on weekends. <br /><br />You will get an email or sms notification when your food is on its way to you. <br /><br />Click on button below to select your delivery date.
            </div>
          </div>
          <div className="flex flex-col p-4 bg-[#F7FFE4] rounded-md mb-2 ">
            <div className="relative top-0 left-0">
              <img src={orange} alt="" className="absolute z-10" />
              <img src={green} alt="" className="absolute left-1 top-1" />
            </div>
            <div className="text-[15px] text[#303237] mt-8 ">
            Upon receipt of your Nourisha box, Immediately refrigerate the contents.
            </div>
          </div>

          <div className="flex justify-between bg-[#FFEFC6] pt-2 pr-1 mt-2 -ml-5 w-[350px] xs:-ml-0 sm:w-[365px]">
            <img src={man} alt="annouce" />
            <div className="">
              <p className="text-[16px] text-[#303237] font-bold mb-2">
                Get £10 for Every Referral!
              </p>
              <p className="text-[12px] text-[#565C69] ">
                Earn £10 for every friend, or anyone, who subscribes with your
                referral code! No limits on referrals. Let's gooooo!
              </p>

              <button
                className="ml-28 pb-1 underline text-[#FE7E00] font-semibold"
                onClick={handleReferFriend}
              >
                Refer a friend
              </button>
              {toggleReferFriend && (
                <ReferFriend onClose={() => setToggleReferFriend()} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDayInformation;
