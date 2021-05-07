import React from "react";
import { Card } from "react-bootstrap";
<<<<<<< HEAD
import { FcLike } from "react-icons/fc";
// import API from "../../utils/API";
// import {useStoreContext} from "../../utils/GlobalState"
// import{ ADD_FAVORITE, REMOVE_FAVORITE } from "../../utils/actions"
=======
import { FcLike } from 'react-icons/fc';
// import { useStoreContext } from "../../utils/GlobalState";
import { useAuth } from "../../contexts/AuthContext"
// import{ ADD_FAVORITE } from "../../utils/actions"
>>>>>>> 54683c78fd39f5d7cc401c0050595ce4dbc6c880

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
<<<<<<< HEAD
        <Card.Title style={{ fontFamily: "Permanent Marker" }}>
          {name} <FcLike></FcLike>
=======
        <Card.Title style={{fontFamily:'Permanent Marker'}}>{name} 
        {currentUser && <FcLike href="/favorites" ></FcLike>}
>>>>>>> 54683c78fd39f5d7cc401c0050595ce4dbc6c880
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
