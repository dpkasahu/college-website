import React from 'react';
import './CampusLife.css'; // Make sure this CSS file has styling for campus-page

const CampusLife = () => {
  return (
    <div className="campus-page">
      <header className="campus-header">
        <h1>Campus Life at GIET University</h1>
        <p>Experience vibrant student life, culture, and community at GIETU, Gunupur.</p>
      </header>

      <section className="campus-section">
        <h2>🎓 Student Life</h2>
        <p>
          At GIETU, learning goes beyond classrooms. With green surroundings and cutting-edge facilities,
          students enjoy a balanced academic and social experience.
        </p>
      </section>

      <section className="campus-section">
        <h2>🤝 Clubs & Societies</h2>
        <ul>
          <li>Code Warriors (Coding Club)</li>
          <li>Art & Culture Society</li>
          <li>Photography Club</li>
          <li>Music & Dance Troupe</li>
          <li>Literary Circle</li>
        </ul>
      </section>

      <section className="campus-section">
        <h2>🎉 Events & Celebrations</h2>
        <p>
          GIETU hosts events year-round including Renaissance (Techno-Cultural Fest), hackathons, 
          departmental fests, and sports meets.
        </p>
      </section>

      <section className="campus-section">
        <h2>🏠 Hostel Life</h2>
        <p>
          Hostels offer a comfortable, safe environment with 24/7 internet, common rooms, 
          and nutritious meals, fostering lifelong friendships.
        </p>
      </section>

      <section className="gallery-section">
        <h2>📸 Gallery</h2>
        <div className="image-grid">
          <img src="/GIETU.jpg" alt="Campus 1" />
          <img src="/GIETU2.jpg" alt="Campus 2" />
          <img src="/CELEBRITYNIGHT.jpg" alt="Event" />
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
