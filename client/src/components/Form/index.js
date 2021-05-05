import React from "react";
import { Form, Col } from "react-bootstrap";

function Formfiller() {
  return (
    <Form>
      <Form.Row className="searchBar mx-auto align-middle">
        <Col xs={7}>
          <Form.Control
            style={{ 
              width: "175%", 
              display: "flex", 
              alignItems: "center" }}
            placeholder="Search By Location"
          />
        </Col>
      </Form.Row>
    </Form>
  );
}

export default Formfiller;
