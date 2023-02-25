import React from "react";
import "./NewFooter.css";
import arifLogo from "../../assets/img/footer-img.svg";
import mobile from "../../assets/img/mobile.svg";
import { useTranslation } from "react-i18next";

const NewFooter = () => {
  const {t} = useTranslation()
  return (
    <div className="newfooter">
      <div className="container">
        <div className="newfooter-list">
          <img src={arifLogo} alt="" className="newfooter-icon" />
          <a href="#" className="newfooter-link">
            <div className="newfooter-title">
              <img src={mobile} alt="" className="newfooter-logo" />
              <p className="newfooter-contact">{t("call")}</p>
            </div>
          </a>
        </div>
        <div className="newfooter-page">
          <ul className="newfooter-titles">
            <h3 className="newfooter-name">{t("company")}</h3>
            <li className="newfooter-item">
              <a href="#" className="newfooter-link">
              {t("head3")}
              </a>
            </li>
            <li className="newfooter-item">
              <a href="#" className="newfooter-link">
              {t("head2")}
              </a>
            </li>
            <li className="newfooter-item">
              <a href="#" className="newfooter-link">
              {t("head")}
              </a>
            </li>
            <li className="newfooter-item">
              <a href="#" className="newfooter-link">
                {t("party")}
              </a>
            </li>
          </ul>
          <ul className="newfooter-titles">
            <h3 className="newfooter-name">{t("head4")}</h3>
            <li className="newfooter-item">
              <a href="tel:+998995595353" className="newfooter-link">
                +998995595353
              </a>
            </li>
            <li className="newfooter-item">
              <a href="tel:+998712770707" className="newfooter-link">
                +998712770707
              </a>
            </li>
            <li className="newfooter-item">
              <a href="mailto:info@arifgroup.uz" className="newfooter-link">
                info@arifgroup.uz
              </a>
            </li>
            <li className="newfooter-item">
              <a href="https://www.google.com/maps/place/SEMENTO/@41.2766913,69.2158004,15z/data=!4m2!3m1!1s0x0:0x2de5ffe55005d8b8?sa=X&ved=2ahUKEwiKv9yprPf8AhUYD-wKHXVjCIIQ_BJ6BAhYEAg" className="newfooter-link">
                {t("manzil")} <br />
                {t("manzil1")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
