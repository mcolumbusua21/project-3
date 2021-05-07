const router = require("express").Router();
const axios = require("axios");
const Favorite = require("../../models/favorite");

router.get("/", async ({ query }, res) => {
  const { location, limit } = query;
  try {
    if (!location) throw new Error("location url parameter must be provided");
    const { data } = await axios.get(
      "https://api.yelp.com/v3/businesses/search",
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
          "Content-type": "application/json",
        },
        params: {
          location: location,
          term: "dispensary",
          limit: limit || 10,
        },
      }
    );
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

//favorties route
router.post("/db", async (req, res) => {
  const favorite = new Favorite({
    name: req.body.name,
    address: req.body.display_address,
    phone: req.body.display_phone,
    open: req.body.is_open,
    rating: req.body.rating,
  });
  try {
    favorite = await favorite.save()
    res.redirect("/favorite")
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
      
    });
  }
  console.log(error.response);
});

// GET - /api/dispensary/:id
// Retrieves data for a single dispensary
// router.get("/:id", async ({ params: { id } }, res) => {
//   try {
//     const { data } = await axios.get(
//       "https://api.yelp.com/v3/businesses/" + id,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.YELP_API_KEY}`,
//           "Content-type": "application/json",
//         },
//         params: {
//           term: "dispensary",
//         },
//       }
//     );
//     res.json(data);
//   } catch (err) {
//     console.log(JSON.stringify(err, null, 2));
//     res.status(400).json(err);
//   }
// });

module.exports = router;
