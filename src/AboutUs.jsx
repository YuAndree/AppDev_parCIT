// AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import back from './icons/Back.png';

// Import individual member images
import member1Image from './icons/member1.png';
import member2Image from './icons/member2.JPG';
import member3Image from './icons/member3.JPG';
import member4Image from './icons/member4.jpg';
import member5Image from './icons/member5.jpg';
import member6Image from './icons/member6.jpg';

import './App.css';

const backButtonStyle = {
  position: 'absolute',
  left: '20px',
  top: '20px',
};

const members = [
  {
    id: 1,
  name: 'Chad Luab',
  image: member1Image,
  motto: (
    <>
      "Nothing is true, everything is permitted"
      <br />
      - Hassan-i Sabbāh
    </>
  ),

  },
  {
    id: 2,
    name: 'Andree Uy',
    image: member2Image,
    motto: (
      <>
        "Obsession is going to beat talent every time."
        <br />
        - Stanley Sugarman
      </>
    ),
  },
  {
    id: 3,
    name: 'Carl Alferez',
    image: member3Image,
    motto: (
      <>
        "If you don't take risks, you can't create a future"
        <br />
        - Monkey D. Luffy
      </>
    ),
  },
  {
    id: 4,
    name: 'Ian Arbasosa',
    image: member4Image,
    motto: '"Premature optimization is the root of all evil"',
  },
  {
    id: 5,
    name: 'Jenette Ephan',
    image: member5Image,
    motto: '"Building bridges between sketches and screen."',
  },
  {
    id: 6,
    name: 'Vince Cañete',
    image: member6Image,
    motto: '"Make life fun"',
  },
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                  style={{ width: '150px', height: '150px', borderRadius: '10px' }}
                />
              </div>
              <p className="member-name">{member.name}</p>
              <p className="member-motto" style={{ color: 'white', fontWeight: 'bold' }}>
                {member.motto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
