import { useState } from "react";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import "./App.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Button from "@mui/material/Button";
import { Card, backdropClasses } from "@mui/material";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp"
import HandshakeIcon from '@mui/icons-material/Handshake';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Dashboard from "./components/Dashboard/Dashboard";
import DonateFood from "./components/Food/DonateFood";
import Feedback from "./components/SharedComponent/FeedBack";
import {Typography} from "@mui/material";

const Home = () => {


  return (
    <>
    <Card sx={{padding:"30px"}}>
      <div>
        <div>
          <RestaurantMenuIcon
            sx={{
              background: "green",
              color: "red",
              borderRadius: "100%",
              width: "80px",
              height: "80px",
              padding: "10px",
            }}
          />
        </div>
        <Typography gutterBottom variant="h4" component="div">Haba-Na-Haba Food Bank</Typography>
        <p>little by little pot is filled</p>
      </div>
      <div className="home-button">
        <Button
          href="/login"
          variant="contained"
          color="success"
          
          // className="cta-button"
        
        >
          Log in
        </Button>
        </div>
        <div className="home-button">
        <Button 
          href="/signup" 
          variant="contained"
          color="error"
          // className="cta-button"
        
         
        >
          Sign Up
        </Button>
      </div>

      <div className="support-card">
        <Card
          elevation="20"
          className='card'
        >
          <div className="support-link">
            <button> <VolunteerActivismIcon /></button>
           
            |
            <button> 
              <HandshakeIcon />
            </button>
            |
            <button> <SupportAgentIcon /></button>
           

          </div>
          <div sx={{ background: "red" }}>
            Join the Fight Against Hunger @socialmediaIcons
          </div>
        </Card>
      </div>
      </Card>
    </>
  );
};

const App= () => {
return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/donate-food" element={<DonateFood />} />
      <Route path="/feedback" element={<Feedback />} />


    </Routes>
  </Router>
);
}

export default App;
