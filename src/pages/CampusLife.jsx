import React from 'react';
import './CampusLife.css';

const campusLifeData = [
  {
    title: "Mega Auditorium",
    description: "Entertainment is not an option at GIET University, Gunupur but a foremost aspect as stress...",
    image: "/mega-auditorium.jpg",
    link: "#"
  },
  {
    title: "Elite NCC-University Corps unit of GIETU",
    description: "About NCC Unit in GIET University: The National Cadet Corps is the Indian Military Cadet...",
    image: "/NCC.jpg",
    link: "#"
  },
  {
    title: "GIETU Open Gym",
    description: "The overall well-being of students and staff is the cornerstone of GIETU. As a result,...",
    image: "/open-gym.jpg",
    link: "#"
  },
  {
    title: "GIETU Badminton Ground",
    description: "The physical wellness mantra is the best way to increase students' efficiency and productivity. Therefore,...",
    image: "/Badminton-Ground1.jpg",
    link: "#"
  },
  {
    title: "Techno-Cultural Fest",
    description: "Renaissance fest features tech events, dance, music, drama and more — a student favorite!",
    image: "/fest.jpg",
    link: "#"
  },
  {
    title: "Modern Library",
    description: "A hub of knowledge with thousands of books, journals, and digital resources at students' fingertips.",
    image: "/library.jpg",
    link: "#"
  },
  {
    title: "Hostel Life",
    description: "Safe and homely living with facilities like Wi-Fi, good food, recreation, and a peaceful atmosphere.",
    image: "/hostel.jpg",
    link: "#"
  }
];

const CampusLife = () => {
  return (
    <div className="campus-life">
      <h2 className="campus-title">LIFE AT GIET UNIVERSITY</h2>
      <p className="campus-description">
        The GIET University has a thriving and vibrant population of students from across the Globe. The university has created a unique community atmosphere balancing the course load with extracurricular activities to offer an excellent lifestyle & high quality education in order to round out the study experiences of our students. If you study in GIET University, be guaranteed to receive great education, principles and memories — that would last a lifetime!
      </p>

      {/* Horizontal Scrollable Cards */}
      <div className="cards-container">
        {campusLifeData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <a href={item.link} className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusLife;
