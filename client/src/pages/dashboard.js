import React, { useState, useEffect } from "react";
// import { Card, Button, Alert } from "react-bootstrap";

// import { Link, useHistory } from "react-router-dom";
import { getDispensaries } from "../utils/API";
import Hero from "../components/Hero";

function Dashboard() {
//   const [error, setError] = useState("");
  const [dispensaries, setDispensaries] = useState([]);
//   const { currentUser, logout } = useAuth();
  // const history = useHistory();

  useEffect(() => {
    setDispensaries(getDispensaries());
  }, []);

  console.log("DISPENSARY LIST ==> ", dispensaries);

//   async function handleLogout() {
//     setError("");

//     try {
//       await logout();
//       history.pushState("/login");
//     } catch {
//       setError("Failed to log out");
//     }
//   }

  return (
    <>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Celp</h1>
        <h2>It's the Yelp for Cannabis!</h2>
      </Hero>
    </>
  );
}

export default Dashboard;
