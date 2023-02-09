import React, { useEffect, useState } from "react";
import "./Meeting.css";
import arrow from "../../../../assets/img/row.png";
import { Link, useParams } from "react-router-dom";
import play from "../../../../assets/img/play.png";
import VideoModal from "../../../ReactModal/components/VideoModal/VideoModal";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { Swiper, SwiperSlide } from "swiper/react";
import closes from "../../../../assets/icons/close.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { FreeMode, Pagination } from "swiper";

const Meeting = () => {
  const [videoModal, setVideoModal] = useState(false);

  function handleVideoModal() {
    setVideoModal(!videoModal);
  }

  const [t, i18next] = useTranslation();
  var { id } = useParams();
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + `about/${id}`)
      .then((res) => setAbout(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="meeting">
        <div className="container">
          <h3 className="meeting-name">
            {!!about && about[`title_${i18next?.language}`]}
          </h3>
          <p className="meeting-title">
            <Link to="/" className="meeting-link">
              {t("home")}
            </Link>
            <img src={arrow} alt="" className="meeting-icon" />
            {t("meeting")}
          </p>
          <div className="meeting-page">
            <p className="meeting-text">
              {!!about && about[`description_${i18next?.language}`]}
            </p>
            <div className="meeting-left">
              <img
                src={`${BASE_URL}uploads/images/${about?.img_src}`}
                alt=""
                className="meeting-icons"
              />
              <button onClick={handleVideoModal} className="meeting-button">
                <img src={play} alt="" className="meeting-imgs" />
                <span className="meeting-span">{t("video")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="meeting-box">
        <img
          src={`${BASE_URL}uploads/images/${about?.img_src}`}
          alt=""
          className="meeting-box-img"
        />
        <div className="meeting-box-page">
          <Swiper
            slidesPerView={1.6}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true
            }}
            modules={[FreeMode, Pagination]}
          >
            <SwiperSlide>
              {about?.images?.map((evt, i) => (
                <img
                  key={i}
                  src={`${BASE_URL}uploads/images/${evt}`}
                  alt=""
                  className="meeting-img"
                />
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <VideoModal show={videoModal}>
        <div>
          <div className="content-modal-item">
            <button onClick={() => setVideoModal()} className="close-modal">
              <img className="aside-close-img" src={closes} alt="" />
            </button>
          </div>
          {!!videoModal && (
            <iframe
              className="content-video-modal"
              src={`https://www.youtube.com/embed/${about?.video_url}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </VideoModal>
    </>
  );
};

export default Meeting;
