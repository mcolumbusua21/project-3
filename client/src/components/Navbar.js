import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
} from "react-bootstrap";

function Navbarfunction() {
  return (
    <Navbar bg="dark" expand="lg" fixed="top" variant="dark" className="d-flex justify-content-between">
      <Navbar.Brand href="#home">
        Celp = "Yelp" for Cannabis
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end" style={{maxWidth: "fit-content"}}>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="primary">Logout</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarfunction;
