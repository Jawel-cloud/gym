import React, { useState } from "react";
import g1 from "./Assets/g1.jpg"
import g2 from "./Assets/g2.jpg"
import g3 from "./Assets/g3.jpg"
import g4 from "./Assets/g4.jpg"
import g5 from "./Assets/g5.jpg"
import g6 from "./Assets/g6.jpg"
import g7 from "./Assets/g7.jpg"
import g8 from "./Assets/g8.jpg"

const PictureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [g1, g2, g3, g4, g5, g6, g7, g8,];

  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slider">
      <button onClick={prevImage}>{"<"}</button>
      <img src={images[currentIndex]} alt="slider" />
      {/* <img src={g1} alt="slider" /> */}
      <button onClick={nextImage}>{">"}</button>
    </div>
  );
};

export default PictureSlider;
