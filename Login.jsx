import { useState } from 'react';
import './RegisterForm.css';
import logo1 from './Logo1.png';
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
    borderColor: 'white',
    color: 'white',
    fontSize: '15px',
    position: 'center', justifyAlign: 'center',alignText: 'center',
    marginBottom: '10px',
    marginLeft: '80px',
    fontWeight: 'bold',
    width: '150px',
    textTransform: 'none',
  };

  return (
    <div>
      <div className="login-container">
      <Link to='/admin'>
        <img src={back} alt="Back"  style={backButtonStyle}/>
      </Link>
      <h1 className="school-title">ParCIT</h1>
      <div className='image'>
        <img src={logo1} alt="Logo" /> <br/>
      </div>
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
          </Button></Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;