// import React from 'react';
import './App.css'; 
import { Button } from '@mui/material';
import { Link} from 'react-router-dom'; 
import logo1 from './Logo1.png';
import teacherIcon from './teacher.png';
import guestIcon from './guest.png';
import back from './Back.png';

const StudentTeacher = () => {
  const buttonIc = guestIcon;
  const buttonIcon = teacherIcon;

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



  const backButtonStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
  };


  return (
    <div className="school-container">
      <Link to='/admin'>
        <img src={back} alt="Back"  style={backButtonStyle}/>
      </Link>
      <h1 className="school-title">ParCIT</h1>
      <img src={logo1} alt="Logo" /> <br/>
      <Link to='/vehicle'>
      <Button
        variant="outlined"
        style={buttonStyle}
        startIcon={<img src={buttonIc} alt="Student Icon" />}
      >
        Student
      </Button>
      <br />
      <Button
        variant="outlined"
        style={buttonStyle}
        startIcon={<img src={buttonIcon} alt="Teacher Icon" />}
      >
        Teacher
      </Button>
      </Link>
    </div>
  );
};

export default StudentTeacher;
