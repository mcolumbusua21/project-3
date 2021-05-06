const axios = require("axios");

export const getDispensaries = ({ location, limit }) => {
  return axios.get("/api/dispensary", {
    params: {
      location,
      limit,
    },
  });
};

export const singleDispensary = (id) => {
  return axios.get("/api/dispensary/" + id);
};
