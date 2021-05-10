require("dotenv").config();
const express = require("express");
const logger = require("morgan");
// const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
  });
}
app.use(logger("dev"));
app.use(express.static("public"));

//use api routes
app.use("/", require("./routes"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://stephanie:8385tas@cluster0.s3qz3.mongodb.net/favorite_db?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});


// app.get("/", function (req, res) {
// //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// // });
//   res.sendFile(path.join(__dirname + "./client/public"));
// });


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



//mongodb URI
//mongodb+srv://stephanie:8385tas@cluster0.s3qz3.mongodb.net/favorite_db?retryWrites=true&w=majority

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