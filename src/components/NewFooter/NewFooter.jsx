import React from "react";
import "./NewFooter.css";
import arifLogo from "../../assets/img/footer-img.svg";
import mobile from "../../assets/img/mobile.svg";

const NewFooter = () => {
  return (
    <div className="newfooter">
      <div className="container">
        <div className="newfooter-list">
          <img src={arifLogo} alt="" className="newfooter-icon" />
          <a href="#" className="newfooter-link">
            <div className="newfooter-title">
              <img src={mobile} alt="" className="newfooter-logo" />
              <p className="newfooter-contact">Qo'ng'iroq qilish</p>
            </div>
          </a>
        </div>
        <div className="newfooter-page">
          <ul className="newfooter-titles">
            <h3 className="newfooter-name">Kompaniyamiz</h3>
            <li className="newfooter-item">
              <a href="#" className="newfooter-link">
                Korxonalar
              </a>
            </li>
            <li className="newfooter-item">
              <a href="#" className="newfooter-link">
                Biz haqimizda
              </a>
            </li>
            <li className="newfooter-item">
              <a href="#" className="newfooter-link">
                Yangiliklar
              </a>
            </li>
            <li className="newfooter-item">
              <a href="#" className="newfooter-link">
                Tadbirlar
              </a>
            </li>
          </ul>
          <ul className="newfooter-titles">
            <h3 className="newfooter-name">Aloqa</h3>
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
              <a href="#" className="newfooter-link">
                Toshkent shahar, Uchtepa <br />
                tumani, 283A uy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
