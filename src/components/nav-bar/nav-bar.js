// Import necessary modules and CSS file
import React from 'react';
import "./nav-bar.css";

// Define the NavBar component
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
              {
                categories.map((category, index) =>{
                  return <a href={"/menu#"+category} key={index}>{category}</a>;
                })
              }
            </div>
          </div>
          <a href="/about-us" className="nav-link">About Us</a>
          <a href="/contact-us" className="nav-link">Contact Us</a>
          <a href="/order-now"><button className="order-now-btn">Order Now</button></a>
        </div>
      </div>
    </div>
  );
};

// Export the NavBar component
export default NavBar;
