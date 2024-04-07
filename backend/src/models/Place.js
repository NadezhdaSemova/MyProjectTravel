const mongoose = require("mongoose");

const placeSchemahema = new mongoose.Schema({
  place: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  likes: {type: Array, required: true},
  ownerId: { type: String, require: true }
});

const Place = mongoose.model("Place", placeSchemahema);

module.exports = Place;
