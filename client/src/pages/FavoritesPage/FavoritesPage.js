import React, {useEffect} from 'react'
// import DeleteBtn from "../components/DeleteBtn";
// import { REMOVE_FAVORITE, LOADING} from "../../utils/actions";
// import List from "../../components/List"
// import { Link } from "react-router-dom"
// import { useStoreContext} from "../../utils/GlobalState"

import './FavoritesPage.css'
import { setFavorite } from "../../utils/API";


const FavoritesPage = () => {
   

  useEffect(() => {
    // console.log(setFavorite());
    setFavorite().then(data => {
      console.log(data);
    });
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's Your Favorite Dispensaries</h1>
      {/* {state.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a dispensary to view in detail</h3>
          {state.favorites.map(post => (
            <List.Item key={post.id}>
              <Link to={"/" + post.id}>
                <strong>
                  {post.name}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFavorites(post.id)} />
            </List.Item>
          ))}
        </List>
      ) : (
        <h3>You can view your favorite dispensaries here once you </h3>
      )}
      <div className="mt-5">
        <Link to="/">Back to home</Link>
      </div> */}
    </div>
  );
};

export default FavoritesPage
