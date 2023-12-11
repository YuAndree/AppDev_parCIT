// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import  back from './icons/Back.png'
// import { Button } from '@mui/material';

function MotorParking() {

    const backButtonStyle = {
        position: 'absolute',
        left: '20px',
        top: '20px',
      };

      const parkingAreas = [
        { name: 'Back Gate', allowedVehicleType: 10, totalParkingSpaces: 10 },
      ];
    
      const parkingAreasB = [
         { name: 'Engineering Area', allowedVehicleType: 10, totalParkingSpaces: 10 },
      ]
    
      const parkingAreasC = [
         { name: 'ST Building Area', allowedVehicleType: 10, totalParkingSpaces: 10 },
      ]
    
      const parkingAreasD = [
        { name: 'SHS Building Area', allowedVehicleType: 10, totalParkingSpaces: 10 },
      ]

      const navigate = useNavigate();

  return (
    <div className="App">
      <Link to="/vehicle">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

      <div className="button-container">
        <p className="left">Motor Parking Details</p>
      </div>

      <div className="outside-container">
      <div>
        {parkingAreas.map((area, index) => (
          <div className="content-section" key={index}>
            <p>{area.name}</p> <p>{`0/${area.totalParkingSpaces}`}</p>
            <p
              className="details-link"
              onClick={() => navigate(`/motorviewbackgate`)}
            >
              View details
            </p>
          </div>
        ))}
      </div>

      <div>
        {parkingAreasB.map((area, index) => (
          <div className="content-section" key={index}>
            <p>{area.name}</p> <p>{`0/${area.totalParkingSpaces}`}</p>
            <p
              className="details-link"
              onClick={() => navigate(`/motorviewengineering`)}
            >
              View details
            </p>
          </div>
        ))}
      </div>

      <div>
        {parkingAreasC.map((area, index) => (
          <div className="content-section" key={index}>
            <p>{area.name}</p> <p>{`0/${area.totalParkingSpaces}`}</p>
            <p
              className="details-link"
              onClick={() => navigate(`/motorviewsts`)}
            >
              View details
            </p>
          </div>
        ))}
      </div>

      <div>
        {parkingAreasD.map((area, index) => (
          <div className="content-section" key={index}>
            <p>{area.name}</p> <p>{`0/${area.totalParkingSpaces}`}</p>
            <p
              className="details-link"
              onClick={() => navigate(`/motorviewshs`)}
            >
              View details
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default MotorParking;