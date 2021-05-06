require("dotenv").config();
const express = require("express");
const axios = require("axios");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("public"));
// Add routes, both API and view
// app.get("/dispensarylist", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://api.yelp.com/v3/businesses/search?categories=dispensary,dispensaries`
//     );
//     const { data } = response;
//     res.json(data);
//   } catch (err) {
//     console.log(err);
//   }
// });
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
