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
     {
       id: uuidv4(),
       category: "manicures",
       image: spider,
       title: "Kid's Manicure with Regular Polish",
       description: "",
       price: 50,
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "manicures",
       image: christmasnailart,
       title: "Gel/Shellac Manicure",
       description: "",
       price: 25,
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },

     {
       id: uuidv4(),
       category: "manicures",
       image: "",
       title: "GelX fill",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "manicures",
       image: "",
       title: "Gelx Nails fullset",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "manicures",
       image: "",
       title: "Manicure",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "manicures",
       image: "",
       title: "Polish Change",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     //      Pedicures:
     {
       id: uuidv4(),
       category: "pedicures",
       image: "",
       title: "Deluxe Pedicure with Gel/Shellac",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "pedicures",
       image: "",
       title: "Basic Pedicure with Gel/Shellac",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "pedicures",
       image: "",
       title: "KT pedicure",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "pedicures",
       image: "",
       title: "Deluxe pedicure",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "pedicures",
       image: "",
       title: "Basic Pedicure",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },

     // Nail-Enhancements:
     {
       id: uuidv4(),
       category: "Nail-Enhancements",
       image: "",
       title: "Ombre Nails with extensions",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Nail-Enhancements",
       image: "",
       title: "Ombre Dipping Powder on Natural Nails",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Nail-Enhancements",
       image: "",
       title: "Dipping powder with extensions",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Nail-Enhancements",
       image: "",
       title: "Fullset acrylics with gel polish",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Nail-Enhancements",
       image: "",
       title: "Acrylic fill with gel",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Nail-Enhancements",
       image: "",
       title: "Dipping Powder",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },

     // Nail-Maintenance:
     {
       id: uuidv4(),
       category: "Nail-Maintenance",
       image: "",
       title: "Nails trimming",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Nail-Maintenance",
       image: "",
       title: "Luminary Nails Fill",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Nail-Maintenance",
       image: "",
       title: "Luminary Nails",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Nail-Maintenance",
       image: "",
       title: "Shape/matte/design",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Nail-Maintenance",
       image: "",
       title: "Nail Art",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     // Specialty-Services:
     {
       id: uuidv4(),
       category: "Specialty-Services",
       image: "",
       title: "French design",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Specialty-Services",
       image: "",
       title: "Kid's Dipping powder",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Specialty-Services",
       image: "",
       title: "Men's Mani/Pedi Deluxe",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
     {
       id: uuidv4(),
       category: "Specialty-Services",
       image: "",
       title: "Men's Mani/Pedicure (Basic)",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },

     // Miscellaneous:
     {
       id: uuidv4(),
       category: "Miscellaneous",
       image: "",
       title: "Nail Removal",
       description: "",
       price: "",
       onAddToCart: addToCart,
       removeFromCart: removeFromCart,
     },
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
        <button
          onClick={() => filterSelection("Nail-Enhancements")}
          className={`btn ${
            activeFilter === "Nail-Enhancements" ? "active" : ""
          }`}
        >
          Nail-Enhancements
        </button>
        <button
          onClick={() => filterSelection("Nail-Maintenance")}
          className={`btn ${
            activeFilter === "Nail-Maintenance" ? "active" : ""
          }`}
        >
          Nail-Maintenance
        </button>
        <button
          onClick={() => filterSelection("Specialty-Services")}
          className={`btn ${
            activeFilter === "Specialty-Services" ? "active" : ""
          }`}
        >
          Specialty-Services
        </button>
        <button
          onClick={() => filterSelection("Miscellaneous")}
          className={`btn ${activeFilter === "Miscellaneous" ? "active" : ""}`}
        >
          Miscellaneous
        </button>
      </div>
      <div className="row">
        {serviceData.map((item) => {
          if (activeFilter === "all" || item.category === activeFilter) {
            return (
              <div className="column show" key={item.key}>
                <ServicesItem
                  category={item.category}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  onAddToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              </div>
            );
          }
          return null; // Skip rendering if item does not match active filter
        })}
      </div>
    </div>
  );
}

export default Services;
