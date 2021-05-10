import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./FavoritesPage.css";
import { saveFavorite } from "../../utils/API";
import { ListGroup } from "react-bootstrap";
import Hero from "../../components/Hero";
// import DeleteBtn from "../components/DeleteBtn";
// import { REMOVE_FAVORITE, LOADING } from "../../utils/actions";
// import List from "../../components/List"
// import { Link } from "react-router-dom"



const FavoritesPage = () => {
  const [favorite, setFavorite] = useState([]);


  useEffect(() => {
    const getFavorite = async () => {
      const listFavorite = await saveFavorite();
      setFavorite(listFavorite.data[0].favorites);
    };
    getFavorite();
  }, []);
  console.log(favorite);

  // const removeFavorites = id => {
  //     dispatch({
  //       type: REMOVE_FAVORITE,
  //       _id: id
  //     });
  //   };


  return (
    <div className="container mb-5 mt-5">
      <Navbar />
      <Hero>
        <h1 className="text-center">Here's Your Favorite Dispensaries</h1>
      </Hero>
      <ListGroup>
        <div className="favorite-list">
          {favorite
            .sort((a, b) => {
              if (a.name[0] < b.name[0]) {
                return -1;
              }
              if (a.name[0] > b.name[0]) {
                return 1;
              }
              return 0;
            })
            .map((favoriteIndex) => (
              <div key={favoriteIndex.id}>
                <h1 style={{ color: "black", backgroundColor: "yellow" }}>
                  {favoriteIndex.name}, {favoriteIndex.display_address},
                  {favoriteIndex.display_phone}, {favoriteIndex.is_open_},
                  {favoriteIndex.rating}
                </h1>
              </div>
            ))
            // .filter((favoriteName) =>{
            //   return favoriteName.indexOf(favorite.name)
            // })
            }
        </div>
      </ListGroup>
    </div>
  );
};

export default FavoritesPage;
{
  /* {state.favorites.length ? (
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
      </div> */
}
