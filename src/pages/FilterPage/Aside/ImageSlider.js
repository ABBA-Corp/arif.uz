import React from "react";
import right from "../../../assets/img/right.svg";
import left from "../../../assets/img/left.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../../../services";

const ImageSlider = ({ slides }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div>
      <p className="aside-counts">0{currentSlide + 1} / </p>
      <img src={left} alt="prevArrow" {...props} />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div>
      <p className="aside-count"> 0{slideCount}</p>
      <img src={right} alt="nextArrow" {...props} />
    </div>
  );

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        {slides?.map((evt, i) => (
          <img
            className="imageslider-img"
            key={i}
            src={`${BASE_URL}uploads/images/${evt.img_src}`}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
