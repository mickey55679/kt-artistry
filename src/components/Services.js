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
//      Manicures:

// Kid’s Manicure with Regular Polish
// Gel/Shellac Manicure
// GelX fill
// Gelx Nails fullset
// Manicure
// Polish Change
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
//      Pedicures:
// Deluxe Pedicure with Gel/Shellac
// Basic Pedicure with Gel/Shellac
// KT pedicure
// Deluxe pedicure
// Basic Pedicure

// Nail Enhancements:

// Ombre Nails with extensions
// Ombre Dipping Powder on Natural Nails
// Dipping powder with extensions
// Fullset acrylics with gel polish
// Acrylic fill with gel
// Dipping Powder

// Nail Maintenance:

// Nails trimming
// Luminary Nails Fill
// Luminary Nails
// Shape/matte/design
// Nail Art
// Specialty Services:

// French design
// Kid’s Dipping powder
// Men’s Mani/Pedi Deluxe
// Men’s Mani/Pedicure (Basic)
// Miscellaneous:

// Nail Removal
// $15.00
// 30 mins
// Nail Removal
    
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
