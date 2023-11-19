import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';
import area from './area.png'
import back from './Back.png';
import { Button } from '@mui/material';

function ParkingDetails() {
  const buttonStyle = {
    borderRadius: '25px',
    borderColor: 'white',
    color: 'white',
    alignText: 'center',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    width: '100px',
    textTransform: 'none',
    marginBottom: '10px',
  };

  const backButtonStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
  };

  const { areaName } = useParams();

  // Simulate getting details from a database or API based on the areaName
  const [parkingDetails, setParkingDetails] = useState({
    allowedVehicleType: 0,
    totalParkingSpaces: 0,
    occupiedSpaces: 0,
  });

  const handleMinusOne = () => {
    setParkingDetails((prevDetails) => ({
      ...prevDetails,
      totalParkingSpaces: prevDetails.totalParkingSpaces - 1,

    }));
  };

  const handlePlusOne = () => {
    setParkingDetails((prevDetails) => ({
      ...prevDetails,
      totalParkingSpaces: prevDetails.totalParkingSpaces + 1,

    }));
  };

  return (
    <div className="App">
      <Link to="/vehicle">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>
  
      <div className="button-container">
        <p className="left">Parking Space Details</p>
      </div>
  
      <div className="outside-con">
        <div className="content-secc">
          <div className="details-section">
            <p>{areaName} Building</p>
            <p>
              Allowed Vehicle Type: {parkingDetails.allowedVehicleType}
              <br />
              Total Parking Spaces: {parkingDetails.totalParkingSpaces}
              <br />
              Occupied Spaces: {parkingDetails.occupiedSpaces}
            </p>
          </div>
          <div className="picture-section">
            <img
              src={area}
              alt="Parking Area"
              style={{ width: '300px', height: '300px', float: 'center' }}
            />
          </div>
        </div>
      </div>
      <div className="plus-min">
        <Button variant="outlined" style={buttonStyle} onClick={handleMinusOne}>
          -1
        </Button>{' '}
        <Button variant="outlined" style={buttonStyle} onClick={handlePlusOne}>
          +1
        </Button>
      </div>
    </div>
  );
  
}

export default ParkingDetails;
