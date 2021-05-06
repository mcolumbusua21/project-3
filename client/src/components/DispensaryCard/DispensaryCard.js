import React from "react";
import { Card } from "react-bootstrap";
import { FcLike } from 'react-icons/fc';

function DispensaryCard({ name, location, display_phone, is_closed, rating }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name} <FcLike></FcLike></Card.Title>
        <Card.Text>
          {location.display_address.join(", ")} {display_phone} {is_closed} {rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DispensaryCard;
