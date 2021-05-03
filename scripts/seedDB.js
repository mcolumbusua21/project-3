const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const favoriteSeed = [
  {
    username: "Bobby Flay",
    email: "bobby@flay.com",
    business_name: "Suuup",
    street_address: "1111 S La Cholla blvd",
    city: "Tucson",
    state: "Az",
    zipcode: "85743",
    body:
      "Here we have a location...",
  },
  {
    username: "Emeril Agassi",
    email: "emeril@agassi.com",
    business_name: "Hiiii",
    street_address: "2222 N Main st",
    city: "San Diego",
    state: "Ca",
    zipcode: "95353",
    body:
      "Here we have another location?",
  },
  {
    username: "Rachel Ray",
    email.: "rachel@ray.com",
    business_name: "Yooo",
    street_address: "3333 E Mission rd",
    city: "Reno",
    state: "Nv",
    zipcode: "75998",
    body:
      "Here we have a final location!",
  }
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(favoriteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });