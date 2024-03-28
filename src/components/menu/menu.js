import "./menu.css"
import Dish from "../dish/dish"
import React,{ useEffect } from "react";
const Menu = ({ dishes }) => {
  // Get unique categories
  const categories = [...new Set(dishes.map(dish => dish.category))];

  useEffect(() => {
    // Scroll to the correct section when the page has fully loaded
    window.onload = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
  }, []); // Run only once when the component mounts


  return (
    <div className="container">
      <div className="menu-container text">
        <h1 className="page-heading">Our Menu</h1>
        {categories.map((category, index) => (
          <div key={index} id={category.toLowerCase()} className="menu-category">
            <h2 className="page-heading">{category.toUpperCase()}</h2>
            {dishes
              .filter(dish => dish.category === category)
              .map((dish, index) => (
                <Dish dish={dish} key={index} />
                
              ))}
              {index !== categories.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu