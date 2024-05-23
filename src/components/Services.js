import React, { useState } from "react";
import ServicesItem from "./Servicesitem";
import {multiplenails, spider} from "./images/index"

function Services() {
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
        {/* Pedicures */}
        <ServicesItem
          category="pedicures"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="pedicures"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="pedicures"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="pedicures"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="pedicures"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        {/* Nail Enhancements  */}
        <ServicesItem
          category="nailEnhancements"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="nailEnhancements"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="nailEnhancements"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="nailEnhancements"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="nailEnhancements"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="nailEnhancements"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        {/* Nail Maintenance */}
        <ServicesItem
          category="nailMaintenance"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="nailMaintenance"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="nailMaintenance"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="nailMaintenance"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="nailMaintenance"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        {/* Specialty Services */}
        <ServicesItem
          category="specialtyServices"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="specialtyServices"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="specialtyServices"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        <ServicesItem
          category="specialtyServices"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
        {/* Miscellaneous */}
        <ServicesItem
          category="miscellaneous"
          image="/path/to/manicure_image.jpg"
          title="Gel/Shellac Manicure"
          description="A long-lasting polish with a gel finish."
        />
      </div>
    </div>
  );
}

export default Services;
