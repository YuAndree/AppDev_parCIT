// CarParking.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import back from './Back.png';

function CarParking() {
  const backButtonStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
  };

  const parkingAreas = [
    { name: 'Basketball Area', allowedVehicleType: 10, totalParkingSpaces: 40 },
    { name: 'Engineering Area', allowedVehicleType: 10, totalParkingSpaces: 10 },
    { name: 'SHS Building Area', allowedVehicleType: 10, totalParkingSpaces: 10 },
    { name: 'Canteen Area', allowedVehicleType: 10, totalParkingSpaces: 10 },
  ];

  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="App">
      <Link to="/vehicle">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

      <div className="button-container">
        <p className="left">Car Parking Details</p>
      </div>

      <div className="outside-container">
        {parkingAreas.map((area, index) => (
          <div className="content-section" key={index}>
            <p>{area.name}</p> <p>{`0/${area.totalParkingSpaces}`}</p>
            <p
              className="details-link"
              onClick={() => navigate(`/parkingdetails/${area.name}`)}
            >
              View details
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarParking;
