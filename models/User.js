const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uuid: { type: String, required: true },
  favorites: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      display_address: { type: String, required: true },
      display_phone: { type: String, required: true },
      is_open: { type: Boolean, required: true },
      rating: { type: String, required: true },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
