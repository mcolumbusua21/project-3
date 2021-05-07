import React, { useState } from "react";
import { Navbar, Nav, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

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
      bg="dark"
      expand="lg"
      fixed="top"
      variant="dark"
      className="d-flex justify-content-between"
    >
      <Navbar.Brand href="#home">Celp = "Yelp" for Cannabis</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-end"
        style={{ maxWidth: "fit-content" }}
      >
        <Nav>
          {error && <Alert variant="danger"> {error} </Alert>}
          <Nav.Link href="/">Home</Nav.Link>
          {currentUser && <Nav.Link href="/favorites">Favorites</Nav.Link>}
          {currentUser && <Nav.Link href="/profile">Profile</Nav.Link>}
          {!currentUser && <Nav.Link href="/signup">Create an Account</Nav.Link>}
          {!currentUser ? (
            <Nav.Link href="/login">Log In</Nav.Link>
          ) : (
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarfunction;
