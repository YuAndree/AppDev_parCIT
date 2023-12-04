import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import road from './icons/Road.png';
import { Button } from '@mui/material';

function SplashScreen() {
  
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


  return (
    <div className="App">
      <div className="title-container">
        <p className="main-title">ParCIT</p>
        <div className='right-buttons'>
          <Link to="/about">
            <Button className='add-button' style={buttonStyle}>
              About Us
            </Button>
          </Link>
          <Link to="/contact">
            <Button className='add-button' style={buttonStyle}>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      <Link to="/admin">
        <img src={road} alt="Road" />
      </Link>
    </div>
  );
}

export default SplashScreen;