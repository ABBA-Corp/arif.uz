import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Language.css";

const languages = ["en", "ru", "uz"];

const Language = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng")
  );

  const onChangeLanguage = (value) => {
    localStorage.setItem("i18nextLng", value);
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  };

  const [logo, setLogo] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="nav--langs">
     {languages?.map(lang => (
        <p
          key={lang}
          onClick={() => onChangeLanguage(lang)}
        >
          {lang}
        </p>
      ))}
    </div>
  );
};

export default Language;


