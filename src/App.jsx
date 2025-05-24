import React from 'react';
import Navbar from './components/Navbar';
import './style.css';

function App() {
  return (
    <div>
      <Navbar />
      <header
        className="header"
        style={{ backgroundImage: "url('/dome-bg.jpg')" }}
      >
        <h1>We Ensure better education <br /> for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education
        </p>
        <button className="header-button">
          Explore more
        </button>
      </header>
    </div>
  );
}

export default App;
