const router = require("express").Router();
const axios = require("axios");
const Favorite = require("../../models/favorite");
const User = require("../../models/User");
// import { useAuth } from ("../../client/src/contexts/AuthContext")

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

router.get("/favorite", async (req, res) => {
  try{
    let userFav = await User.find();
    console.log(userFav)
    res.json(userFav)
  }
  catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

//favorties route
// POST - /api/dispensary/favorite
router.post("/favorite", async (req, res) => {
  console.log(req.body);
  try {
    let user = await User.findOne({ uuid: req.body.uuid });

    if (!user) {
      user = await new User({
        uuid: req.body.uuid,
      });
      await user.save();
    }

    const foo = await User.updateOne(
      { uuid: req.body.uuid },
      {
        $push: {
          favorites: {
            name: req.body.dispensary.name,
            display_address: req.body.dispensary.location.display_address.join(
              ", "
            ),
            display_phone: req.body.dispensary.display_phone,
            is_open: !req.body.dispensary.is_closed,
            rating: req.body.dispensary.rating,
          },
        },
      }
    );
    res.status(200).send("Saved!");
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});


// router.delete("/favorite", (req,res) => {
//   try{
//     User.findById(req.params.id)
//     .then(user => user.remove().then(() =>res.json({success:true})))
//   }catch(err){
//      res.status(404).json({success:false})
// }


module.exports = router;


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