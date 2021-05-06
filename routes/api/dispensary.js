const router = require("express").Router();
const axios = require("axios");
router.get("/", async ({ query: { location, limit } }, res) => {
  try {
    const { data } = await axios.get(
      "https://api.yelp.com/v3/businesses/search",
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
          "Content-type": "application/json",
        },
        params: {
          location: location || "phoenix",
          term: "dispensary",
          limit: limit || 10,
        },
      }
    );
    res.json(data);
  } catch (err) {
    console.log("ERR", err);
    res.status(400).json(err);
  }
});

// GET - /api/dispensary/:id
// Retrieves data for a single dispensary
router.get("/:id", async ({ params: { id } }, res) => {
  try {
    const { data } = await axios.get(
      "https://api.yelp.com/v3/businesses/" + id,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
          "Content-type": "application/json",
        },
        params: {
          term: "dispensary",
        },
      }
    );
    res.json(data);
  } catch (err) {
    console.log(JSON.stringify(err, null, 2));
    res.status(400).json(err);
  }
});

module.exports = router;
