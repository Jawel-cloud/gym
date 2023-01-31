  import React from "react";
  import UpcomingEvents from "./Events";
  import PictureSlider from "./PictureSlider";
  import t1 from "./Assets/t1.jpg";
  import t2 from "./Assets/t2.jpg";
  import t3 from "./Assets/t3.jpg";

  function About() {
    return (
      <>
      <section>
        <div className="container">
        <p>We are a passionate team of fitness enthusiasts dedicated to helping our clients reach their goals. Our state-of-the-art gym offers a wide range of equipment and services to meet the needs of all fitness levels.</p>
        <p>Meet our team:</p>
        <div className="teamContainer">
          <div className="teamMember">
            <img src={t1} alt="Team Member 1" />
            <p>John Doe</p>
            <p>Certified Personal Trainer</p>
          </div>
          <div className="teamMember">
            <img src={t2} alt="Team Member 2" />
            <p>Jane Doe</p>
            <p>Certified Yoga Instructor</p>
          </div>
          <div className="teamMember">
            <img src={t3} alt="Team Member 3" />
            <p>Jim Smith</p>
            <p>Certified Group Fitness Instructor</p>
          </div>
        </div>
        </div>
        <div className="container tour">
        <h2>Take a tour of our gym:</h2>
        <PictureSlider/>
        </div>
        <div className="container">
      <UpcomingEvents/>
      </div>
      </section>
      
      </>
    );
  }
  
  export default About;