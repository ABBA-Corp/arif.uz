import React from "react";
import "./About.css";
import arif from "../../../../assets/img/arif.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import aylana from "../../../../assets/img/aylana.png";

const About = () => {
  const [t, i18next] = useTranslation();

  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "about")
      .then((res) => setAbout(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="about">
      <img src={aylana} alt="" className="about-icons" />
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {about?.map((evt, i) => (
          <SwiperSlide key={i}>
            <img
              src={`${BASE_URL}uploads/images/${evt.img_src}`}
              alt=""
              className="about-imgs"
            />
            <div className="container">
              <div className="about-title">
                <img src={arif} alt="" className="about-img" />
                {/* <p className="about-subname">{t("tadbir")}</p> */}
              </div>
              <h2 className="about-name">{evt[`title_${i18next.language}`]}</h2>
              <p className="about-text">
                {evt[`description_${i18next.language}`]}
              </p>
              <div
                onClick={() => window.scrollTo({ top: 0 })}
                className="about-item-link"
              >
                <Link to={`/meeting=${evt?.id}`} className="about-btn">
                  {t("batafsil")}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default About;
