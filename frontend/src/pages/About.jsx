import React from "react";
import Team from "../shared/TeamCard"; 
import "../styles/about.css"; 
import AboutImage from "../assets/images/About.jpg"
const About = () => {
  return (
    <div className="about">
      {/* Header Section */}
    <section className="about__header">
        <div className="about__header-content">
            <div className="about__header-left">
                <h1>
                Our Safar agency wants to offer you the best experiences and memories
                of your life!
                </h1>
            </div>
        </div>
    </section>


      {/* Image Section */}
      <section className="about__image">
        <img
          src= {AboutImage}
          alt="scenic view"
        />
      </section>

      {/* Team Section */}
      <section className="about__team">
        <h2>Our Team</h2>
        <p>"Your Get Away Card to Unforgettable Experiences"</p>
        <Team />
      </section>
    </div>
  );
};

export default About;