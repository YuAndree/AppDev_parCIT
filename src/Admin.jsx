import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import logo1 from './Logo1.png';
import adminIcon from './admin.png';
import guestIcon from './guest.png';


function App() {
  const buttonIc = adminIcon;
  const buttonIcon = guestIcon;

  const buttonStyle = {
    borderRadius: '25px',
    borderColor: 'white',
    color: 'white',
    fontSize: '20px',
    marginBottom: '10px',
    padding: '10px',
    fontWeight: 'bold',
    width: 'auto',
  };

  return (
    <div className="app-container">
      <div className="main">
        <h1 className="main-title">ParCIT</h1>
        <img src={logo1} alt="Logo" />

        <Link to="/login">
          <Button
            variant="outlined"
            style={buttonStyle}
            startIcon={<img src={buttonIc} alt="Admin Icon" />}
          >
            Admin
          </Button>
        </Link>

        <Link to="/school">
          <Button
            variant="outlined"
            style={buttonStyle}
            startIcon={<img src={buttonIcon} alt="Guest Icon" />}
          >
            Guest
          </Button>
        </Link>

      </div>
    </div>
  );
}

export default App;
