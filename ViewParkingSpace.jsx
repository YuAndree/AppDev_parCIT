// import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import home from './Home.png';
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

  return (
    <div className="App">
      <Link to="/admin">
        <img src={home} alt="Back" style={homeButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

      <div className="button-container">
        <p className="left">All Parking Spaces</p>
        <div className="right-buttons">
          <Link to="/addparkingspace">
            <Button className="add-button" style={buttonStyle}>
              ADD
            </Button>
          </Link></div>
          <Link to="/updateparkingspace">
            <Button className="update-button" style={buttonStyle}>
              UPDATE
            </Button>
          </Link>
      </div>

      <div className="outside-container">
        <div className="content-section">
          <p>Basketball Area</p> <p>10/10</p>
          <p>View details</p>
        </div>

        <div className="content-section">
          <p>Engineering Area</p> <p>10/10</p>
          <p>View details</p>
        </div>

        <div className="content-section">
          <p>SHS Building Area</p> <p>10/10</p>
          <p>View details</p>
        </div>
        <div className="content-section">
          <p>Canteen Area</p> <p>10/10</p>
          <p>View details</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
