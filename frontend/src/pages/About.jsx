import React from "react";
import Team from "../shared/TeamCard"; 
import "../styles/about.css"; 
import CommonSection from "../shared/CommonSection";

const About = () => {
  return (
    <div className="about">
      <CommonSection title="About Us" />
      {/* Header Section */}
      <section className="about__header">
        <div className='about__header-content'>
          <h1 className='text-center pt-5'>
            Safar wants to offer you the best experiences and memories of your life!
          </h1>
        </div>
      </section>

      {/* Team Section */}
      <section className="about__team">
        <h2>Our Team</h2>
        <p>Your Get Away Card to Unforgettable Experiences</p>
        <Team />
      </section>
    </div>
  );
};

export default About;