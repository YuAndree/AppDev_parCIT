import React from 'react';
import { Link } from 'react-router-dom';
import back from './icons/Back.png';
import './App.css'; // Import your CSS file for styling

const backButtonStyle = {
  position: 'absolute',
  left: '20px',
  top: '20px',
};

const ContactUs = () => {
  return (
    <div>
      <Link to="/">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Email: UyAndree@Mapagmahal.com</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Address: 3rd Street</p>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;
