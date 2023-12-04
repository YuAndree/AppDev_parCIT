import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import back from './icons/Back.png';
import './App.css'; // Import your CSS file for styling
=======
import back from './Back.png';
import './App.css';
>>>>>>> 0fd9e9e5db9f4905314aa88dfc65371d769fe2f7

const backButtonStyle = {
  position: 'absolute',
  left: '20px',
  top: '20px',
};

const ContactUs = () => {
  return (
    <div>
      <h1 className="main-title">ParCIT</h1>
      <Link to="/">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <div
        style={{
          backgroundColor: '#800000', // Maroon
          color: '#ffd700', // Gold
          border: '2px solid #ffd700', // Gold
          padding: '20px',
          margin: '20px',
          borderRadius: '10px',
          textAlign: 'center', // Center content
        }}
        className="contact-us-container"
      >
        <h2 style={{ color: '#ffd700' }}>Contact Us</h2>
        <div className="contact-info">
          <p style={{ color: '#ffd700' }}>Email: UyAndree@Mapagmahal.com</p>
          <p style={{ color: '#ffd700' }}>Phone: +1 123-456-7890</p>
          <p style={{ color: '#ffd700' }}>Address: 3rd Street</p>
        </div>
      </div>
      <div className="social-media-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div
          className="social-media-item"
          style={{
            backgroundColor: '#4267B2', // Facebook Blue
            color: '#ffffff', // White text
            border: '2px solid #4267B2', // Facebook Blue
            padding: '20px',
            margin: '10px', // Adjusted margin
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Align items to the center
          }}
        >
          <p style={{ color: '#ffffff' }}>Facebook Page</p>
          <button
            style={{
              backgroundColor: '#ffffff',
              color: '#4267B2',
              padding: '8px',
              fontSize: '12px', // Adjusted font size
            }}
          >
            Visit Facebook Page
          </button>
        </div>
        <div
          className="social-media-item"
          style={{
            backgroundImage: 'linear-gradient(45deg, #FCE38A, #F38181, #EAFFD0)', // Instagram Rainbow
            color: '#000000', // Black text
            border: '2px solid #EAFFD0', // Instagram Rainbow
            padding: '20px',
            margin: '10px', // Adjusted margin
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Align items to the center
          }}
        >
          <p style={{ color: '#000000' }}>Instagram Page</p>
          <button
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              padding: '8px',
              fontSize: '12px', // Adjusted font size
            }}
          >
            Visit Instagram Page
          </button>
        </div>
        <div
          className="social-media-item"
          style={{
            backgroundColor: '#14171A', // Twitter Black
            color: '#ffffff', // White text
            border: '2px solid #14171A', // Twitter Black
            padding: '20px',
            margin: '10px', // Adjusted margin
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Align items to the center
          }}
        >
          <p style={{ color: '#ffffff' }}>Twitter Page</p>
          <button
            style={{
              backgroundColor: '#ffffff',
              color: '#14171A',
              padding: '8px',
              fontSize: '12px', // Adjusted font size
            }}
          >
            Visit Twitter Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
