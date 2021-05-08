import React from "react";
import { Card } from "react-bootstrap";
<<<<<<< HEAD
import { FcLike } from 'react-icons/fc';
=======
import { FcLike } from "react-icons/fc";
>>>>>>> 6758db5ea1d446a9e4ec541a412d56042cb4ea92
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

  console.log(currentUser.uid);

  return (
    <Card>
      <Card.Body>
<<<<<<< HEAD
        <Card.Title style={{fontFamily:'Permanent Marker'}}>{name} 
        {currentUser && <FcLike href="/favorites" ></FcLike>}
=======
        <Card.Title
          // onClick={handleInputChange}
          style={{ fontFamily: "Permanent Marker" }}
        >
          {name}
          {currentUser && (
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
          )}
>>>>>>> 6758db5ea1d446a9e4ec541a412d56042cb4ea92
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
