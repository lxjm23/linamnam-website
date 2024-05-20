import React, { useEffect } from 'react';
import './nav-bar.css';
import Script from './script';

const NavBar = ({ categories }) => {
  useEffect(() => {
    const cleanup = Script(); // Initialize script and get cleanup function
    return cleanup; // Clean up event listeners on component unmount
  }, []); // Empty dependency array



import React from 'react';
import "./nav-bar.css";


const NavBar = ({categories}) => {
  console.log(categories)

  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <a href="/" className="logo">Linamnam</a>
        <div className="nav-buttons">
          <a href="/" className="nav-link">Home</a>
          <div className="dropdown">
            <a href="/menu" className="nav-link">Menu</a>
            <div className="dropdown-menu">
              {categories.map((category, index) => (
                <a href={"/menu#" + category} key={index}>{category}</a>
              ))}
            </div>
          </div>
          <a href="/about-us" className="nav-link">About Us</a>
          <a href="/contact-us" className="nav-link">Contact Us</a>
          <a href="/order-now"><button className="order-now-btn">Order Now</button></a>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
};
}

export default NavBar;