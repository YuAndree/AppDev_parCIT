// AboutUs.jsx
import React from 'react';
import back from './icons/Back.png';
import member1Image from './icons/member1.jpg';
import { Link } from 'react-router-dom';
import './App.css';

const backButtonStyle = {
  position: 'absolute',
  left: '20px',
  top: '20px',
};

const members = [
  {
    id: 1,
    name: 'Team Member 1',
    image: 'member1.jpg',
    motto: 'Motto 1: Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    name: 'Team Member 2',
    image: 'member2.jpg',
    motto: 'Motto 2: Consectetur adipiscing elit',
  },
  {
    id: 3,
    name: 'Team Member 3',
    image: 'member3.jpg',
    motto: 'Motto 3: Consectetur adipiscing elit',
  },
  {
    id: 4,
    name: 'Team Member 4',
    image: 'member4.jpg',
    motto: 'Motto 4: Consectetur adipiscing elit',
  },
  {
    id: 5,
    name: 'Team Member 5',
    image: 'member5.jpg',
    motto: 'Motto 5: Consectetur adipiscing elit',
  },
  {
    id: 6,
    name: 'Team Member 6',
    image: 'member6.jpg',
    motto: 'Motto 6: Consectetur adipiscing elit',
  },
  // Add more members as needed
];

const AboutUs = () => {
  return (
    <div>
      <Link to="/">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <div className="about-us-container">
        <h2>About Us</h2>
        <div className="team-members-grid">
          {members.map((member) => (
            <div key={member.id} className="member-box">
              <div className="animated-member">
                <img src={member1Image} alt={member.name} className="member-image" />
              </div>
              <p className="member-name">{member.name}</p>
              <p className="member-motto">{member.motto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
