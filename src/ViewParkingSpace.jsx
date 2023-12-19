import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getParkingDetails } from './api/parking';
import './App.css';
import home from './icons/Home.png';
import { Button } from '@mui/material';

const homeButtonStyle = {
  position: 'absolute',
  left: '20px',
  top: '20px',
};

const buttonStyle = {
  borderRadius: '25px',
  borderColor: 'white',
  color: 'white',
  fontSize: '15px',
  display: 'right',
  fontWeight: 'bold',
  fontFamily: 'Verdana',
  width: 'auto',
  textTransform: 'none',
};

function Landing() {
  const navigate = useNavigate();
  const [parkingAreas, setParkingAreas] = useState([]);
  const [parkingAreasOne, setParkingAreasOne] = useState([]);
  
  useEffect(()=> {
    const asyncFn = async () => {
      const parkingDetails = await getParkingDetails();
      console.log("parkingDetails: ", parkingDetails);

      setParkingAreas(parkingDetails);
    };
    asyncFn();
  }, []);

  const renderParkingAreas = () => {

    if(!parkingAreas.length) {
      return (
        <div className="content-section">
          <p>No data to be displayed.</p>
        </div>
      );
    }
    
    return parkingAreas.map(parkingArea => {
      return (
        <div className="content-section">
          <p>{ parkingArea.parkingSpaceName }</p>
          <p>{ parkingArea.capacity }</p>
          <p className="details-link"
              onClick={() => navigate(`/parkingdetails/${parkingArea.parkingSpaceId}`)}
            >
                View details
          </p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <Link to="/admin">
        <img src={home} alt="Back" style={homeButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

      {/* Car Section */}
      <div className="car-section">
        <div className="title-and-button">
          <p className="left">Car Parking Spaces</p>
          <Link to="/addparkingspace">
            <Button className="add-button" style={buttonStyle}>
              ADD
            </Button>
          </Link>
        </div>

        <div className="outside-container">
          { renderParkingAreas() }
        </div>
      </div>

      
    </div>
  );
}

export default Landing;
