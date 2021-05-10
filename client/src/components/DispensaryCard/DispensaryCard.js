import React from "react";
import { Card, Row, Col} from "react-bootstrap";
import { FcLike } from "react-icons/fc";
// import { useStoreContext } from "../../utils/GlobalState";
import { useAuth } from "../../contexts/AuthContext";
// import API from "../../utils/API";
// import{ ADD_FAVORITE } from "../../utils/actions"

function DispensaryCard({
  name,
  location,
  display_phone,
  is_closed,
  rating,
  favorite,
}) {
  // const [state, dispatch] = useStoreContext();
  const { currentUser } = useAuth();

  return (
    <Card border="secondary" className="mb-4">
      <Card.Body className="p-0">
        <Card.Title className="bg-success"
          // onClick={handleInputChange}
          style={{ fontFamily: "Permanent Marker" }}
        >
           <Row>
    <Col sm={8} className="ml-2 mt-2 mb-2">{name}</Col>
    <Col sm={3} className="">{currentUser && (
           <FcLike 
              onClick={() =>
                favorite({
                  uuid: currentUser.uid,
                  dispensary: {
                    name,
                    location,
                    display_phone,
                    is_closed,
                    rating,
                  },
                })
              }
            />
          )}</Col>
  </Row>
          
          
        </Card.Title>
        <Card.Text className="ml-2">
          {location.display_address.join(", ")} 
        </Card.Text>
        <Card.Text className="ml-2">
          {display_phone}
          
        </Card.Text>
        <Card.Text className="ml-2">
          
          {is_closed}
          
        </Card.Text>
        <Card.Text className="ml-2">
          
          Yelp Rating: {rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DispensaryCard;
