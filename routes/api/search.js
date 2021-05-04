const router = require("express").Router();
const { default: axios } = require("axios");

router.get("/", async ({ query: { location } }, res) => {
  try {
    const { data } = await axios.get(
      "https://api.yelp.com/v3/businesses/search",
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
          "Content-type": "application/json",
        },
        params: {
          location,
          term: "dispensary",
          limit: 10,
        },
      }
    );
    res.json(data);
  } catch (err) {
    console.log(JSON.stringify(err, null, 2));
    res.status(400).json(err);
  }
});
router.get("/", async ({ query: { id } }, res) => {
  try {
    const { data } = await axios.get(
      "https://api.yelp.com/v3/businesses/search",
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
          "Content-type": "application/json",
        },
        params: {
          id,
          term: "dispensary",
          limit: 10,
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
