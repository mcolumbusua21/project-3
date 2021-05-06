const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  display_address: { type: String, required: true },
  display_phone: { type: String, required: true },
  rating: { type: String, required: true },  
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
