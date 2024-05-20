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

const FoodService = () => {
  const [togglePlanYourMeal, setTogglePlanYourMeal] = useState(false);
  const [toggleReferFriend, setToggleReferFriend] = useState(false);
  const [toggleSelectPlan, setToggleSelectPlan] = useState(false);

  const handlePlanMeal = () => {
    setTogglePlanYourMeal(true);
  };

  const handleReferFriend = () => {
    setToggleReferFriend(true)
  }

  const handleSelectPlan = () => {
    setToggleSelectPlan(true)
  }

  return (
    <>
      <div className="w-full md:w-[375px]">
        <h1 className="px-[16px] leading-8 font-bold text-[24px]">
          Manage Food Service
        </h1>

        <div className="w-[252px] mx-auto mt-20 text-center">
          <h1 className="text-[20px] leading-[28px] font-bold">
            Edit Food Service
          </h1>
          <p className="text-[14px] leading-[20px] text-gray-400 mt-4">
            If you’d like to make changes to your food service, please reach out
            to your gardener.
          </p>
          <button className="bg-orange-500 py-[12px] px-[36px] rounded-[8px] text-white text-[16px] font-semibold leading-[24px] mt-6 w-full ">
            View your weekly lineup
          </button>
          <button
            className="bg-white py-[12px] px-[36px] rounded-[8px] text-orange-500 text-[16px] font-semibold leading-[24px] mt-5 border border-orange-500 border-solid w-full  "
            onClick={handlePlanMeal}
          >
            Plan your meal
          </button>
        </div>
      </div>

      {togglePlanYourMeal && (
        <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center z-[1000] ">
          <div className="bg-white p-[20px] w-[423px] h-[95vh] flex flex-col rounded-lg relative overflow-scroll overflow-x-hidden ">
            <div className="flex justify-between items-center">
              <p className="text-[20px] text-[#303237] font-bold -mt-5 ">
                Plan my meal
              </p>
              <button
                className="close-btn select-none mb-6"
                onClick={() => setTogglePlanYourMeal(false)}
              >
                X
              </button>
            </div>

            <div className="px-4">
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

              <p className="text-[15px] text-[#125309] font-medium mt-3 ">
                You are a few clicks away from enjoying well-made food.
              </p>

              <p className="text-[15px] text-[#303237] font-semibold mt-3">
                Here are a few important things to note:
              </p>

              <div className="flex flex-col mt-6">
                <div className="flex flex-col p-4 bg-[#F7FFE4] rounded-md mb-3 ">
                  <div className="relative top-0 left-0">
                    <img src={orange} alt="" className="absolute z-10" />
                    <img src={green} alt="" className="absolute left-1 top-1" />
                  </div>
                  <div className="text-[15px] text[#303237] mt-8 ">
                    Once a meal plan is submitted, it can’t be edited or
                    resubmitted.
                  </div>
                </div>
                <div className="flex flex-col p-4 bg-[#F7FFE4] rounded-md mb-2 ">
                  <div className="relative top-0 left-0">
                    <img src={orange} alt="" className="absolute z-10" />
                    <img src={green} alt="" className="absolute left-1 top-1" />
                  </div>
                  <div className="text-[15px] text[#303237] mt-8 ">
                    Please be sure the address on your profile is correct, as
                    that’s where your food will be delivered.
                  </div>
                </div>

                <div className="flex justify-between bg-[#FFEFC6] pt-2 pr-1 mt-2">
                  <img src={man} alt="annouce" />
                  <div className="">
                    <p className="text-[16px] text-[#303237] font-bold mb-2">Get £10 for Every Referral!</p>
                    <p className="text-[12px] text-[#565C69] ">
                      Earn £10 for every friend, or anyone, who subscribes with
                      your referral code! No limits on referrals. Let's gooooo!
                    </p>

                    <button className="ml-28 pb-1 underline text-[#FE7E00] font-semibold" onClick={handleReferFriend}>Refer a friend</button>
                    {toggleReferFriend && <ReferFriend onClose={() => setToggleReferFriend()} />}
                  </div>
                </div>

                <div className="mt-16 space-y-3">
                  <button className="w-full p-3 text-center text-white font-semibold text-[16px] bg-[#FE7E00] rounded-lg" onClick={handleSelectPlan}>Plan your meal</button>
                  {toggleSelectPlan && <SelectPlan onClose={() => setToggleSelectPlan(false)} />}
                  <button className="w-full p-3 text-center text-[#FE7E00] font-semibold text-[16px] bg-white rounded-lg border border-[#FE7E00]">Chat With Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodService;
