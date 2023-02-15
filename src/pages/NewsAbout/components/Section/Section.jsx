import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { useTranslation } from "react-i18next";
import right from "../../../../assets/img/next.png";
import left from "../../../../assets/img/prev.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Section.css'

const Section = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "news")
      .then((res) => setNews(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);
  const [t, i18next] = useTranslation();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={left} className="slider-prev" alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={right} className="slider-next" alt="nextArrow" {...props} />
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="section">
      <div className="new-section">
        <div className="container">
          <h3 className="new-section-name">{t("news2")}</h3>
          <Slider className="section-splide" {...settings}>
            {news?.map((evt, i) => (
              <div key={i} className="section-title">
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to={`/news/about=${evt?.id}`}
                >
                  <img
                    src={`${BASE_URL}uploads/images/${evt.img_src}`}
                    alt=""
                    className="section-pic"
                  />
                  <h6 className="section-subname">
                    {evt[`title_${i18next?.language}`]}
                  </h6>
                  <p className="section-subtext">
                    {evt[`text_${i18next?.language}`]}
                  </p>
                  <Link
                    onClick={() => window.scrollTo({ top: 0 })}
                    to={`/news/about=${evt?.id}`}
                    className="section-links"
                  >
                    {t("link1")}
                  </Link>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Section;
