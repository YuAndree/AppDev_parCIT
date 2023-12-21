import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "@mui/material";
import back from "./icons/Back.png";
import "./App.css";
import { getParkingDetailsById, updateParkingDetails } from "./api/parking";

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

function UpdateParking() {
  const { parkingSpaceId } = useParams();
  let navigate = useNavigate();
  const [parkingDetails, setParkingDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const asyncFn = async () => {
      const parkingData = await getParkingDetailsById(parkingSpaceId);
      console.log("parkingData: ", parkingData);

      setParkingDetails(parkingData);
    };
    asyncFn();
  }, [parkingSpaceId]);

  const handleSave = async () => {
    if (loading) {
      return;
    }
    // Implement logic for update parking space
    try {
      if (parkingDetails.capacity >= parkingDetails.occupiedSpaces) {
        setLoading(true);
        const res = await updateParkingDetails(parkingSpaceId, {
          ...parkingDetails,
        });

        setParkingDetails((prevState) => {
          return {
            ...prevState,
            ...res,
          };
        });
        setLoading(false);
        return navigate(`/parkingdetails/${parkingSpaceId}`, { replace: true });
      }
      alert("Cannot set capacity lesser than the current occupied space!");
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

  const handleChange = (key) => (e) => {
    let newData = {};

    newData[key] = e.target.value;
    setParkingDetails((prevState) => {
      return {
        ...prevState,
        ...newData,
      };
    });
  };

  return (
    <div className="App">
      <Link to="/parkingspaces">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

      <p className="left">Update Parking Spaces</p>

      <div className="outside-container">
        <div className="content-section">
          <p>Vehicle Type:</p>
          <Input
            disableUnderline
            style={inputStyle}
            value={parkingDetails.vehicleType}
            onChange={handleChange("vehicleType")}
          />
        </div>

        <div className="content-section">
          <p>Capacity:</p>
          <Input
            type="number"
            inputProps={{ min: 0 }}
            disableUnderline
            style={inputStyle}
            value={parkingDetails.capacity}
            onChange={handleChange("capacity")}
          />
        </div>

        <div className="content-section">
          <p>Location:</p>
          <Input
            disableUnderline
            style={inputStyle}
            value={parkingDetails.location}
            onChange={handleChange("location")}
          />
        </div>
      </div>
      <div className="button-addcancel">
        <Button variant="outlined" style={buttonStyle} onClick={handleSave}>
          Save
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

export default UpdateParking;
