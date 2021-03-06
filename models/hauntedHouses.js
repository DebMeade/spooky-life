const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const housesSchema = new Schema ({
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  link: { type: String, required: true },
});

const HauntedHouses = mongoose.model("HauntedHouses", housesSchema);

module.exports = HauntedHouses;

