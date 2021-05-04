const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  business_name: { type: String, required: true },
  street_address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  body: String,
  
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
