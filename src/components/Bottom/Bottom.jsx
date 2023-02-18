import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import './Bottom.css'

const Bottom = () => {
  const {t} = useTranslation()
  const location=  useLocation().pathname
  console.log(location)
  return (
    <div className={`${location === "/" ? "bottom" : "bottom-page"}`} >
      <div className="container">
        <p className={`${location === "/" ? "bottom-name" : "bottom-page-name"}`}>
          {t("footerbottom")}
        </p>
        <p className={`${location === "/" ? "bottom-names" : "bottom-page-names"}`}>{t("since")} </p>
      </div>
    </div>
  );
};

export default Bottom;
