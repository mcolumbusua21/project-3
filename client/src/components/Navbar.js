import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

function Navbarfunction() {
  return (
    <Navbar
      bg="#000000"
      expand="lg"
      fixed="top"
      variant="dark"
      className="d-flex justify-content-between"
    >
      <Navbar.Brand style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'40px' }} href="#home">
        Celp 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-end"
        style={{ maxWidth: "fit-content", color: "yellow" }}
      >
        <Nav>
          <Nav.Link style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }} href="/">Home</Nav.Link>
          <Nav.Link style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }}href="/profile">Profile</Nav.Link>
          <Nav.Link style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }}href="/signup">Create an Account</Nav.Link>
          <Nav.Link style={{ color: "yellow", fontFamily:'Permanent Marker', fontSize:'20px' }}href="/login">Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarfunction;
