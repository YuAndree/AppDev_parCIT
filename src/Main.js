// Main.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import App from './Admin';
import StudentTeacher from './School';
import RegisterForm from './Login';
import MotorVehicle from './MotorVehicle';
import SignupForm from './SignUp';
import Landing from './ViewParkingSpace';
import AddParking from './AddParkingSpace';
import UpdateParking from './UpdateParkingSpace';
import CarParking from './CarParking';
import MotorParking from './MotorParking';
import ParkingDetails from './ParkingDetails';


const Main = () => {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/admin" element={<App />} />
        <Route path="/school" element={<StudentTeacher/>}/>
        <Route path="/login" element={<RegisterForm/>}/>
        <Route path="/parkingspaces" element={<Landing/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path='/vehicle' element={<MotorVehicle/>}/>
        <Route path='/addparkingspace' element={<AddParking/>}/>
        <Route path='/updateparkingspace' element={<UpdateParking/>}/>
        <Route path='/carparking' element={<CarParking/>}/>
        <Route path='/motorparking' element={<MotorParking/>}/>
        <Route path='/parkingdetails' element={<ParkingDetails  />}/>
      </Routes>
    </Router>
  );
};

export default Main;