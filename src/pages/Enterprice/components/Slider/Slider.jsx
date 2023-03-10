import React from "react";
import "./Slider.css";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../../services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../../../assets/Arrow";

const SliderPage = ({ company }) => {
  const [t, i18next] = useTranslation();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => {
    return (
      <div>
        <p className="slick-counts">0{currentSlide + 1} / </p>
        <span className="slick-button-prev">
          <Arrow {...props} />
        </span>
      </div>
    );
  };

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => {
    return (
      <div>
        <p className="slick-count"> 0{slideCount}</p>
        <span className="slick-button-next">
          <Arrow {...props} />
        </span>
        {/* <img src={right} className="slick-right" alt="nextArrow" {...props} /> */}
      </div>
    );
  };
  const settings = {
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    slidesToScroll: 1,
    infinite: company?.products?.length > 4 ? true : false,
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

  const SlickArrowLeft1 = ({ currentSlide, slideCount, ...props }) => {
    let firstCount = currentSlide + 1;
    if (firstCount === "0") {
      return firstCount + 1;
    }
    return (
      <div>
        <p className="slick-counts">0{firstCount + 1} / </p>
        <span className="slick-button-prev">
          <Arrow {...props} />
        </span>
      </div>
    );
  };

  const SlickArrowRight1 = ({ currentSlide, slideCount, ...props }) => {
    return (
      <div>
        <p className="slick-count"> 0{slideCount + 1}</p>
        <span className="slick-button-next">
          <Arrow {...props} />
        </span>
      </div>
    );
  };

  const setting = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft1 />,
    nextArrow: <SlickArrowRight1 />,
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
        <div className="slick-box">
          <Slider {...setting}>
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
