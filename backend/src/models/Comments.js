const mongoose = require("mongoose");

const comentsSchemahema = new mongoose.Schema({
  email: { type: String, required: true },
  comment: { type: String, required: true },
  placeId: { type: String, required: true },
  ownerId: { type: String, require: true }
}, { timestamps: { createdAt: 'created_at' } });


const Coment = mongoose.model("Coment", comentsSchemahema);

module.exports = Coment;