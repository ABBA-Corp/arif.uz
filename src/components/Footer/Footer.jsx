import React from "react";
import "./Footer.css";
import arif from "../../assets/img/arif.png";
import { Link } from "react-router-dom";
import Instagram from "../../assets/icons/instagram";
// import Twitter from "../../assets/icons/twitter";
import Facebook from "../../assets/icons/facebook";
// import Github from "../../assets/icons/github";
import { useTranslation } from "react-i18next";
import Call from "../../assets/icons/call";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-title">
          <div className="footer-list footer__list">
            <div className="footer-sub">
              <img src={arif} alt="" className="footer-logos" />
              <p className="footer-text">{t("xojalik")}</p>
            </div>
            <p className="footer-texts">{t(`footer2`)}</p>
            <ul className="footer-lists">
              <li className="footer-items">
                <a
                  href="https://www.instagram.com/uzexim/"
                  className="footer-links"
                >
                  <Instagram />
                </a>
              </li>
              <li className="footer-items">
                <a
                  href="https://www.facebook.com/people/Uzexim/100079201327733/"
                  className="footer-links"
                >
                  <Facebook />
                </a>
              </li>
              <li className="footer-items">
                <a href="tel:+998950701070" className="footer-links">
                  <Call />
                </a>
              </li>
              <li className="footer-items">
                <a
                  href="https://t.me/uzeximmachinery"
                  className="footer-links footer-telegram"
                >
                  <FaTelegramPlane />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list footer__list">
            <h3 className="footer-name">{t("company")}</h3>
            <ul className="footer--list ">
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 500 })}
                  to="/"
                  className="footer-link"
                >
                  {t(`head3`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 2800 })}
                  to="/"
                  className="footer-link"
                >
                  {t(`head2`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to="/news"
                  className="footer-link"
                >
                  {t(`head5`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 4800 })}
                  to="/"
                  className="footer-link"
                >
                  {t(`party`)}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footer-name footer__names"> {t(`head4`)}</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <a href="tel:+998950000755" className="footer-link">
                  +998950000755
                  </a>
              </li>
              <li className="footer-item">
                <a href="tel:+998712770707" className="footer-link">
                  +998712770707
                </a>
              </li>
              <li className="footer-item">
                <a href="mailto:info@arif.uz" className="footer-link">
                info@arif.uz
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="https://www.google.com/maps/place/SEMENTO/@41.2766913,69.2158004,15z/data=!4m2!3m1!1s0x0:0x2de5ffe55005d8b8?sa=X&ved=2ahUKEwiKv9yprPf8AhUYD-wKHXVjCIIQ_BJ6BAhYEAg"
                  className="footer-link"
                >
                  {t("manzil")} <br />
                  {t("manzil1")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
