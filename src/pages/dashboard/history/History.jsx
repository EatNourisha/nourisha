import React from 'react'
import './history.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mealpepper from "../../../assets/IMG81.png";
import img76 from "../../../assets/IMG76.png";
import img80 from "../../../assets/IMG80.png";

const History = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // Optional: Hide navigation arrows
    centerMode: true, // Show the current slide in the center
    centerPadding: '25%',
    prevArrow: <button className="slick-prev" aria-label="Previous" />,
    nextArrow: <button className="slick-next" aria-label="Next" />,
  };

  // Array of image URLs
  const images = [
    mealpepper,
    img76,
    img80
  ];

  return (
    <div className='' style={{ maxWidth: '500px', margin: '0 auto' }}>
    <Slider {...settings} >
      {images.map((image, index) => (
        <div key={index} >
          <img src={image} alt={`Slide ${index + 1}`} width={230} className='rounded-full' />
        </div>
      ))}
    </Slider>

    </div>
  );
}

export default History;