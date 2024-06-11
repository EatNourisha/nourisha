import React from "react";
import backgroundImg from "../assets/bgmeal.png";
import check from "../assets/check.png";

const SubscriptionPlan = ({ handleNext, handleSkip }) => {
  const gradientStyle = {
    background: `
          url(${backgroundImg}) bottom center / cover no-repeat
        `,
    height: "550px",
    width: "100%",
    position: "relative",
  };


  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-semibold text-[#303237] ">Select Plan</p>
        <p className="text-[#FE7E00] text-[14px] cursor-pointer select-none " onClick={handleSkip} >Skip</p>
      </div>

      <div className="mt-4">
        <p className="pb-4">Choose your preferred subscription plan</p>

        <div className="w-[344px] h-[526px] rounded-lg" style={gradientStyle}>
          <div className="relative p-6">
            <h1 className="text-white text-[20px] font-bold leadding-[22px] items-center ">
              Don't Miss Out! Save Big. <br /> Up to 17% off your first order.
            </h1>
            <div className="relative bg-white rounded-lg w-[294px] h-[416px] mt-10 ">
              <p className="absolute -top-5 left-28 text-[19px] text-white text-center font-bold bg-[#FF0000] p-2 border border-white w-[70px] rounded-lg ">
                £100
              </p>

              <div className="p-2 pt-10 text-center  ">
                <p className="font-bold text-[#1E1E1E] text-[18px]">
                  Weekly Plan
                </p>
                <p className="leading-[18px] mt-2 text-[12px]">
                  2 chef-cooked meals daily <br /> (Lunch and Dinner from Mon.
                  to Sun.) for a week, of your choice meal.
                </p>
              </div>

              <div className="flex flex-col mt-4 px-8">
                <hr className="mb-3"/>

                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Monday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Tuesday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Wednesday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Thursday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Friday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Saturday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-[12px] text-[#000B33]">
                    Sunday
                  </p>
                  <img src={check} alt="" width={20} />
                </div>
               
               <div className="mt-3">
                    <button className="text-white text-[12px] font-bold p-2 w-full bg-[#FF0000]/70 rounded-lg" onClick={handleNext}>Order now</button>
                    <p className="text-center text-[#FE7E00] text-[12px] mt-1 ">Free delivery</p>
                    {/* <p className="text-center text-[#FE7E00] text-[12px] mt-1 ">+ £10 For delivery</p> */}
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
