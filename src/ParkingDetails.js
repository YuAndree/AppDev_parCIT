import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import area from "./icons/area.png";
import back from "./icons/Back.png";
import { Button } from "@mui/material";
import {
  getParkingDetailsById,
  updateOccupiedSpaces,
  deleteParkingDetails,
} from "./api/parking";

const buttonStyle = {
  borderRadius: "25px",
  borderColor: "white",
  color: "white",
  alignText: "center",
  fontWeight: "bold",
  fontFamily: "Verdana",
  width: "100px",
  textTransform: "none",
  marginBottom: "10px",
};

const backButtonStyle = {
  position: "absolute",
  left: "20px",
  top: "20px",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function ParkingDetails(props) {
  let [parkingDetailsById, setParkingDetailsById] = useState({});
  const [occupiedSpaces, setOccupiedSpaces] = useState(0);
  const [loading, setLoading] = useState(false);
  const { parkingSpaceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const asyncFn = async () => {
      const parkingDetails = await getParkingDetailsById(parkingSpaceId);
      console.log("parkingDetails: ", parkingDetails);

      if (!parkingDetails) {
        return navigate("/parkingspaces", { replace: true });
      }

      setParkingDetailsById(parkingDetails);
      setOccupiedSpaces(parkingDetails.occupiedSpaces);
    };
    asyncFn();
  }, []);

  useEffect(() => {
    console.log("bilatbaho: ", occupiedSpaces);
  }, [occupiedSpaces]);

  const handleMinusOne = async () => {
    //prevent from clicking again while request is still on going
    if (loading) {
      return;
    }

    try {
      if (occupiedSpaces > 0) {
        setLoading(true);
        const occupied = occupiedSpaces - 1;
        const res = await updateOccupiedSpaces(parkingSpaceId, {
          occupiedSpaces: occupied,
        });

        setParkingDetailsById((prevState) => {
          return {
            ...prevState,
            ...res,
          };
        });
        setOccupiedSpaces(occupied);
        return setLoading(false);
      }
      alert("Parking space empty!");
    } catch (e) {
      console.log("par error napod par!!!!!!", e);
    }
  };

  const handlePlusOne = async () => {
    //prevent from clicking again while request is still on going
    if (loading) {
      return;
    }
    try {
      if (occupiedSpaces < (parkingDetailsById || {}).capacity) {
        setLoading(false);
        const occupied = occupiedSpaces + 1;
        const res = await updateOccupiedSpaces(parkingSpaceId, {
          occupiedSpaces: occupied,
        });

        setParkingDetailsById((prevState) => {
          return {
            ...prevState,
            ...res,
          };
        });
        setOccupiedSpaces(occupied);
        return setLoading(false);
      }
      alert("Parking space full!");
    } catch (e) {
      console.log(
        "par error napod par!!!!! wan-a gyud par hagbong nata paaar!!!",
        e
      );
    }
  };

  const handleDelete = async () => {
    // Display a confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete parking space?"
    );

    if (confirmed) {
      try {
        const res = deleteParkingDetails(parkingSpaceId);

        if (res) {
          alert(
            `Parking space with ID ${parkingSpaceId} deleted successfully.`
          );
          navigate("/parkingspaces", { replace: true });
        }
      } catch (e) {
        console.log(
          "par error napod par!!!!! wan-a gyud par hagbong nata paaar!!!",
          e
        );
      }
    }
  };

  const renderParkingDetailsById = () => {
    if (!Object.keys(parkingDetailsById).length) {
      return <p>No data to be displayed</p>;
    }

    return (
      <div className="details-section">
        <p>{parkingDetailsById.parkingSpaceName}</p>
        <p>
          Allowed Vehicle Type: {parkingDetailsById.vehicleType}
          <br />
          Total Parking Spaces: {parkingDetailsById.capacity}
          <br />
          Occupied Spaces: {parkingDetailsById.occupiedSpaces}
        </p>
      </div>
    );
  };

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
        <Button
          className="delete-button"
          style={buttonStyle}
          onClick={handleDelete}
        >
          DELETE
        </Button>
      </div>
      <div className="outside-con">
        <div className="content-secc">
          {renderParkingDetailsById()}
          <div className="picture-section">
            <img
              src={area}
              alt="Parking Area"
              style={{ width: "300px", height: "300px", float: "center" }}
            />
          </div>
        </div>
      </div>
      <div className="plus-min">
        <Button variant="outlined" style={buttonStyle} onClick={handleMinusOne}>
          -1
        </Button>{" "}
        <Button variant="outlined" style={buttonStyle} onClick={handlePlusOne}>
          +1
        </Button>
      </div>
    </div>
  );
}

export default ParkingDetails;
