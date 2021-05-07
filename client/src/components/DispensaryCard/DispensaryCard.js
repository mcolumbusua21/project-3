import React from "react";
import { Card } from "react-bootstrap";
import { FcLike } from 'react-icons/fc';
// import { useStoreContext } from "../../utils/GlobalState";
import { useAuth } from "../../contexts/AuthContext"
// import{ ADD_FAVORITE } from "../../utils/actions"

function DispensaryCard({ name, location, display_phone, is_closed, rating, }) {
  // const [state, dispatch] = useStoreContext();
  const {currentUser} = useAuth();

  // const addFavorite = () => {
  //   dispatch({
  //     type: ADD_FAVORITE, 
  //     post: state.currentPost
  //   });
  // };



  return (
    <Card>
      <Card.Body>
        <Card.Title style={{fontFamily:'Permanent Marker'}}>{name} 
        {currentUser && <FcLike href="/favorites" ></FcLike>}
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
