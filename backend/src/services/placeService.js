const Place = require("../models/Place");

exports.getAll = async (qs) => {
  let query = Place.find();

  if (qs.where) {
    let [_, ownerId] = qs.where.split("=");
    ownerId = ownerId.replaceAll('"', "");
    query = query.where("_ownerId").eq(ownerId);
  }

  const result = await query;
  return result;
};

exports.create = (placeData) => Place.create(placeData);

exports.getOne = (placeId) => Place.findById(placeId);

exports.update = (placeId, placeData) =>
  Place.findByIdAndUpdate(placeId, placeData);

exports.delete = (placeId) => Place.findByIdAndDelete(placeId);
