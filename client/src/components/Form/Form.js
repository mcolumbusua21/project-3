import React from "react";
import { Form, Col } from "react-bootstrap";
import "./Form.css";

function Formfiller(props) {
  return (
    <Form onSubmit={props.onFormSubmit}>
      <Form.Row className="searchBar mx-auto align-middle">
        <Col xs={7}>
          <Form.Control
            name="city"
            style={{
              width: "175%",
              display: "flex",
              alignItems: "center",
            }}
            placeholder="Search By Location"
            onChange={props.handleChange}
          />
        </Col>
      </Form.Row>
    </Form>
  );
}

export default Formfiller;
