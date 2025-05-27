import React from "react";
import "./AboutSection.css";

const AboutPage = () => {
  const cards = [
    { id: 1, title: "Student Achievements", link: "#", },
    { id: 2, title: "Accreditation", link: "#", },
    { id: 3, title: "Employment", link: "#", },
  ];

  return (
    <div className="about-container">
      <section className="intro-section">
        <div className="intro-image">
          <img src="/About-building.jpg" alt="Zaytuna Seal" />
        </div>
        <div className="intro-text">
          <h2>Our Mission</h2>
          <p>
            Zaytuna College aims to educate and prepare morally committed
            professional, intellectual, and spiritual leaders who are grounded
            in the Islamic scholarly tradition and conversant with the cultural
            currents and critical ideas shaping modern society.
          </p>
          <p>
            In 2009, Zaytuna College was established in Berkeley, California, on
            the foundation of a thriving community committed to studying the
            Muslim classics...
          </p>
        </div>
      </section>

      <section className="card-section">
        {cards.map((card) => (
          <a key={card.id} href={card.link} className="card">
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>LEARN MORE</p>
            </div>
          </a>
        ))}
      </section>

      <section className="campus-section">
        <h2>The Zaytuna College Campus</h2>
        <p>
          In summer 2015, Zaytuna completed its move to the neighborhood of Holy
          Hill... Zaytuna’s students and faculty engage with different faith
          traditions.
        </p>
        <p>
          <strong>Lower Campus Buildings:</strong><br />
          • 2401 Le Conte Avenue (Bookstore, Sanctuary, Admin offices)<br />
          • 2479 Le Conte Avenue (student apartments)<br />
          • 1712 Euclid Avenue (male dormitory)
        </p>
        <p>
          <strong>Upper Campus:</strong> A nine-acre property at 2770 Marin
          Avenue, with classrooms, gardens, and a serene environment.
        </p>
        <blockquote>
          “Qul Rabbi zidnī ‘ilman” (“Say: O Lord, increase me in knowledge”)
          <br />– The Qur’anic quotation from sūrah Tā Hā, verse 114.
        </blockquote>
      </section>
    </div>
  );
};

export default AboutPage;
