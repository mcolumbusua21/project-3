const axios = require("axios");

export const getDispensaries = ({ location, limit }) => {
  return axios.get("/api/dispensary/", {
    params: {
      location,
      limit,
    },
  });
};

export const singleDispensary = (id) => {
  return axios.get("/api/dispensary/" + id);
};

export const saveFavorite = () => {
  return axios.get("/api/dispensary/favorite");
};

export const addToFavorite = ({ uuid, dispensary }) => {
  return axios.post("/api/dispensary/favorite", { uuid, dispensary });
};
