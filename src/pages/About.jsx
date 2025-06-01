import React from "react";
import "./AboutSection.css";
import ImageCarousel from "../components/ImageCarousel";

const AboutPage = () => {
  const cards = [
    {
      id: 1,
      title: "Student Achievements",
      link: "#",
      imageUrl: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      title: "Accreditation",
      link: "#",
      imageUrl: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      title: "Employment",
      link: "#",
      imageUrl: "https://picsum.photos/300/200?random=3",
    },
  ];

  return (
    <div className="about-container">
      <section className="intro-section">
        <div className="intro-image">
          <img src="/About-building.jpg" alt="GIETU Campus" loading="lazy" />
        </div>
        <div className="intro-text">
          <h2>ABOUT GIET UNIVERSITY</h2>
          <p>
            GIET University, Gunupur (formerly known as Gandhi Institute of
            Engineering and Technology) was established by the Vidya Bharati
            Educational Trust in 1997. Located amidst the lush greenery and
            foothills of the Eastern Ghats, the university offers a serene and
            conducive environment for learning.
          </p>
          <p>
            Since its inception, GIET University has been at the forefront of
            technological advancements and innovative teaching methods. 
            With
            state-of-the-art infrastructure and world-class facilities, the
            university strives to provide a disciplined and progressive
            education system.
          </p>
        </div>
      </section>

      <section className="card-section">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            className="card"
            aria-label={`Learn more about ${card.title}`}
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="card-image"
              loading="lazy"
            />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>LEARN MORE</p>
            </div>
          </a>
        ))}
      </section>

      <section className="mission-section">
        <div className="mission-image">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-arrow-hitting-target_23-2151266523.jpg?ga=GA1.1.188686754.1737427426&semt=ais_hybrid&w=740"
            alt="College Mission"
            loading="lazy"
          />
        </div>
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            1) To create an innovative and committed workforce to cater to the
            societal, environmental, and economic needs of the nation.
          </p>
          <p>
            2) To promote education and research globally at par with
            international standards.
          </p>
          <p>
            3) To prepare future leaders with the latest skills to become
            entrepreneurs or employable.
          </p>
          <p>
            4) To support and uplift meritorious students from this tribal area
            to represent as ambassadors in all forums as part of our social
            responsibility.
          </p>
        </div>
      </section>

      <section className="campus-section">
        <div className="campus-container">
          <div className="campus-left">
            <div className="campus-box">
              GIET University is home to many national and international
              students. The campus boasts modern infrastructure with every
              construction equipped with state-of-the-art facilities.
            </div>
            <div className="campus-box">
              It is a peaceful paradise, far away from the noise and bustle of
              urban areas. The campus is a high-tech oriented territory at par
              with the world's leading global educational institutions.
            </div>
            <div className="campus-box">
              The university is strategically located, making it the perfect
              choice for students who wish to pursue world-class education in
              India.
            </div>
            <div className="campus-box">
              The campus is filled with acres of spectacular greenery and views
              of the surrounding hills. In addition to excellent academics, GIET
              University offers students abundant opportunities for recreational
              and outdoor activities to foster overall development.
            </div>
          </div>

          <div className="campus-right">
            <h2>GIET University Campus</h2>
            <div className="campus-highlight-box">
              <p>
                GIET University, Gunupur - A tranquil paradise, away from the
                noise & bustle of an urban area, surrounded by lush greenery and
                nestled in the beautiful foothills of eastern India. It is a
                beautiful, unique & ineffable place which exudes positive
                energy, spiritual epiphany, sense of serendipity and produces
                intellectual, cultural, social giants & academic leaders.
              </p>
              <p>
                GIET University leaps forward with a remarkable vision to stand
                at par as a globally recognized University. It strives to offer
                the highest quality academics backed by profound research and
                advanced teaching methods for students to emerge as the global
                leaders and entrepreneurs of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageCarousel />
    </div>
  );
};

export default AboutPage;
