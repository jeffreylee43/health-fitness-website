import React, { useContext } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/Auth";
import SignOutButton from "./SignOut";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

const NavigationAuth = () => {
  return (
    // <Navbar bg="dark" variant="dark">
    //   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //   <Nav>
    //     <Nav.Link href="/home">Home</Nav.Link>
    //     <Nav.Link href="/journal">Journal</Nav.Link>
    //     <Nav.Link href="/social">Social</Nav.Link>
    //   </Nav>
    // </Navbar>
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <p className="nav-logo">FitU</p>
        </li>
        <li>
          <NavLink exact to="/home" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/journal" className="nav-link" activeClassName="active">
            Journal
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/social" className="nav-link" activeClassName="active">
            Social
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile" className="nav-link" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
};

const NavigationNonAuth = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <p className="nav-logo">FitU</p>
        </li>
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/signup" className="nav-link" activeClassName="active">
            Sign-up
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/login" className="nav-link" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
