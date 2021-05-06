import React, { useState, useEffect } from "react";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import Hero from "../components/Hero";
import Form from "../components/Form";
import DispensaryCard from "../components/DispensaryCard";
import { getDispensaries } from "../utils/API";

function Dashboard() {
  const [dispensaries, setDispensaries] = useState([]);
  const [location, setLocation] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    const { data } = await getDispensaries({
      location,
      limit: 10,
    });
    setDispensaries(data.businesses);
    setLocation("");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Hero className="hero-container">
        <h1 className="m-5">Celp</h1>
        <h2 className="m-2 p-3">It's the Yelp for Cannabis!</h2>
        <Form
          handleChange={(e) => setLocation(e.target.value)}
          onFormSubmit={handleFormSubmit}
        />
      </Hero>

      <Row>
        <Col size="md-6">
          <ListGroup>
            {dispensaries.map((dispensary) => (
              <DispensaryCard {...dispensary} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
