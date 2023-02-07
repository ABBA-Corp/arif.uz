import React from "react";
import { useTranslation } from "react-i18next";
import './Bottom.css'

const Bottom = () => {
  const {t} = useTranslation()
  return (
    <div className="bottom">
      <div className="container">
        <p className="bottom-name">
          {t("footerbottom")}
        </p>
        <p className="bottom-name bottom-names">{t("since")} </p>
      </div>
    </div>
  );
};

export default Bottom;
