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
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import StudentCarViewBasketball from './StudentCarViewBasketball';
import StudentCarViewEngineering from './StudentCarViewEngineering';
import StudentCarViewSHS from './StudentCarViewSHS';
import StudentCarViewCanteen from './StudentCarViewCanteen';
import MotorViewBackGate from './MotorViewBackGate';
import MotorViewEngineering from './MotorViewEngineering';
import MotorViewSTS from './MotorViewSTS';
import MotorViewSHS from './MotorViewSHS';


const Main = () => {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
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
        <Route path='/parkingdetails/:parkingSpaceId' element={<ParkingDetails  />}/>
        <Route path='/studentcarviewbasketball' element={<StudentCarViewBasketball  />}/>
        <Route path='/studentcarviewengineering' element={<StudentCarViewEngineering  />}/>
        <Route path='/studentcarviewshs' element={<StudentCarViewSHS  />}/>
        <Route path='/studentcarviewcanteen' element={<StudentCarViewCanteen  />}/>
        <Route path='/motorviewbackgate' element={<MotorViewBackGate  />}/>
        <Route path='/motorviewengineering' element={<MotorViewEngineering  />}/>
        <Route path='/motorviewsts' element={<MotorViewSTS  />}/>
        <Route path='/motorviewshs' element={<MotorViewSHS  />}/>
      </Routes>
    </Router>
  );
};

export default Main;