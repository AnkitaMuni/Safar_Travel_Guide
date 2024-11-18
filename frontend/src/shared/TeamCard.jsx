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
    <div className="profiles">
      

      {teamMembers.map((member, index) => (
        <div class="profile" key={index}>
          <div class="profile__img">
            <img src={member.image} alt={member.name} />
          </div>
          <h3 class="profile__name">{member.name}</h3>
          <p class="profile__subtitle">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;