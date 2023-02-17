import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import arif from "../../assets/img/navarif.svg";
import Languages from "../Language/Language";
import "./Nav.css";

const Nav = () => {
  const { t } = useTranslation();

  const location = useLocation();

  return (
    <div className="nav">
      <div className="container">
        <ul className="nav-list">
          <li className="navbar-item">
            <Link className="nav-link navbar-links" to="/">
              {t(`head1`)}
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 3100 })}
              className="nav-link navbar-links"
              to="/"
            >
              {t(`head2`)}
            </Link>
          </li>
          <li className="navbar-item">
            {location.pathname === "/news" ? (
              <Link
                onClick={() => window.scrollTo({ top: 2500 })}
                className="nav-link navbar-links"
                to="/"
              >
                {t(`head3`)}
              </Link>
            ) : (
              <Link
                onClick={() => window.scrollTo({ top: 2500 })}
                className="nav-link navbar-links"
                to="/"
              >
                {t(`head3`)}
              </Link>
            )}
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              <img className="nav-arif-img" src={arif} alt="" />
            </Link>
          </li>
          <li className="navbar-item">
            {location.pathname === "/news" ? (
              <a
                onClick={() => window.scrollTo({ top: 6500 })}
                className="nav-link navbar-links"
                href="/"
              >
                {t(`head6`)}
              </a>
            ) : (
              <Link
                className="nav-link navbar-links"
                to="/"
                onClick={() => window.scrollTo({ top: 6500 })}
              >
                {t(`head6`)}
              </Link>
            )}
          </li>
          <li className="navbar-item">
            <Link className="nav-link navbar-links" to="/news">
              {t(`head5`)}
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 6750 })}
              className="nav-link navbar-links"
              to="/"
            >
              {t(`head4`)}
            </Link>
          </li>
          <li style={{ color: "#fff" }} className="nav-item">
            <Languages />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
