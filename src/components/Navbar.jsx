import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

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
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    {/* <li><a href="/academics">Academics</a></li> */}
    <li><a href="/admissions">Admissions</a></li>
    <li><a href="/campus-life">Campus Life</a></li>
    {/* <li><a href="/give">Give</a></li>
    <li><a href="/apply">Apply</a></li> */}

  </ul>
      <button className="navbar-button">Contact us</button>
    </nav>
  );
};

export default Navbar;
