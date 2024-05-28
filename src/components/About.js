import familyImg from './images/Family.jpeg'


function About() {
  return (
    <div className="about-container">
      <div className="column-one">
        <img src={familyImg} alt="Family" />
      </div>
      <div className="column-one">Column 2</div>
      <div className="column-one">Column 3</div>
    </div>
  );
}
export default About;
