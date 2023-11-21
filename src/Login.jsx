import { useState } from 'react';
import './RegisterForm.css';
import back from './Back.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Signing in with username: ${username}, password: ${password}`);
    // Add your registration logic here
  };

  const backButtonStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
  };

  const buttonStyle = {
    borderRadius: '25px',
    backgroundColor: '#800000', // Maroon color for background
    color: '#FFD700', // Gold color for text
    fontSize: '15px',
    marginBottom: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block', // Center the button
    fontWeight: 'bold',
    width: '150px',
    textTransform: 'none',
    border: '2px solid #FFD700', // Gold color for border
  };

  const headerStyle = {
    textAlign: 'center', // Center the text
    marginBottom: '20px', // Adjust the spacing as needed
  };

  return (
    <div>
      <div className="login-container">
        <Link to='/admin'>
          <img src={back} alt="Back" style={backButtonStyle} />
        </Link>
        <h1 className="school-title" style={headerStyle}>ParCIT</h1>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Link to='/parkingspaces'>
            <Button variant='outlined' style={buttonStyle} onClick={handleLogin}>
              Log in
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
