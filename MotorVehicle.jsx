// import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import logo1 from './Logo1.png';
import carIcon from './car.png';
import motorIcon from './motor.png';
import back from './Back.png'
import { Link } from 'react-router-dom';

const MotorVehicle = () => {
  const buttonIc = carIcon;
  const buttonIcon = motorIcon;

  const buttonStyle = {
    borderRadius: '25px',
    borderColor: 'white',
    color: 'white',
    fontSize: '20px',
    marginBottom: '10px',
    padding: '10px',
    fontWeight: 'bold',
    width: '199px',
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


  return (
    <div className="school-container" >
      <Link to ='/school'>
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="school-title">ParCIT</h1>
      <img src={logo1} alt="Logo" /> <br />
      <div className='vehicle'>
        <Link to='/carparking'>
      <Button
        variant="outlined"
        style={buttonStyle}
        startIcon={<img src={buttonIc} alt="Student Icon" style={iconStyle} />}
      >
        Car
      </Button></Link>
      <br />
      <Link to='/motorparking'>
      <Button
        variant="outlined"
        style={buttonStyle}
        startIcon={<img src={buttonIcon} alt="Teacher Icon"/>}
      >
        Motorcycle
      </Button></Link>
      </div>
    </div>
  );
};

export default MotorVehicle;
