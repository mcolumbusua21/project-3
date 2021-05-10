import React, { useState } from "react";
import { Navbar, Nav, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import celp from "../../src/assets/images/2.png"


function Navbarfunction() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");      
    }
  }

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className="d-flex justify-content-between"
    >
      <Navbar.Brand style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'40px' }} href="#home">
      <img src={celp}
      width="200"
      height="200"
      alt="business logo"
      className="d-inline-block-align-top" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-end"
        style={{ maxWidth: "fit-content" }}
        color= "yellow"
      >
        <Nav>
          {error && <Alert variant="danger"> {error} </Alert>}
          <Nav.Link style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }} href="/">Home</Nav.Link>
          {currentUser && <Nav.Link style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }} href="/favorites">Favorites</Nav.Link>}
          {currentUser && <Nav.Link style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }} href="/profile">Profile</Nav.Link>}
          {!currentUser && <Nav.Link style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }} href="/signup">Create an Account</Nav.Link>}
          {!currentUser ? (
            <Nav.Link style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }} href="/login">Log In</Nav.Link>
          ) : (
            <Button style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }} variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          )}
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarfunction;
