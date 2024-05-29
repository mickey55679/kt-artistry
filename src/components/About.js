import familyImg from "./images/Family.jpeg";
import Reviews from "./reviews";

function About() {
  return (
    <div className="about-container">
      <div className="column-one">
        <img src={familyImg} alt="Family" />
      </div>
      <div className="column-one">
        <p>
          Welcome to KT-Artistry, the creative playground of nail artistry
          where beauty and imagination meet. I'm [Owner's Name], founder and
          lead nail artist. My journey in the nail industry began over a decade
          ago, driven by a passion for fashion and a deep-seated desire to bring
          each client's unique style to their fingertips. At KT-Artistry, we
          believe in the power of pampering and the impact of impeccable nails.
          Our salon is a sanctuary where creativity flows as freely as the
          coffee, and where each treatment, from luxurious manicures to bespoke
          nail art, is a celebration of individuality. 
          Come in, relax, and let
          us treat you to a beautifying experience that's as unforgettable as it
          is transformative.
        </p>
      </div>
      <div className="column-one">
        <Reviews />
      </div>
    </div>
  );
}
export default About;
