import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import Login from "./Login";
import SignUp from "./SignUp";
import Navigation from "./Navigation";
import PrivateRoute from "./PrivateRoute";
import Journal from "./Journal";
import Social from "./Social";
import Profile from "./Profile";
import { AuthProvider } from "../firebase/Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
        </div>
        <Route exact path="/" component={Landing} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/journal" component={Journal} />
        <PrivateRoute path="/social" component={Social} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Router>
    </AuthProvider>
  );
}

export default App;
