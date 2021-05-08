import React from "react";
import { Card } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
// import { useStoreContext } from "../../utils/GlobalState";
import { useAuth } from "../../contexts/AuthContext";
// import API from "../../utils/API";
// import{ ADD_FAVORITE } from "../../utils/actions"

function DispensaryCard({ name, location, display_phone, is_closed, rating }) {
  // const [state, dispatch] = useStoreContext();
  const { currentUser } = useAuth();

  //function handleFavorite...
  // function handleInputChange(event) {
  //   const { value } = event.target;
  //   API.setFavorite(value);
  // }
  // const addFavorite = () => {
  //   dispatch({
  //     type: ADD_FAVORITE,
  //     post: state.currentPost
  //   });
  // };

  return (
    <Card>
      <Card.Body>
        <Card.Title
          // onClick={handleInputChange}
          style={{ fontFamily: "Permanent Marker" }}
        >
          {name}
          {currentUser && <FcLike href="/favorites"></FcLike>}
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
