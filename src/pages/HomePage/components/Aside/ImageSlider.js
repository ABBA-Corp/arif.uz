import React from "react";
import { useState } from "react";
import right from "../../../../assets/icons/right.png";
import left from "../../../../assets/icons/left.png";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  transition: "0.4s ease",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 1;
    const newIndex = isFirstSlide ? slides?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides?.length - 1;
    const newIndex = isLastSlide ? 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} className="aside-button-left">
          <img src={left} />
        </div>
        <div onClick={goToNext} className="aside-button-right">
          <img src={right} />
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        <img
          className="aside-img"
          src={`https://api.arif.uz/uploads/images/${slides[currentIndex]?.img_src}`}
        />
      </div>
      <div className="aside-slider-bottom">
        0{currentIndex} / 0{slides.length - 1}
      </div>
    </div>
  );
};

export default ImageSlider;
