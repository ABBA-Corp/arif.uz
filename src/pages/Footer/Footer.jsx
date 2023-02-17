import React from "react";
import "./Footer.css";
import arif from "../../assets/img/ariff.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Insta from "../../assets/icons/insta";
import Twit from "../../assets/icons/twit";
import Face from "../../assets/icons/face";
import Git from "../../assets/icons/git";
import Call from "../../assets/icons/call";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footerr">
      <div className="container">
        <div className="footer-title">
          <div className="footer-list">
            <div className="footer-sub">
              <img src={arif} alt="" className="footer-logos" />
              <p className="footerr-text">{t("xojalik")}</p>
            </div>
            <p className="footerr-texts">{t(`footer2`)}</p>
            <ul className="footer-lists">
              <li className="footerr-items">
                <a
                  href="https://www.instagram.com/uzexim/"
                  className="footerr-links"
                >
                  <Insta />
                </a>
              </li>
              <li className="footerr-items">
                <a
                  href="https://www.facebook.com/people/Uzexim/100079201327733/"
                  className="footerr-links"
                >
                  <Face />
                </a>
              </li>
              <li className="footerr-items">
                <a href="tel:+998950701070" className="footerr-links">
                  <Call />
                </a>
              </li>
              <li className="footerr-items">
                <a href="https://t.me/uzeximmachinery" className="footerr-links footer-teleg">
                  <FaTelegramPlane />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list footer__list">
            <h3 className="footerr-name">{t("company")}</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="footerr-link"
                >
                  {t(`head3`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 3200 })}
                  to="/"
                  className="footerr-link"
                >
                  {t(`head2`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to="/news"
                  className="footerr-link"
                >
                  {t(`head5`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 8300 })}
                  to="/"
                  className="footerr-link"
                >
                  {t(`party`)}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footerr-name"> {t(`head4`)}</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <a href="tel:+998995595353" className="footerr-link">
                  +998995595353
                </a>
              </li>
              <li className="footer-item">
                <a href="tel:+998712770707" className="footerr-link">
                  +998712770707
                </a>
              </li>
              <li className="footer-item">
                <a href="mailto:info@arifgroup.uz" className="footerr-link">
                  info@arifgroup.uz
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="https://goo.gl/maps/FqPydKZVYZhJWwxf7"
                  className="footerr-link"
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
