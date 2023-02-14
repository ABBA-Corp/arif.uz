import React from "react";
import "./Slider.css";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../../services";
import Slider from "react-slick";
import right from "../../../../assets/icons/right.png";
import left from "../../../../assets/icons/lefts.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const SliderPage = ({ company }) => {
  const [t, i18next] = useTranslation();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div>
      <p className="slick-counts">0{currentSlide + 1} / </p>
      <img src={left} className="slick-left" alt="prevArrow" {...props} />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div>
       <p className="slick-count"> 0{slideCount}</p>
      <img src={right} className="slick-right" alt="nextArrow" {...props} />
    </div>
  );
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll:1,
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
    <div className="slick">
      <div className="container">
        <h2 className="slick-names">{t("enterprice2")}</h2>
        <div className="slick-page">
          <Slider {...settings}>
            {company?.products?.map((evt, i) => (
              <div key={i} className="slick-item">
                <h3 className="slick-name">
                  {evt[`name_${i18next.language}`]}
                </h3>
                <div className="slick-title">
                  <img
                    src={`${BASE_URL}uploads/images/${evt.img_src}`}
                    alt=""
                    className="slick-img"
                  />
                </div>
                <p className="slick-text">
                  {evt[`description_${i18next.language}`]}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default SliderPage;
