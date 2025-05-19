import React from 'react';
import '../style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.jpg" alt="logo" className="navbar-logo" />
        <div className="navbar-text">
          <p></p>
          <h1>GIET UNIVERSITY</h1>
          <p className="location"> Gunupur, Odisha</p>
        </div>
      </div>
      <ul className="navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Program</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Campus</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
      <button className="navbar-button">Contact us</button>
    </nav>
  );
};

export default Navbar;
