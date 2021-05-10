import React, { useState } from "react";
import { Col, Row, ListGroup } from "react-bootstrap";
import Hero from "../../components/Hero";
import Form from "../../components/Form";
import DispensaryCard from "../../components/DispensaryCard";
import { getDispensaries, addToFavorite } from "../../utils/API";
import Navbar from "../../components/Navbar";

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

  async function favorite({ uuid, dispensary }) {
    try {
      // const uuid = {data};
      // const dispensary = {data};
     await addToFavorite({
        uuid,
        dispensary,
      });
    } catch (err) {
      console.log(err);
    }
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
      <Navbar />
      <Hero className="hero-container">
        <h1 className="m-5">Celp</h1>
        <h2 className="m-2 p-3">It's the Yelp for Cannabis!</h2>
        <Form
          handleChange={(e) => setLocation(e.target.value)}
          onFormSubmit={handleFormSubmit}
        />
        <div>
          <footer
            className="footer"
            style={{
              fontFamily: "Permanent Marker",
              color: "yellow",
              fontSize: "26px",
            }}
          >
            Scroll Down For Results{" "}
          </footer>
        </div>
      </Hero>

      <Row>
        <Col
          style={{ fontFamily: "Permanent Marker" }}
          className="mt-5"
          size="md-6"
        >
          <p>Click on the heart to add the location to your favorites list!</p>
          <ListGroup className="mt-5">
            {dispensaries.map((dispensary) => (
              <DispensaryCard favorite={favorite} {...dispensary} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
