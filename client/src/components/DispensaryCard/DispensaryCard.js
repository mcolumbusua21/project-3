import React from "react";
import { Card } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
// import API from "../../utils/API";
// import {useStoreContext} from "../../utils/GlobalState"
// import{ ADD_FAVORITE, REMOVE_FAVORITE } from "../../utils/actions"

function DispensaryCard({ name, location, display_phone, is_closed, rating, }) {
  // const [state, dispatch] = useStoreContext();
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ fontFamily: "Permanent Marker" }}>
          {name} <FcLike></FcLike>
        </Card.Title>
        <Card.Text>
          {location.display_address.join(", ")} {display_phone}
          {is_closed}
          {rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DispensaryCard;
