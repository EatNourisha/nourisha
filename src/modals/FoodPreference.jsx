import { useState } from "react";
import back from "../assets/back.png";

const FoodPreference = ({ onClose }) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const toggleChecked1 = () => {
    setIsChecked1((prevState) => !prevState);
  };

  const toggleChecked2 = () => {
    setIsChecked2((prevState) => !prevState);
  };

  const toggleChecked3 = () => {
    setIsChecked3((prevState) => !prevState);
  };

  return (
    <div className="w-[330px] md:w-[375px]">
      <div className="flex items-center gap-2">
        <img
          src={back}
          alt=""
          onClick={onClose}
          width={25}
          className="md:hidden -ml-2 cursor-pointer"
        />
        <h1 className="text-[24px] leading-[28px] font-bold text-[#303237] ">
          Edit Food Preferences
        </h1>
      </div>

      <p className="text-[12px] leading-[20px] text-[#7E8494] mt-4">
        Are there food items that you are allergic to?
      </p>

      <div className="mt-8 text-[16px] leading-[24px] font-semibold text-[#303237] ">
        <h1 className="text-[16px] font-semibold leading-[24px]">Nuts</h1>
        <div className="flex justify-between">
          <p className="text-[12px] leading-[20px] text-[#7E8494] mt-1">
            For example; Peanuts, Tree nuts, <br /> Almonds, Pecan nuts
          </p>

          <label className="cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked1}
                onChange={toggleChecked1}
              />
              <div
                className={`block w-12 h-[26px] rounded-full -ml-[1px] shadow-inner ${
                  isChecked1 ? "bg-orange-200" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`absolute left-0 top-0 w-6 h-6 my-[1px] rounded-full transition-transform duration-300 ease-in-out transform ${
                  isChecked1 ? "translate-x-full bg-orange-500" : "bg-white"
                }`}
              ></div>
            </div>
          </label>
        </div>

        <h1 className="mt-9 text-[16px] font-semibold leading-[24px]">
          Shellfish
        </h1>
        <div className="flex justify-between">
          <p className="text-[12px] leading-[20px] text-[#7E8494] mt-1">
            For example; Crayfish, Lobster, <br /> Prawns, Shrimp
          </p>

          <label className="cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked2}
                onChange={toggleChecked2}
              />
              <div
                className={`block w-12 h-[26px] rounded-full -ml-[1px] shadow-inner ${
                  isChecked2 ? "bg-orange-200" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`absolute left-0 top-0 w-6 h-6 my-[1px] rounded-full transition-transform duration-300 ease-in-out transform ${
                  isChecked2 ? "translate-x-full bg-orange-500" : "bg-white"
                }`}
              ></div>
            </div>
          </label>
        </div>

        <h1 className="mt-9 text-[16px] font-semibold leading-[24px] ">
          Seafood
        </h1>
        <div className="flex justify-between">
          <p className="text-[12px] leading-[20px] text-[#7E8494] mt-1">
            For example; Barracuda, Croaker, Dry <br /> fish, Stock fish
          </p>

          <label className="cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked3}
                onChange={toggleChecked3}
              />
              <div
                className={`block w-12 h-[26px] rounded-full -ml-[1px] shadow-inner ${
                  isChecked3 ? "bg-orange-200" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`absolute left-0 top-0 w-6 h-6 my-[1px] rounded-full transition-transform duration-300 ease-in-out transform ${
                  isChecked3 ? "translate-x-full bg-orange-500" : "bg-white"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FoodPreference;
