import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';
import area from './icons/area.png'
import back from './icons/Back.png';
import { Button } from '@mui/material';
import { getParkingDetails, createParkingDetails } from './api/parking'


function ParkingDetails() {
  let [count, setCount ] = useState();

  useEffect(()=> {
    const asyncFn = async () => {
      const parkingDetails = await getParkingDetails();
      console.log("parkingDetails: ", parkingDetails);

      // let parkingDetailsData = {
      //   user_type: 'student',
      //   capacity: 30,
      //   location: 'aaa',
      //   vehicle_type: 'aaa',
      //   parking_space_name: 'aaa',
      // };
    //  await createParkingDetails(parkingDetailsData);
    };
    asyncFn();
  }, []);



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
  };

  const { areaName } = useParams();

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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div className="App">
      <Link to="/parkingspaces">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

        <div className="title-and-button">
          <p className="left">Parking Space Details</p>
            <Link to="/updateparkingspace">
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
            <div className="details-section">
              <p>{areaName} Basketball</p>
              <p>
                Allowed Vehicle Type: {parkingDetails.allowedVehicleType}
                <br />
                Total Parking Spaces: {parkingDetails.totalParkingSpaces}
                <br />
                Occupied Spaces: {parkingDetails.occupiedSpaces}
              </p>
            </div>
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