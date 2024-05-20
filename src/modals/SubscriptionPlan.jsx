import React from "react";
import img1 from "../assets/IMG30.png"
import img2 from "../assets/IMG31.png"
import img3 from "../assets/IMG32.png"
import img4 from "../assets/IMG33.png"

const SubscriptionPlan = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #FE7E00 100%, #FE0000 100%)",
    height: "525px", // Tailwind h-64 is 16rem
    width: "100%", // Tailwind w-full is 100%
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-semibold text-[#303237] ">Select Plan</p>
        <p className="text-[#FE7E00] text-[14px] ">Skip</p>
      </div>

      <div className="mt-4">
        <p className="pb-4">Choose your preferred subscription plan</p>

        <div className="w-[344px] h-[525px] rounded-lg bg-[url('/assets/IMG30.png')] bg-[position:top_left] bg-[size:50px_50px]" style={gradientStyle}>
          <div className="relative p-6">
            <h1 className="text-white text-[20px] font-bold leadding-[22px] items-center ">
              Don't Miss Out! Save Big. <br /> Up to 40% off your first order.
            </h1>
            <div>
                {/* <img src={img1} alt="" width={200} className="absolute bottom-0 left-0 rounded-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
