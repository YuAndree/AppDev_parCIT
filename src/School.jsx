import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo1 from './Logo1.png';
import teacherIcon from './teacher.png';
import guestIcon from './guest.png';
import back from './Back.png';

const StudentTeacher = () => {
  const buttonIc = guestIcon;
  const buttonIcon = teacherIcon;

  const buttonStyle = {
    position: 'relative',
    borderRadius: '25px',
    backgroundColor: '#800000', // Maroon color for background
    color: '#FFD700', // Gold color for text
    fontSize: '20px',
    marginBottom: '10px',
    padding: '15px',
    fontWeight: 'bold',
    width: '200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for a floating effect
  };

  const backButtonStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
  };

  const logoStyle = {
    width: '400px', // Set the size to be twice as big
    height: '400px', // Set the size to be twice as big
    animation: 'rotate 4s infinite linear', // Adjust the duration and other properties as needed
    display: 'block',
    margin: '0 auto', // Center the logo
  };

  const pseudoElementStyle = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '25px',
    border: '2px solid #FFD700', // Set the color of the outline
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for a floating effect
    pointerEvents: 'none', // Ensure the pseudo-element doesn't interfere with clicks
  };

  return (
    <div className="school-container">
      <Link to='/admin'>
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="school-title">ParCIT</h1>
      <img src={logo1} alt="Logo" style={logoStyle} /> <br />
      <Link to='/vehicle'>
        <Button
          variant="outlined"
          style={buttonStyle}
          startIcon={<img src={buttonIc} alt="Student Icon" />}
        >
          Student
          <span style={pseudoElementStyle}></span>
        </Button>
        <br />
        <Button
          variant="outlined"
          style={buttonStyle}
          startIcon={<img src={buttonIcon} alt="Teacher Icon" />}
        >
          Teacher
          <span style={pseudoElementStyle}></span>
        </Button>
      </Link>
    </div>
  );
};

export default StudentTeacher;
