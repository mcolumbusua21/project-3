import React, { useState, useEffect } from "react";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import Formfiller from "../components/Form/index";
import { getDispensaries } from "../utils/API";
import Hero from "../components/Hero/Hero";
// import { Card, Button, Alert } from "react-bootstrap";
// import { Link, useHistory } from "react-router-dom";

function Dashboard() {
  const [dispensaries, setDispensaries] = useState([]);

  useEffect(() => {
    setDispensaries(getDispensaries());
  }, []);

  console.log("DISPENSARY LIST ==> ", dispensaries);

  function SearchResults() {
  const [results, setResults] = useState([]);
  const [resultObject, setResultObject] = useState({});

  useEffect(() => {
    loadSearchResults();
  }, []);

  function loadResults() {
    getDispensaries
      .getSearchResults()
      .then((res) => setSearchResults(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setResultObject({ ...resultObject, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (resultObject.businesses) {
      getDispensaries
        .saveSearchResults({
          name: resultObject.name,
          location: resultObject.location.display_location,
          phone: resultObject.display_phone,
          open: resultObject.is_open,
          rating: resultObject.rating,
        })
        .then((res) => loadSearchResults())
        .catch((err) => console.log(err));
    }
  }
  }


return (
    <>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Celp</h1>
        <h2>It's the Yelp for Cannabis!</h2>
      </Hero>
     
    <div>
      <h1>Dispensaries Near Here</h1>
      <Row>
        <Col size="md-6">
          <ListGroup>
              {results.map(results => (
                  <ListItem key={results}></ListItem>
              ))}
            <Card>
              <Card.Body>
                <Card.Title>{results.name}</Card.Title>
                <Card.Text>
                  {results.location} {results.phone} {results.open}{" "}
                  {results.rating}
                </Card.Text>
              </Card.Body>
            </Card>
          </ListGroup>
        </Col>
      </Row>
    </div>
  
    </>
  );
}

export default Dashboard
