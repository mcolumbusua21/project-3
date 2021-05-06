import React from "react";
import { Card } from "react-bootstrap";

function DispensaryCard({ name, location, display_phone, is_closed, rating }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {location.display_address.join(", ")} {display_phone} {is_closed} {rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DispensaryCard;