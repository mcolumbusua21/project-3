import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
} from "react-bootstrap";

function Navbarfunction() {
  return (
    <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
      <Navbar.Brand href="#home">
        We should come up with a logo or pic here
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Profile</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="primary">Logout</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarfunction;
