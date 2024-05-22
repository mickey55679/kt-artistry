import React, { useState } from "react";
import ServicesItem from "./Servicesitem";

function Services() {
  const [filter, setFilter] = useState("all");

  const filterSelection = (category) => {
    setFilter(category);
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

  const addActiveClass = (e) => {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    e.target.className += " active";
  };

  return (
    <div className="main">
      <h2>Nail Services</h2>
      <div id="myBtnContainer">
        <button className="btn active" onClick={() => filterSelection("all")}>
          Show all
        </button>
        <button className="btn" onClick={() => filterSelection("manicures")}>
          Manicures
        </button>
        <button className="btn" onClick={() => filterSelection("pedicures")}>
          Pedicures
        </button>
        <button
          className="btn"
          onClick={() => filterSelection("nailEnhancements")}
        >
          Nail Enhancements
        </button>
        <button
          className="btn"
          onClick={() => filterSelection("nailMaintenance")}
        >
          Nail Maintenance
        </button>
        <button
          className="btn"
          onClick={() => filterSelection("specialtyServices")}
        >
          Specialty Services
        </button>
        <button
          className="btn"
          onClick={() => filterSelection("miscellaneous")}
        >
          Miscellaneous
        </button>
      </div>
      <div className="row">
        {/* Example Service Items */}
        <ServicesItem
          category="manicures"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="manicures"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
      </div>
    </div>
  );
}

export default Services;
