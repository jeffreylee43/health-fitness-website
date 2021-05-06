import React , {useContext}from "react";
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../firebase/Auth';

const Landing = () => {
  const {currentUser} = useContext(AuthContext);
  
  if(currentUser) {
    return <Redirect to="/home"/>
  }

  return (
    
        <div className="intro-text">
            <h1 className = "welcome">Welcome to FitU!</h1>
            <p>FitU is a web application designed to help you stay fit.</p>
            <p>Stay organized with your fitness and health routines using our Personal Journal feature.</p>
            <p>View other users' routine and diet through FitU!</p>
        </div>
    
  );
};

export default Landing;
