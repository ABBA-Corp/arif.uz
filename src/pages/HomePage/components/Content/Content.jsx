import React, { useState } from "react";
import "./Content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import VideoModal from "../../../ReactModal/components/VideoModal/VideoModal";
import { IoCloseOutline } from "react-icons/io5";
import Audio from "../../../../assets/icons/audio";
import Phone from "../../../../assets/icons/phone";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { useTranslation } from "react-i18next";
import closes from "../../../../assets/icons/close.png";
import YouTube from "react-youtube";
import { useRef } from "react";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Content = () => {
  const [t, i18next] = useTranslation();
  const [videoModal, setVideoModal] = useState(false);
  const [linkId, setLinkId] = useState();

  function handleVideoModal() {
    setVideoModal(!videoModal);
    document.body.classList.add("no-scroll");
  }

  function handleCloseModal() {
    setVideoModal(false);
    document.body.classList.remove("no-scroll");
  }

  const [worker, setWorker] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "workers")
      .then((res) => setWorker(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [youtube, setYoutube] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "workers")
      .then((res) => setYoutube(res?.data?.data?.find((e) => e?.id === linkId)))
      .catch((err) => console.log(err));
  }, [linkId]);



  return (
    <div className="content">
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {worker?.map((evt, i) => (
          <SwiperSlide key={i}>
            <img
              src={`${BASE_URL}uploads/images/${evt.img_src}`}
              alt=""
              className="content-imgs"
            />
            <div className="container">
              <div className="content-titles">
                <h2 className="content-name">{evt.name}</h2>
                <p className="content-span">
                  {evt[`position_${i18next.language}`]}
                </p>
              </div>
              <p className="content-text">
                {evt[`description_${i18next.language}`]}
              </p>
              <div className="content-list">
                <button
                  onClick={() => {
                    handleVideoModal();
                    setLinkId(evt?.id);
                  }}
                  className="content-btn content__btn"
                >
                  <span className="content-img-span">
                    <Audio />
                  </span>
                  <p className="content-subname">{t("video")}</p>
                </button>
                <a href={`tel:${evt.phone}`} className="content-btn">
                  <span className="content-span-img">
                    <Phone />
                  </span>
                  <p className="content-subname">{t("tel")}</p>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <VideoModal  show={videoModal}>
        <div>
          <div className="content-modal-item">
            <button onClick={handleCloseModal} className="close-modal">
              <img className="aside-close-img" src={closes} alt="" />
            </button>
          </div>
          {youtube ? (
            <iframe
              className="content-video-modal"
              src={`https://www.youtube.com/embed/${youtube?.video_url}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p
              style={{
                fontSize: "50px",
                fontWeight: 500,
                fontFamily: "Fredoka",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
              }}
            >
              Loading...
            </p>
          )}{" "}
        </div>
      </VideoModal>
    </div>
  );
};

export default Content;
