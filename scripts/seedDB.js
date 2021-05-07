const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/favorite_db");

const favoriteSeed = [
  {
    id: "11",
    name: "Suuup",
    display_address: "1111 S La Cholla blvd",
    display_phone: "111-111-1111", 
    rating: "2"
  },
  {
    id: "22",
    name: "Hiiii",
    display_address: "2222 N Main st",
    display_phone: "222-222-2222",
    rating: "3"
  },
  {
    id: "33",
    name: "Yooo",
    display_address: "3333 E Mission rd",
    display_phone: "333-333-3333",
    rating: "4"
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