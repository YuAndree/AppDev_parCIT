import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";
import back from "./icons/Back.png";
import "./App.css";
import { createParkingDetails } from "./api/parking";
import { useState } from "react";

const buttonStyle = {
  borderRadius: "25px",
  borderColor: "white",
  color: "white",
  fontSize: "25px",
  alignText: "center",
  fontWeight: "bold",
  fontFamily: "Verdana",
  width: "150px",
  marginLeft: "100px",
  marginRight: "200px",
  textTransform: "none",
  marginBottom: "10px",
};

const backButtonStyle = {
  position: "absolute",
  left: "20px",
  top: "20px",
};

const inputStyle = {
  fontSize: "20px",
  fontFamily: "verdana",
  fontWeight: "bold",
  width: "605px", // Set the desired width
};

function AddParking() {
  //Variables to input fields
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [location, setLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const navigate = useNavigate();

  const handleAdd = async () => {
    //input data sa input fields
    const data = {
      parkingSpaceName: name,
      capacity: capacity,
      location: location,
      vehicleType: vehicleType,
      userType: "admin", //static for now
    };

    console.log("data: ", data);

    try {
      await createParkingDetails(data);
      navigate("/parkingspaces", { replace: true });
    } catch (e) {
      console.log(
        "par error napod par!!!!! ta atayaaaa hagbong gyud ta ani paaar!!!!",
        e
      );
    }
  };

  const handleCancel = () => {
    // Implement logic for canceling the operation
    console.log("Cancel button clicked");
  };

  return (
    <div className="App">
      <Link to="/admin">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

      <p className="left">Add Parking Spaces</p>

      <div className="outside-container">
        <div className="content-section">
          <p>Name:</p>
          <Input
            disableUnderline
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="content-section">
          <p>Capacity:</p>
          <Input
            type="number"
            inputProps={{ min: 0 }}
            disableUnderline
            style={inputStyle}
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <div className="content-section">
          <p>Location:</p>
          <Input
            disableUnderline
            style={inputStyle}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="content-section">
          <p>Vehicle Type:</p>
          <Input
            disableUnderline
            style={inputStyle}
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          />
        </div>
      </div>
      <div className="button-addcancel">
        <Button variant="outlined" style={buttonStyle} onClick={handleAdd}>
          Add
        </Button>

        <Link to="/parkingspaces">
          <Button variant="outlined" style={buttonStyle} onClick={handleCancel}>
            Cancel
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AddParking;
