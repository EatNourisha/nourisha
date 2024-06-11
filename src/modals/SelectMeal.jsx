import React, { useEffect, useState } from "react";
import useMeal from "../hooks/useMeal";
import back from "../assets/back.png";
import greater from "../assets/greater.png"
import up from "../assets/up.png"

const SelectMeal = ({ handleSkip, handleMealSelectionChange }) => {
  const { data } = useMeal();
  const [meals, setMeals] = useState([]);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [selectMealModal, setSelectMealModal] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  const [currentMeal, setCurrentMeal] = useState("");
  const [selectedMeals, setSelectedMeals] = useState({});

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const toggleAccordion = (day) => {
    setAccordionOpen((prev) => ({ ...prev, [day]: !prev[day] }));
  };


  useEffect(() => {
    if (!data) return;
    setMeals(data?.data);
  }, [data]);

  const openMealPopup = (day, meal) => {
    setCurrentDay(day);
    setCurrentMeal(meal);
    setSelectMealModal(false);
    setIsModalOpen(true);
  };

  const backToSelectMeal = () => {
    setSelectMealModal(true);
    setIsModalOpen(false);
  };

  const handleSelectMeal = (meal) => {
    setSelectedMeals((prev) => ({
      ...prev,
      [currentDay]: {
        ...prev[currentDay],
        [currentMeal]: meal,
      },
    }));



    backToSelectMeal();
  };

  const handleDeselectMeal = (day, mealType) => {
    setSelectedMeals((prev) => {
      const updatedMeals = { ...prev };

      if (updatedMeals[day]) {
        delete updatedMeals[day][mealType];
        if (Object.keys(updatedMeals[day]).length === 0) {
          delete updatedMeals[day];
        }
      }

      return updatedMeals;
    });
  };

  useEffect(() => {
    handleMealSelectionChange(selectedMeals)
  }, [selectedMeals, handleMealSelectionChange])

  // const handleDeselectMeal = (day, mealType) => {
  //   setSelectedMeals((prev) => {
  //     const updatedMeals = { ...prev };
  //     delete updatedMeals[day][mealType];
  //     if (Object.keys(updatedMeals[day]).length === 0) {
  //       delete updatedMeals[day];
  //     }
  //     return updatedMeals;
  //   });
  // };

  return (
    <>
      {selectMealModal && (
        <div>
          <div className="flex justify-between items-center">
            <p className="text-[18px] font-semibold text-[#303237] ">
              Select Meal
            </p>
            <p
              className="text-[#FE7E00] text-[14px] cursor-pointer select-none "
              onClick={handleSkip}
            >
              Skip
            </p>
          </div>
          <p className="text-[#7E8494] font-medium text-[14px] py-2 mb-4 ">
            Choose your meals for the week
          </p>

          {days.map((day) => (
            <div key={day} className="mb-3">
              <p className="mb-1 ml-2 font-bold text-[12px] capitalize ">
                {day}
              </p>
              <div className="p-4 border border-solid border-[#BDC0CE] rounded-lg mb-1">
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleAccordion(day)}
                >
                  <span className="text-[14px] ">Select</span>
                  {accordionOpen[day] ? <img src={up} alt="" width={12} /> : <img src={greater} alt="" width={7} /> }
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen[day]
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  } `}
                >
                  
                  <div className="overflow-hidden flex gap-4 ">
                    {selectedMeals[day]?.Lunch ? (
                      <div className="flex flex-col mt-3 relative">
                        <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-[#ECEFFE] rounded-lg ">
                          <div className="pl-1 gap-14 xs:pl-3 absolute flex xs:gap-20 mt-1">
                            <p className="text-[12px] text-[#303237] font-normal">
                              Lunch
                            </p>
                            <button
                             onClick={() => handleDeselectMeal(day, "Lunch")}
                             className="text-font px-2 bg-slate-600 text-white text-[10px] rounded-full"
                            >
                              X
                            </button>
                          </div>
                          <div className="flex flex-col justify-center items-center h-full mt-2 ">
                            <img
                              src={selectedMeals[day].Lunch.image_url}
                              alt=""
                              className="w-[70px] h-[70px] rounded-full shadow-2xl "
                            />
                          </div>
                        </div>
                        <p className="text-start pl-1 mt-1">
                          {selectedMeals[day].Lunch.name}
                        </p>
                      </div>
                    ) : (
                      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-[#ECEFFE] relative mt-3 rounded-lg">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-2 text-center w-full">
                          <button
                            className="cursor-pointer"
                            onClick={() => openMealPopup(day, "Lunch")}
                          >
                            <span className="border border-solid border-[#141B34] px-[6px] rounded-full text-bold text-[18px]">
                              +
                            </span>
                            <p className="text-[13px] mt-2">Add Lunch</p>
                          </button>
                        </div>
                        {selectedMeals[day]?.Lunch && (
                          <p className="text-center mt-2">
                            {selectedMeals[day].Lunch.name}
                          </p>
                        )}
                      </div>
                    )}

                    {selectedMeals[day]?.Dinner ? (
                      <div className="flex flex-col mt-3">
                        <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-[#ECEFFE] rounded-lg ">
                          <div className="pl-1 gap-14 sm:pl-3 absolute flex sm:gap-20 mt-1 -ml-1">
                            <p className="text-[12px] text-[#303237] font-normal">
                              Dinner
                            </p>
                            <button
                              onClick={() => handleDeselectMeal(day, "Dinner")}
                              className="text-font px-2 bg-slate-600 text-white text-[10px] rounded-full"
                            >
                              X
                            </button>
                          </div>
                          <div className="flex flex-col justify-center items-center h-full mt-2 ">
                            <img
                              src={selectedMeals[day].Dinner.image_url}
                              alt=""
                              className="w-[70px] h-[70px] rounded-full shadow-2xl "
                            />
                          </div>
                        </div>
                        <p className="text-start pl-1 mt-1">
                          {selectedMeals[day].Dinner.name}
                        </p>
                      </div>
                    ) : (
                      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-[#ECEFFE] relative mt-3 rounded-lg">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <button
                            className=" cursor-pointer"
                            onClick={() => openMealPopup(day, "Dinner")}
                          >
                            <span className="border border-solid border-[#141B34] px-[6px] rounded-full text-bold text-[18px]">
                              +
                            </span>
                            <p className="text-[13px] mt-2">Add Dinner</p>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div>
        {isModalOpen && (
          <div>
            <div className="flex gap-4">
              {/* <img src={back} alt="" width={20} onClick={backToSelectMeal} /> */}
              <h2 className="font-semibold text-[16px] capitalize">
                Select a meal for {currentDay} {currentMeal}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 ml-4 mt-4">
              {meals.map((meal) => (
                <div
                  key={meal._id}
                  className="mb-4 cursor-pointer"
                  onClick={() => handleSelectMeal(meal)}
                >
                  <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-[#ECEFFE] ">
                    <div className="flex flex-col justify-center items-center h-full ">
                      <img
                        src={meal.image_url}
                        alt=""
                        className="w-[90px] h-[90px] rounded-full shadow-2xl "
                      />
                    </div>
                  </div>
                  <h2 className="text-[14px]">{meal.name}</h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectMeal;
