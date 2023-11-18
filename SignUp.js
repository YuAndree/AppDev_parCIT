import { useState } from 'react';
import './RegisterForm.css';
import logo1 from './Logo1.png';
import back from './Back.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleRegister = () => {
    console.log(`Registering with username: ${username}, password: ${password}, firstname: ${firstname}, and lastname: ${lastname}`);
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
          <label>
            Firstname:
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
          <label>
            Lastname:
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
          <Link to="/login">
          <Button variant='outlined' style={buttonStyle} onClick={handleRegister}>
            Register
          </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;