import React, { useEffect, useState } from "react";
import icon_holder from "../assets/icon_holder.png";
import refImg from "../assets/pendimg.png";

const CompletedReferral = ({ completedRefData, loading }) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(completedRefData?.data);
  }, []);

  return (
    <>
      {data && data?.length !== 0 ? (
        <>
        <div className="flex flex-col justify-center">
          <div className="flex justify-between mt-3">
            <div className="flex justify-between space-x-3">
              <img src={refImg} alt="refImg" width={50} className="mt-1" />
              <div className="flex flex-col gap-1 mt-2">
                <p className="uppercase text-[14px] font-bold text-[#303237] ">
                  FREEBORN EHIRHERE
                </p>
                <p className="text-[12px] font-medium text-[#7E8494] ">
                  has subscribed to a meal plan
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end text-[12px] leading-[20px] font-medium text-[#7E8494] mt-2">
              <p>2023-04-23</p>
              <p className="text-[#FE7E00]">+£10</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-between mt-3">
            <div className="flex justify-between space-x-3">
              <img src={refImg} alt="refImg" width={50} className="mt-1" />
              <div className="flex flex-col gap-1 mt-2">
                <p className="uppercase text-[14px] font-bold text-[#303237] ">
                  FREEBORN EHIRHERE
                </p>
                <p className="text-[12px] font-medium text-[#7E8494] ">
                  has subscribed to a meal plan
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end text-[12px] leading-[20px] font-medium text-[#7E8494] mt-2">
              <p>2023-04-23</p>
              <p className="text-[#FE7E00]">+£10</p>
            </div>
          </div>
        </div>
       
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-[200px] ">
          <img src={icon_holder} alt="" width={50} />
          <p className="mt-4 leading-[28px] font-semibold text-[14px] text-[#303237] ">
            You have no completed referrals
          </p>
        </div>
      )}
    </>
  );
};

export default CompletedReferral;
