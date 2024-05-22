import {familyPhoto} from './images/index'
import React, { useState } from "react";
import ServicesItem from './Servicesitem';

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
      <h2>PORTFOLIO</h2>
      <div id="myBtnContainer">
        <button className="btn active" onClick={() => filterSelection("all")}>
          Show all
        </button>
        <button className="btn" onClick={() => filterSelection("nature")}>
          Nature
        </button>
        <button className="btn" onClick={() => filterSelection("cars")}>
          Cars
        </button>
        <button className="btn" onClick={() => filterSelection("people")}>
          People
        </button>
      </div>
      <div className="row">
        <div className="row">
          <ServicesItem
            category="nature"
            image="/w3images/mountains.jpg"
            title="Mountains"
            description="Lorem ipsum dolor.."
          />
          <ServicesItem
            category="nature"
            image="/w3images/lights.jpg"
            title="Lights"
            description="Lorem ipsum dolor.."
          />
          <ServicesItem
            category="nature"
            image="/w3images/nature.jpg"
            title="Forest"
            description="Lorem ipsum dolor.."
          />
          <ServicesItem
            category="cars"
            image="/w3images/cars1.jpg"
            title="Retro"
            description="Lorem ipsum dolor.."
          />
          <ServicesItem
            category="cars"
            image="/w3images/cars2.jpg"
            title="Fast"
            description="Lorem ipsum dolor.."
          />
          <ServicesItem
            category="cars"
            image="/w3images/cars3.jpg"
            title="Classic"
            description="Lorem ipsum dolor.."
          />
          <ServicesItem
            category="people"
            image="/w3images/people1.jpg"
            title="Girl"
            description="Lorem ipsum dolor.."
          />
          <ServicesItem
            category="people"
            image="/w3images/people2.jpg"
            title="Man"
            description="Lorem ipsum dolor.."
          />
          <ServicesItem
            category="people"
            image="/w3images/people3.jpg"
            title="Woman"
            description="Lorem ipsum dolor.."
          />
        </div>
      </div>
    </div>
  );
}
export default Services;
