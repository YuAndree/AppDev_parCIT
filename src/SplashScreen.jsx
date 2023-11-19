// import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import road from './Road.png';


function SplashScreen() {
  return (
    <div className="App">
        <p className="main-title">ParCIT</p>
        <Link to="/admin">
          <img src={road} alt="Road" />
        </Link>
    </div>
  );
}

export default SplashScreen;
