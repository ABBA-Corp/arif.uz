import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import Arif from "../../assets/icons/arif";
import toggle from "../../assets/icons/toggle.png";
import phone from "../../assets/icons/phone.png";
import arif from "../../assets/img/arif.svg";
import close from "../../assets/img/+.png";
import NavModal from "../../pages/ReactModal/components/NavModal/NavModal";
import Languages from "../Language/Language";
import { useTranslation } from "react-i18next";
import Language from "./Language/Language";

const Navbar = () => {
  const [greatModal, setGreatModal] = useState(false);

  function openGreatModal() {
    setGreatModal(!greatModal);
  }
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
      setLogo(true);
    } else {
      setNavbar(false);
      setLogo(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const { t } = useTranslation();

  const location = useLocation();

  return (
    <>
      <div className={navbar ? "navbar actives" : "navbar"}>
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className={navbar ? "actives" : "navbar-links"}
                to="/"
              >
                {t(`head1`)}
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                onClick={() => window.scrollTo({ top: 5100 })}
                className={navbar ? "actives" : "navbar-links"}
                to="/"
              >
                {t(`head2`)}
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 700 })}
                className={navbar ? "actives" : "navbar-links"}
              >
                {t(`head3`)}
              </Link>
            </li>
            <li className="navbar-item">
              <Link className={navbar ? "actives" : "navbar-links"} to="/">
                <Arif />
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                onClick={() => window.scrollTo({ top: 2600 })}
                className={navbar ? "actives" : "navbar-links"}
                to="/"
              >
                {t(`head6`)}
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                onClick={() => window.scrollTo({ top: 3500 })}
                className={navbar ? "actives" : "navbar-links"}
                to="/"
              >
                {t(`head5`)}
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                onClick={() => window.scrollTo({ top: 5900 })}
                to="/"
                className={navbar ? "actives" : "navbar-links"}
              >
                {t(`head4`)}
              </Link>
            </li>
            <li className="navbar-item">
              <Languages />
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="container">
          <button onClick={openGreatModal} className="navbar-mobile-button">
            <img src={toggle} alt="" className="navbar-logo" />
          </button>
          <Link to="/">
            <img src={arif} alt="" className="navbar-arif" />
          </Link>
          <a href="tel:+998991569652" className="navbar-mogile-link">
            <img src={phone} alt="" className="navbar-icon" />
          </a>
        </div>
      </div>

      <NavModal show={greatModal}>
        <button onClick={() => setGreatModal()} className="navbar-close">
          <img src={close} alt="" />
        </button>
        <ul className="navbar-modal-list">
          <li className="navbar-modal-item">
            <Link
              onClick={() => setGreatModal()}
              to="/"
              className="navbar-modal-link"
            >
              {t(`head1`)}
            </Link>
          </li>
          <li onClick={() => setGreatModal()} className="navbar-modal-item">
            {location.pathname === "/" ? (
              <a
                onClick={() => window.scrollTo({ top: 3100 })}
                href="#"
                className="navbar-modal-link"
              >
                {t(`head2`)}
              </a>
            ) : (
              <Link
                onClick={() => window.scrollTo({ top: 3100 })}
                to="/"
                className="navbar-modal-link"
              >
                {t(`head2`)}
              </Link>
            )}
          </li>
          <li onClick={() => setGreatModal()} className="navbar-modal-item">
            {location.pathname === "/" ? (
              <a
                onClick={() => window.scrollTo({ top: 3100 })}
                href="#"
                className="navbar-modal-link"
              >
                {t(`head3`)}
              </a>
            ) : (
              <Link
                onClick={() => window.scrollTo({ top: 3100 })}
                to="/"
                className="navbar-modal-link"
              >
                {t(`head3`)}
              </Link>
            )}
          </li>
          <li onClick={() => setGreatModal()} className="navbar-modal-item">
            {location.pathname === "/" ? (
              <a
                onClick={() => window.scrollTo({ top: 3200 })}
                href="#"
                className="navbar-modal-link"
              >
                {t(`head6`)}
              </a>
            ) : (
              <Link
                onClick={() => window.scrollTo({ top: 3200 })}
                to="/"
                className="navbar-modal-link"
              >
                {t(`head6`)}
              </Link>
            )}
          </li>
          <li onClick={() => setGreatModal()} className="navbar-modal-item">
            {location.pathname === "/" ? (
              <a
                onClick={() => window.scrollTo({ top: 7500 })}
                href="#"
                className="navbar-modal-link"
              >
                {t(`head4`)}
              </a>
            ) : (
              <Link
                onClick={() => window.scrollTo({ top: 7500 })}
                to="/"
                className="navbar-modal-link"
              >
                {t(`head4`)}
              </Link>
            )}
          </li>
          <li onClick={() => setGreatModal()} className="navbar-modal-item">
            {location.pathname === "/" ? (
              <a
                onClick={() => window.scrollTo({ top: 4700 })}
                href="#"
                className="navbar-modal-link"
              >
                {t(`head5`)}
              </a>
            ) : (
              <Link
                onClick={() => window.scrollTo({ top: 4700 })}
                to="/"
                className="navbar-modal-link"
              >
                {t(`head5`)}
              </Link>
            )}
          </li>
          <li onClick={() => setGreatModal()} className="navbar-modal-item">
            <Language />
          </li>
        </ul>
      </NavModal>
    </>
  );
};

export default Navbar;
