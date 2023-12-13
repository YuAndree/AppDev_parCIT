import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import home from './icons/Home.png';
import { Button } from '@mui/material';

function Landing() {
  const homeButtonStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
  };

  const buttonStyle = {
    borderRadius: '25px',
    borderColor: 'white',
    color: 'white',
    fontSize: '15px',
    display: 'right',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    width: 'auto',
    textTransform: 'none',
  };

  const navigate = useNavigate();

  return (
    <div className="App">
      <Link to="/admin">
        <img src={home} alt="Back" style={homeButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

      {/* Car Section */}
      <div className="car-section">
        <div className="title-and-button">
          <p className="left">Car Parking Spaces</p>
          <Link to="/addparkingspace">
            <Button className="add-button" style={buttonStyle}>
              ADD
            </Button>
          </Link>
        </div>


        <div className="outside-container">
          <div className="content-section">
            <p>Basketball Area</p> <p>10/10</p>
            <p className="details-link"
              onClick={() => navigate(`/parkingdetails`)}>
              View details
            </p>
          </div>

          <div className="content-section">
            <p>Engineering Area</p> <p>10/10</p>
            <p className="details-link"
              onClick={() => navigate(`/admincarviewengineering`)}>
              View details
            </p>
          </div>

          <div className="content-section">
            <p>SHS Building Area</p> <p>10/10</p>
            <p className="details-link"
              onClick={() => navigate(`/admincarviewshs`)}>
              View details
            </p>
          </div>

          <div className="content-section">
            <p>Canteen Area</p> <p>10/10</p>
            <p className="details-link"
              onClick={() => navigate(`/admincarviewcanteen`)}>
              View details
            </p>
          </div>

          {/* Add more motor parking spaces as needed */}
          
        </div>
      </div>

      {/* Motor Section */}
      <div className="motor-section">
        <p className="left">Motor Parking Spaces</p>
        <div className="outside-container">
          <div className="content-section">
            <p>Back Gate Area</p> <p>10/10</p>
            <p className="details-link"
              onClick={() => navigate(`/adminmotorviewbackgate`)}>
              View details
            </p>
          </div>

          <div className="content-section">
            <p> Engineering Area</p> <p>10/10</p>
            <p className="details-link"
              onClick={() => navigate(`/adminmotorviewengineering`)}>
              View details
            </p>
          </div>

          <div className="content-section">
            <p>ST Building Area</p> <p>10/10</p>
            <p className="details-link"
              onClick={() => navigate(`/adminmotorviewsts`)}>
              View details
            </p>
          </div>

          <div className="content-section">
            <p>SHS Building Area</p> <p>10/10</p>
            <p className="details-link"
              onClick={() => navigate(`/adminmotorviewshs`)}>
              View details
            </p>
          </div>

          {/* Add more car parking spaces as needed */}
        </div>
      </div>
    </div>
  );
}

export default Landing;
