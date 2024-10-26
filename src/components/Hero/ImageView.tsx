import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../variables/images";
export const ImageView = () => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container w-1/3">
      <Slider {...settings}>
        {images.map((item) => (
          <div>
            <img src={item?.url} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
