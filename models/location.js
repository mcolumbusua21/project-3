const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  business_name: { type: String, required: true },
  street_address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  body: String,
  // date: { type: Date, default: Date.now }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;