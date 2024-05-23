import React, { useState } from "react";
import ServicesItem from "./Servicesitem";
import { v4 as uuidv4 } from "uuid";
import {multiplenails, spider, christmas, christmasnailart} from "./images/index"


function Services({ addToCart, removeFromCart }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterSelection = (category) => {
    setActiveFilter(category);
  };
   const serviceData = [
     // Manicures
     {
       key: uuidv4(),
       category: "manicures",
       image: spider,
       title: "Gel/Shellac Manicure",
       description: "",
       price: 50,
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       key: uuidv4(),
       category: "manicures",
       image: christmasnailart,
       title: "Kid's Manicure with Regular Polish",
       description: "",
       price: 25,
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     // Pedicures
     // Add similar objects for pedicures, nail enhancements, etc.
   ];
  return (
    <div className="main">
      <h2>Nail Services</h2>
      <div id="myBtnContainer">
        <button
          onClick={() => filterSelection("all")}
          className={`btn ${activeFilter === "all" ? "active" : ""}`}
        >
          Show all
        </button>
        <button
          onClick={() => filterSelection("manicures")}
          className={`btn ${activeFilter === "manicures" ? "active" : ""}`}
        >
          Manicures
        </button>
        <button
          onClick={() => filterSelection("pedicures")}
          className={`btn ${activeFilter === "pedicures" ? "active" : ""}`}
        >
          Pedicures
        </button>
      </div>
      <div className="row">
        {serviceData.map((item) => {
          if (activeFilter === "all" || item.category === activeFilter) {
            return (
              <ServicesItem
                key={uuidv4()} // Generate a unique key
                category={item.category}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                onAddToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          }
          return null; // Skip rendering if item does not match active filter
        })}
      </div>
    </div>
  );
}

export default Services;
