import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import logo1 from './icons/Logo1.png';
import adminIcon from './icons/admin.png';
import guestIcon from './icons/guest.png';
import './App.css';

function App() {
  const buttonIc = adminIcon;
  const buttonIcon = guestIcon;

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

  const iconStyle = {
    filter: 'grayscale(100%)', // Convert icons to black and white
    marginRight: '8px', // Adjust margin as needed
  };

  const pseudoElementStyle = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '25px',
    border: '2px solid #FFD700', // Set the color of the outline
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for a floating effect
    pointerEvents: 'none', // Ensure the pseudo-element doesn't interfere with clicks
  };

  return (
    <div className="main">
      <h1 className="main-title">ParCIT</h1>
      <img src={logo1} alt="Logo" className="logo" />

      <Link to="/login">
        <Button
          variant="outlined"
          style={buttonStyle}
          startIcon={<img src={buttonIc} alt="Admin Icon" style={iconStyle} />}
        >
          Admin
          <span style={pseudoElementStyle}></span>
        </Button>
      </Link>

      <Link to="/school">
        <Button
          variant="outlined"
          style={buttonStyle}
          startIcon={<img src={buttonIcon} alt="Guest Icon" style={iconStyle} />}
        >
          Guest
          <span style={pseudoElementStyle}></span>
        </Button>
      </Link>
    </div>
  );
}

export default App;
