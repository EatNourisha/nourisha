import React from "react";

const FoodService = () => {
  return (
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
        <button className="bg-white py-[12px] px-[36px] rounded-[8px] text-orange-500 text-[16px] font-semibold leading-[24px] mt-5 border border-orange-500 border-solid w-full  ">
          Plan your meal
        </button>
      </div>
    </div>
  );
};

export default FoodService;
