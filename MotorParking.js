// import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import  back from './Back.png'
// import { Button } from '@mui/material';

function MotorParking() {

    const backButtonStyle = {
        position: 'absolute',
        left: '20px',
        top: '20px',
      };

  return (
    <div className="App">
      <Link to='/vehicle'>
        <img src={back} alt="Back"  style={backButtonStyle}/>
      </Link>      <h1 className="main-title">ParCIT</h1>
    
      <div className="button-container">
  <p className="left">Motorcycle Parking Details</p>
</div>

      <div className='outside-container'>
        <div className="content-section">
        <p>Backgate</p> <p>10/10</p><p>View details</p>
      </div>

        <div className="content-section">
          <p>Engineering Area</p> <p>10/10</p><p>View details</p>
        </div>

        <div className="content-section">
          <p>ST Building Area</p> <p>10/10</p><p>View details</p>
        </div>
        <div className="content-section">
          <p>SHS Building</p> <p>10/10</p><p>View details</p>
        </div>
      </div>
    </div>
  );
}

export default MotorParking;