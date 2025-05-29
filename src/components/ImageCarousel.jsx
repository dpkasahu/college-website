import React, { useState } from "react";
import "./ImageCarousel.css";

const images = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
  "https://picsum.photos/800/400?random=4",
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>
        &#8592;
      </button>
      <div className="carousel-slide">
        <img src={images[index]} alt={`Slide ${index}`} />
      </div>
      <button className="arrow right" onClick={nextSlide}>
        &#8594;
      </button>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
