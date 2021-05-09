const mongoose = require("mongoose");
const Schema = mongoose.Schema;


<<<<<<< HEAD
  const favoriteSchema = new Schema({
    uuid: { type: String, required: true },
    favorites: [
      {
        name: { type: String, required: true },
        display_address: { type: String, required: true },
        display_phone: { type: String, required: true },
        is_open: { type: Boolean, required: true },
        rating: { type: String, required: true },
      },
    ],
  });

  
  
  
  
  
   

=======
const favoriteSchema = new Schema({
  uuid: { type: String, required: true },
  favorites: [
    {
      name: { type: String, required: true },
      display_address: { type: String, required: true },
      display_phone: { type: String, required: true },
      is_open: { type: Boolean, required: true },
      rating: { type: String, required: true },
    },
  ],
});
>>>>>>> 6758db5ea1d446a9e4ec541a412d56042cb4ea92

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
