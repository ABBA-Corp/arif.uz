import React from "react";
import "./Sublime.css";
import download from "../../../../assets/img/download.png";
import dot from "../../../../assets/img/div.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../../../services";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import trues from "../../../../assets/icons/true.svg";

const Sublime = () => {
  const [news, setNews] = useState([]);
  const [copy, setCopy] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(BASE_URL + `news/${id}`)
      .then((res) => setNews(res?.data?.data))
      .catch((err) => console.log(err));
  }, [id]);

  const [t, i18next] = useTranslation();
  const [information, setInformation] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + "news")
      .then((res) => setInformation(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopy(true);
  };

  return (
    <div className="sublime">
      <div className="container">
        <div className="sublime-page">
          <div className="sublime-left">
            <h2 className="sublime-name">
              {news[`title_${i18next.language}`]}
            </h2>
            <div className="sublime-title">
              <button onClick={handleClick} className="sublime-btn">
                {copy ? (
                  <img src={trues} alt="" className="sublime-logos" />
                ) : (
                  <img src={download} alt="" className="sublime-logo" />
                )}
              </button>
              <span className="sublime-span">
                {!!news?.worker && news?.createdAt.slice(0, 10)}
              </span>
            </div>
            <img
              src={`${BASE_URL}uploads/images/${news?.img_src}`}
              alt=""
              className="sublime-img"
            />
            <h3 className="sublime-names">By {news?.worker?.name}</h3>
            <h5 className="sublime-subnames">
              {!!news.worker && news?.worker[`position_${i18next?.language}`]}
            </h5>
            <img src={dot} alt="" className="sublime-pic" />
            <p className="sublime-text">{news[`text_${i18next?.language}`]}</p>
          </div>
          <div className="sublime-right">
            <h3 className="sublime-names">{t("news2")}</h3>
            {information?.map((evt, i) => (
              <Link id={evt?.id} key={i} to={`/news/about=${evt?.id}`}>
                <div className="sublime-item">
                  <p className="sublime-texts">
                    {evt[`text_${i18next.language}`]}
                  </p>
                  <spam className="sublime-spans">
                    {!!news?.createdAt && news?.createdAt.slice(0, 10)}
                  </spam>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sublime;
