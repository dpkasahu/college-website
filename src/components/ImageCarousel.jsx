import React from "react";
import Slider from "react-slick";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const images = [
    {
      url: "https://www.giet.edu/wp-content/uploads/2020/02/campus-view.jpg",
      alt: "Campus View",
    },
    {
      url: "https://giet.edu/wp-content/uploads/2020/03/why-giet1.jpg",
      alt: "Laboratory Facilities",
    },
    {
      url: "https://www.giet.edu/wp-content/uploads/2021/01/why-gietu-placement.jpg",
      alt: "Cultural Fest",
    },
    {
      url: "https://www.giet.edu/wp-content/uploads/2021/01/campus-overview-on-hill.jpg",
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
