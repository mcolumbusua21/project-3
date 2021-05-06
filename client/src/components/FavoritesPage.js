import React, { useEffect } from 'react'
import DeleteBtn from "../components/DeleteBtn";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

const FavoritesPage = () => {
    const [state, dispatch] = useStoreContext();

    const getFavorites = () => {
      dispatch({ type: LOADING });
      dispatch({ type: UPDATE_FAVORITES });
    };

const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's Your Favorite Dispensaries</h1>
      {state.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a dispensary to view in detail</h3>
          {state.favorites.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.name}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesPage
