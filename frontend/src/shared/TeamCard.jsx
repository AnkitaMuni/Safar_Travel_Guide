import React from "react";
import "./team-card.css"; 
import Pic1 from "../assets/images/Anushka.jpg"; 
import Pic2 from '../assets/images/AnkitaA.jpg';
import Pic3 from '../assets/images/AnkitaM.jpg';


// Data for team members
const teamMembers = [
  { name: "Anushka Gupta", role: "PES1UG23CS088", image: Pic1 },
  { name: "Ankita Anand", role: "PES1UG23CS080", image: Pic2 },
  { name: "Ankita Muni", role: "PES1UG23CS081", image: Pic3 },
];

const Team = () => {
  return (
    <div className="team">
      {teamMembers.map((member, index) => (
        <div className="team__card" key={index}>
          <img src={member.image} alt={member.name} className="team__image" />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <button className="team__button">+</button>
        </div>
      ))}
    </div>
  );
};

export default Team;