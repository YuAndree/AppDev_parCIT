import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import logo1 from './Logo1.png';
import carIcon from './car.png';
import motorIcon from './motor.png';
import back from './Back.png';
import { Link } from 'react-router-dom';

const MotorVehicle = () => {
  const buttonIc = carIcon;
  const buttonIcon = motorIcon;

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
    borderColor: '#FFD700', // Gold color for border
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for a floating effect
  };
  
  const iconStyle = {
    alignText: 'center',
    paddingRight: '20px',
  };

  const backButtonStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
  };

  const logoStyle = {
    width: '400px', // Set the size to be twice as big
    height: '400px', // Set the size to be twice as big
    animation: 'rotate 4s infinite linear', // Add a rotation animation
    display: 'block',
    margin: '0 auto', // Center the logo
  };

  return (
    <div className="school-container">
      <Link to='/school'>
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="school-title">ParCIT</h1>
      <img src={logo1} alt="Logo" style={logoStyle} /> <br />
      <div className='vehicle'>
        <Link to='/carparking'>
          <Button
            variant="outlined"
            style={buttonStyle}
            startIcon={<img src={buttonIc} alt="Car Icon" style={iconStyle} />}
          >
            Car
          </Button>
        </Link>
        <br />
        <Link to='/motorparking'>
          <Button
            variant="outlined"
            style={buttonStyle}
            startIcon={<img src={buttonIcon} alt="Motorcycle Icon" />}
          >
            Motorcycle
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MotorVehicle;
