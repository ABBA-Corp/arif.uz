import React, { useEffect, useState } from "react";
import "./Aside.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import close from "../../../assets/img/+.png";
import BuyModal from "../../ReactModal/components/BuyModal/BuyModal";
import ModalSucces from "../../ReactModal/components/ModalSucces/ModalSucces";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../../../services";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

export default function Aside() {
  const [discount, setDiscount] = useState([]);
  const [company, setCompany] = useState([]);
  const [products, setProducts] = useState([]);
  const [greatModal, setGreatModal] = useState(false);
  const [linkId, setLinkId] = useState();

  const [buy, setBuy] = useState(false);
  function handleBuy() {
    setBuy(!buy);
  }

  function openGreatModal() {
    setGreatModal(!greatModal);
  }

  const formBtn = (e) => {
    e.preventDefault();
    if (e.target[0].value.length > 0 && e.target[1].value.length > 0) {
      let botMessege = `
                     Salom, Yangi Xabar!😊%0A
                     Ismi 👤: ${e.target[0].value}%0A
                     Raqam ☎: ${e.target[1].value}%0A 
                     Sizning xabaringiz  📝: ${e.target[2].value}%0A 
                `;

      let url = `https://api.telegram.org/bot5861028519:AAEojIy3EZeId4cR6f3ob2QYFkubcnsYRjY/sendMessage?chat_id=-1001699557669&text=${botMessege}`;
      async function fetchAsync(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      }
      fetchAsync(url);

      if (document.querySelector("#name").matches(".input-error")) {
        document.querySelector("#name").classList.remove("input-error");
        document.querySelector("#errorText").classList.remove("error-text1");
        document.querySelector("#closestBtn").classList.remove("close1-btn");
        document.querySelector("#closestBtn1").classList.remove("closes-btn1");
      }
      if (document.querySelector("#tel").matches(".tel-error")) {
        document.querySelector("#tel").classList.remove("tel-error");
        document.querySelector("#errorTel").classList.remove("error-tel1");
        document
          .querySelector("#closestBtn")
          .classList.remove("modal-closest-btn");
        document.querySelector("#closestBtn").classList.remove("close1-btn");
        document.querySelector("#closestBtn1").classList.remove("closes-btn1");
      }

      e.target[0].value = "";

      e.target[1].value = "";

      e.target[2].value = "";

      openGreatModal();
    } else {
      if (e.target[0].value.length < 1) {
        document.querySelector("#name").classList.add("input-error");
        document.querySelector("#errorText").classList.add("error-text1");

        document.querySelector("#closestBtn").classList.add("close1-btn");
        document.querySelector("#closestBtn1").classList.add("close2-btn");
      }
      if (e.target[1].value.length < 1) {
        document.querySelector("#tel").classList.add("tel-error");
        document.querySelector("#errorTel").classList.add("error-tel1");
        document
          .querySelector("#closestBtn")
          .classList.add("modal-closest-btn");
        document.querySelector("#closestBtn").classList.add("close1-btn");
        document.querySelector("#closestBtn1").classList.add("close2-btn");
      }
    }
  };

  const setDuration = (e) => {
    document.querySelectorAll(".aside-btn").forEach((e) => {
      e.classList.remove("aside-active");
    });
    e.target.classList.toggle("aside-active");
  };

  const [t, i18next] = useTranslation();

  useEffect(() => {
    axios
      .get(BASE_URL + "promotions")
      .then((res) => setDiscount(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(BASE_URL + "companies")
      .then((res) => {
        setCompany(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(BASE_URL + "products")
      .then((res) => {
        setProducts(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="aside-list">
      <div className="aside">
        <div className="container">
          <div className="aside-title">
            <div className="aside-item">
              {company?.map((evt, i) => (
                <Link
                  to={`/${evt?.id}`}
                  className="aside-btn"
                  key={i}
                  onClick={(e) => {
                    setDuration(e);
                    setLinkId(evt.id);
                    window.scrollTo({ top: 3700 });
                  }}
                >
                  {evt[`title_${i18next.language}`]}
                </Link>
              ))}
            </div>
            <span className="aside-span">
              <p className="aside-text">{t("uskuna")}</p>
              <h3 className="aside-name">{t("uzexim")}</h3>
            </span>
          </div>
        </div>
      </div>
      <div className="aside-page">
        <div className="aside-left">
          <ImageSlider slides={products} />
          <button onClick={handleBuy} className="aside-button">
            {t("buy")}
          </button>
        </div>
        <div className="aside-box">
          <span className="aside-spans">
            <p className="aside-text">{t("uskuna")}</p>
            <h3 className="aside-name">{t("uzexim")}</h3>
          </span>
          <div
            onScroll={() => {
              let elements = document.querySelectorAll(".aside-titles");
              for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("opasity-killer");
              }
              elements[
                Math.round(
                  document.querySelector(".aside-right").scrollTop / 170
                ) + 1
              ].classList.add("opasity-killer");
            }}
            className="aside-right"
          >
            {discount?.map((evt, i) => (
              <div
                key={i}
                className={
                  i == 1 ? "aside-titles opasity-killer" : "aside-titles"
                }
              >
                <img
                  src={`${BASE_URL}uploads/images/${evt.img_src}`}
                  alt=""
                  className="aside-logo"
                />
                <div className="aside-items">
                  <h3 className="aside-subname">
                    {evt[`title_${i18next.language}`]}
                  </h3>
                  <p className="aside-texts">
                    {evt[`description_${i18next.language}`]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="aside-box-right">
          <span className="aside-spans">
            <p className="aside-text">{t("uskuna")}</p>
            <h3 className="aside-name">{t("uzexim")}</h3>
          </span>
          <div
            onScroll={() => {
              let elements = document.querySelectorAll(".aside-titles1");
              for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("opasity-killer1");
              }
              elements[
                Math.round(
                  document.querySelector(".aside-right1").scrollTop / 45
                ) + 1
              ].classList.add("opasity-killer1");
            }}
            className="aside-right1"
          >
            {discount?.map((evt, i) => (
              <div
                key={i}
                className={
                  i == 1 ? "aside-titles1 opasity-killer1" : "aside-titles1"
                }
              >
                <img
                  src={`${BASE_URL}uploads/images/${evt.img_src}`}
                  alt=""
                  className="aside-logo"
                />
                <div className="aside-items">
                  <h3 className="aside-subname">
                    {evt[`title_${i18next.language}`]}
                  </h3>
                  <p className="aside-texts">
                    {evt[`description_${i18next.language}`]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     

      <BuyModal showbuy={buy}>
        <button onClick={() => setBuy()} className="aside-modal-close">
          <img src={close} alt="" className="aside-modal-img" />
        </button>
        <div className="aside-modal">
          <h3 className="aside-modal-name">{t("aside1")}</h3>
          <p className="aside-modal-text">{t("aside2")}</p>
          <form onSubmit={formBtn} action="" className="aside-form">
            <input
              type="name"
              name="name"
              id="name"
              placeholder={t("name")}
              className="aside-input"
            />
            <input
              type="number"
              name="tel"
              id="tel"
              placeholder={t("number")}
              className="aside-input"
            />
            <textarea
              className="aside-textarea"
              name="tel"
              id="tel"
              maxlength="14"
              required
              placeholder={t("aside3")}
            />
            <div className="aside-form-title">
              <button type="submit" className="aside-form-submit">
                {t("send")}
              </button>
              <a href="tel:+998712770707" className="aside-form-call">
                {t("tel")}
              </a>
            </div>
          </form>
        </div>
      </BuyModal>

      <ModalSucces shows={greatModal}>
        
        <h3 className="form-modal-name">{t("succes")}</h3>
        <div className="form-modal-title">
          <a
            href="/"
            onClick={() => window.scrollTo({ top: 0 })}
            className="form-modal-link"
          >
            Ok
          </a>
        </div>
      </ModalSucces>
    </div>
  );
}
