import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mealDetails.css";
import { BsCart2 } from "react-icons/bs";
import mealpepper from "../assets/IMG81.png";
import img76 from "../assets/IMG76.png";
import img80 from "../assets/IMG80.png";
import useMealById from "../hooks/useMealById";

const MealDetails = ({ onClose, mealId }) => {
  const { data, isLoading } = useMealById(mealId._id);



  console.log(data, "datamealFoer ajdjk");
  const name = data?.name;
  const images = data?.images;
  const price = data?.price?.amount;
  const delivery = data?.price?.deliveryFee;


  const settings = {
    dots: true,
    infinite: images?.length > 1 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // Optional: Hide navigation arrows
    centerMode: true, // Show the current slide in the center
    centerPadding: "25%",
  };


  if (!images || images.length === 0) {
    // If no images are available, render a placeholder or return null
    return null;
  }

  return (
    <div className="meal-modal fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center overflow-scroll overflow-x-hidden z-[1000] ">
      <div className="meal-content bg-white fixed top-0 right-0 w-[450px] h-[100vh] flex flex-col ">
        <div className="bg-[#F2F4F7] h-[300px] ">
          <div className="max-w-[500px] my-0 mx-auto ">
            <Slider {...settings}>
              {images.length === 1 ? (
                <img
                  src={images[0]}
                  alt=""
                  width={30}
                  className="rounded-full mt-6"
                />
              ) : (
                images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      width={190}
                      className="rounded-full mt-6"
                    />
                  </div>
                ))
              )}
            </Slider>
          </div>
          <button
            className="close-btn absolute right-3 top-3"
            onClick={onClose}
          >
            x
          </button>
        </div>

        <div className="flex flex-col p-3 mt-2 ml-[90px] md:ml-0">
          <div className="flex justify-between flex-col-reverse md:flex-row">
            <h1 className="text-[16px] text-[#0B0806] font-medium leading-[30px] ">
              {name}
            </h1>
            <div className="flex items-center gap-3">
              <button className="bg-[#FE7E00] px-2 rounded-full text-white font-bold  ">
                -
              </button>
              <h1 className="text-[14px] font-bold ">0</h1>
              <button className="bg-[#FE7E00] px-2 rounded-full text-white ">
                +
              </button>
            </div>
          </div>
          <p className="text-[14px] mt-2">
            Plain White Rice, Efo Riro Soup, Grilled Chicken
          </p>
          <p className="text-[#FE7E00] text-[16px] font-bold pt-2">£{price}</p>

          <div className="flex justify-between items-center bg-[#F9FAFB] p-2 mt-4 rounded">
            <p>Delivery fee</p>
            <p className="font-medium text-[#FE7E00] text-[16px] ">
              £{delivery}
            </p>
          </div>

          <button className="px-4 py-2 flex justify-center items-center gap-4 bg-[#FE7E00] rounded-md mt-4 mx-4 ">
            <BsCart2 style={{ color: "#ffff" }} />
            <p className="text-white">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
