import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigation, useParams } from 'react-router-dom';
import './App.css';
import area from './icons/area.png'
import back from './icons/Back.png';
import { Button } from '@mui/material';
import { getParkingDetailsById } from './api/parking'

const buttonStyle = {
  borderRadius: '25px',
  borderColor: 'white',
  color: 'white',
  alignText: 'center',
  fontWeight: 'bold',
  fontFamily: 'Verdana',
  width: '100px',
  textTransform: 'none',
  marginBottom: '10px',
};

const backButtonStyle = {
  position: 'absolute',
  left: '20px',
  top: '20px',
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function ParkingDetails(props) {
  let [parkingDetailsById, setParkingDetailsById ] = useState({});
  const { areaName, parkingSpaceId } = useParams();

  useEffect(()=> {
    const asyncFn = async () => {
      const parkingDetails = await getParkingDetailsById(parkingSpaceId);
      console.log("parkingDetails: ", parkingDetails);

      setParkingDetailsById(parkingDetails);
    };
    asyncFn();
  }, []);;

  // Simulate getting details from a database or API based on the areaName
  const [parkingDetails, setParkingDetails] = useState({
    allowedVehicleType: "Car",
    totalParkingSpaces: 10,
    occupiedSpaces: 0,
  });

  const handleMinusOne = () => {
    setParkingDetails((prevDetails) => ({
      ...prevDetails,
      occupiedSpaces: prevDetails.occupiedSpaces - 1,

    }));
  };

  const handlePlusOne = () => {
    setParkingDetails((prevDetails) => ({
      ...prevDetails,
      occupiedSpaces: prevDetails.occupiedSpaces + 1,

    }));
  };

  const handleDelete = async () => {
    // Display a confirmation dialog
    const confirmed = window.confirm('Are you sure you want to delete parking space?');

    if (confirmed) {
      // Perform the delete operation
      const data = {
        
        // capacity: capacity,
        // location: location,
        // vehicleType: vehicleType,
      };
    }
  };

  const renderParkingDetailsById = () => {
    if(!Object.keys(parkingDetailsById).length) {
      return (<p>No data to be displayed</p>);
    }

    return (<div className="details-section">
      <p>{parkingDetailsById.parkingSpaceName}</p>
      <p>
        Allowed Vehicle Type: {parkingDetailsById.vehicleType}
        <br />
        Total Parking Spaces: {parkingDetailsById.capacity}
        <br />
        Occupied Spaces: {parkingDetails.occupiedSpaces}
      </p>
    </div>);
  }

  return (
    <div className="App">
      <Link to="/parkingspaces">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

        <div className="title-and-button">
          <p className="left">Parking Space Details</p>
            <Link to={`/updateparkingspace/${parkingSpaceId}`}>
              <Button className="update-button" style={buttonStyle}>
                UPDATE
              </Button>
            </Link>
            <Button className="delete-button" style={buttonStyle} onClick={handleDelete}>
              DELETE
            </Button>
        </div>
        <div className="outside-con">
          <div className="content-secc">
            { renderParkingDetailsById() }
            <div className="picture-section">
              <img
                src={area}
                alt="Parking Area"
                style={{ width: '300px', height: '300px', float: 'center' }}
              />
            </div>
          </div>
        </div>
        <div className="plus-min">
          <Button variant="outlined" style={buttonStyle} onClick={handleMinusOne}>
            -1
          </Button>{' '}
          <Button variant="outlined" style={buttonStyle} onClick={handlePlusOne}>
            +1
          </Button>
        </div>
      </div>
  );
}

export default ParkingDetails;