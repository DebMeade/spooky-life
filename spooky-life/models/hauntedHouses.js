const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const housesSchema = new Schema ({
  name: { type: String, required: true },
  rating: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  url: { url: String, required: true },
});

const HauntedHouses = mongoose.model("HauntedHouses", housesSchema);

module.exports = HauntedHouses;

