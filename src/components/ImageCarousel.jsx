import React from "react";
import Slider from "react-slick";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const images = [
    {
      url: "https://picsum.photos/800/400?random=11",
      alt: "Campus View",
    },
    {
      url: "https://picsum.photos/800/400?random=12",
      alt: "Laboratory Facilities",
    },
    {
      url: "https://picsum.photos/800/400?random=13",
      alt: "Cultural Fest",
    },
    {
      url: "https://picsum.photos/800/400?random=14",
      alt: "Sports Ground",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Campus Highlights</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img.url} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
