import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../../../../services";
import arrow from "../../../../assets/img/arrow.svg";
import arrow1 from "../../../../assets/img/arrows.svg";
import Arrow from "../../../../assets/Arrow";

const ImageSlider = ({ slides }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div>
      <p className="aside-counts">0{currentSlide + 1} / </p>
      <span className="aside-button-prev">
        <Arrow {...props} />
        {/* <img src={arrow} alt="prevArrow" {...props} /> */}
      </span>
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div>
      <p className="aside-count"> 0{slideCount}</p>
      <span className="aside-button-next">
        <Arrow {...props} />
        {/* <img src={arrow} alt="nextArrow" {...props} /> */}
      </span>
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
