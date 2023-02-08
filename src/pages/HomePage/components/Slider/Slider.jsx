import React from "react";
import "./Slider.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle"
import { FreeMode, Pagination } from "swiper";
const Slider = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "services")
      .then((res) => setService(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  const [t, i18next] = useTranslation();

  return (
    <div className="slider">
      <Swiper
        slidesPerView={1.4}
        spaceBetween={0}
        loop={true}
        
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="slider-item"
      >
        {service &&
          service?.map((evt, i) => (
            <SwiperSlide itemScope={3}>
              <div key={i} className="slider-list">
                <img
                  src={`${BASE_URL}uploads/images/${evt?.logo}`}
                  alt=""
                  className="slider-img"
                />
                <div className="slider-title">
                  <img
                    src={`${BASE_URL}uploads/images/${evt?.img_src}`}
                    alt=""
                    className="slider-pic"
                  />
                  <span className="slider-span">
                    <h3 className="slider-name">
                      {evt[`title_${i18next?.language}`]}
                    </h3>
                    <p className="slider-text">
                      {evt[`description_${i18next?.language}`]}
                    </p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="slider-lists"
      >
        {service &&
          service?.map((evt, i) => (
            <SwiperSlide>
              <div key={i} className="slider-list">
                <img
                  src={`${BASE_URL}uploads/images/${evt?.logo}`}
                  alt=""
                  className="slider-img"
                />
                <div className="slider-title">
                  <img
                    src={`${BASE_URL}uploads/images/${evt?.img_src}`}
                    alt=""
                    className="slider-pic"
                  />
                  <span className="slider-span">
                    <h3 className="slider-name">
                      {evt[`title_${i18next?.language}`]}
                    </h3>
                    <p className="slider-text">
                      {evt[`description_${i18next?.language}`]}
                    </p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
