import React, { useState } from "react";
import ServicesItem from "./Servicesitem";
import {multiplenails, spider, christmas, christmasnailart} from "./images/index"

function Services({ addToCart, removeFromCart }) {
  const [filter, setFilter] = useState("all");
  const [activeButton, setActiveButton] = useState("all");

  const filterSelection = (category) => {
    setFilter(category);
    setActiveButton(category);
    const elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (category === "all" || element.classList.contains(category)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };

  return (
    <div className="main">
      <h2>Nail Services</h2>
      <div id="myBtnContainer">
        <button
          className={`btn ${activeButton === "all" ? "active" : ""}`}
          onClick={() => filterSelection("all")}
        >
          Show all
        </button>
        <button
          className={`btn ${activeButton === "manicures" ? "active" : ""}`}
          onClick={() => filterSelection("manicures")}
        >
          Manicures
        </button>
        <button
          className={`btn ${activeButton === "pedicures" ? "active" : ""}`}
          onClick={() => filterSelection("pedicures")}
        >
          Pedicures
        </button>
        <button
          className={`btn ${
            activeButton === "nailEnhancements" ? "active" : ""
          }`}
          onClick={() => filterSelection("nailEnhancements")}
        >
          Nail Enhancements
        </button>
        <button
          className={`btn ${
            activeButton === "nailMaintenance" ? "active" : ""
          }`}
          onClick={() => filterSelection("nailMaintenance")}
        >
          Nail Maintenance
        </button>
        <button
          className={`btn ${
            activeButton === "specialtyServices" ? "active" : ""
          }`}
          onClick={() => filterSelection("specialtyServices")}
        >
          Specialty Services
        </button>
        <button
          className={`btn ${activeButton === "miscellaneous" ? "active" : ""}`}
          onClick={() => filterSelection("miscellaneous")}
        >
          Miscellaneous
        </button>
      </div>
      <div className="row">
        {/* Manicures */}
        <ServicesItem
          category="manicures"
          image={spider}
          title="Gel/Shellac Manicure"
          description=""
          price={50}
          onAddToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <ServicesItem
          category="manicures"
          image={christmasnailart}
          title="Kid's Manicure with Regular Polish"
          description=""
          price={25}
          onAddToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <ServicesItem
          category="manicures"
          image=""
          title="GelX fill"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="manicures"
          image=""
          title="Gelx Nails fullset"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="manicures"
          image=""
          title="Manicure"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="manicures"
          image=""
          title="Polish Change"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        {/* Pedicures */}
        <ServicesItem
          category="pedicures"
          image=""
          title="Deluxe Pedicure with Gel/Shellac"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="pedicures"
          image=""
          title="Basic Pedicure with Gel/Shellac"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="pedicures"
          image=""
          title="KT pedicure"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="pedicures"
          image=""
          title="Deluxe pedicure"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="pedicures"
          image=""
          title="Basic Pedicure"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        {/* Nail Enhancements  */}
        <ServicesItem
          category="nailEnhancements"
          image=""
          title="Ombre Nails with extensions"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="nailEnhancements"
          image=""
          title="Ombre Dipping Powder on Natural Nails"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="nailEnhancements"
          image=""
          title="Dipping powder with extensions"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="nailEnhancements"
          image=""
          title="Fullset acrylics with gel polish"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="nailEnhancements"
          image=""
          title="Acrylic fill with gel"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="nailEnhancements"
          image=""
          title="Dipping Powder"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        {/* Nail Maintenance */}
        <ServicesItem
          category="nailMaintenance"
          image=""
          title="Nails trimming"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="nailMaintenance"
          image=""
          title="Luminary Nails Fill"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="nailMaintenance"
          image=""
          title="Luminary Nails"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="nailMaintenance"
          image=""
          title="Shape/matte/design"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="nailMaintenance"
          image=""
          title="Nail Art"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        {/* Specialty Services */}
        <ServicesItem
          category="specialtyServices"
          image=""
          title="French design"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="specialtyServices"
          image=""
          title="Kid's Dipping powder"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="specialtyServices"
          image=""
          title="Men's Mani/Pedi Deluxe"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        <ServicesItem
          category="specialtyServices"
          image=""
          title="Men's Mani/Pedicure (Basic)"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
        {/* Miscellaneous */}
        <ServicesItem
          category="miscellaneous"
          image=""
          title="Nail Removal"
          description=""
          price={40}
          onAddToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default Services;
