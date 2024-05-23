import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {christmasnailart, christmasplaid, multiplenails, christmas, grinchnails} from './images/index'

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      url: christmasnailart,
      alt: "christmasnailart",
    },
    {
      url: christmasplaid,
      alt: "christmasplaid",
    },
    {
      url: multiplenails,
      alt: "multiplenails",
    },
    {
      url: christmas,
      alt: "nail3",
    },
    {
      url: grinchnails,
      alt: "nail3",
    },
  ];

  const plusSlides = useCallback(
    (n) => {
      let newSlideIndex = currentSlide + n;
      if (newSlideIndex >= slides.length) {
        newSlideIndex = 0;
      } else if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
      }
      setCurrentSlide(newSlideIndex);
    },
    [currentSlide, slides.length]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      plusSlides(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [plusSlides]);

  return (
    <div
      className="slideshow-container"
      style={{
        backgroundImage: `url(${slides[currentSlide].url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black",
      }}
    >
      <div className="box-slideshow" onClick={() => navigate("./Services")}>
        <div className="paragraph">
          <p>
            My mission is to provide exceptional nail care services that ensures
            my clients leave with beautiful, healthy nails and a sense of joy
            and satisfaction.
            
            <p>
              I prioritize the highest standards of sanitation and customer care
              to create a safe, welcoming, and relaxing environment.
            </p>
          </p>
          <button className="button-75">Book</button>
        </div>
      </div>
      <h2 className="background-size-slideshow"> </h2>
    </div>
  );
}

export default Slideshow;
