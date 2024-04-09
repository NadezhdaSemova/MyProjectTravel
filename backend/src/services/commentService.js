const Coment = require('../models/Comments')

exports.getAll = async (qs) => {
  let query = Coment.find();

  if (qs.where) {
    let [_, ownerId] = qs.where.split("=");
    ownerId = ownerId.replaceAll('"', "");
    query = query.where("_ownerId").eq(ownerId);
  }

  const result = await query;
  return result;
};

exports.create = (commentData) => Coment.create(commentData);
exports.getOne = (commentId) => Place.findById(commentId);
exports.delete = (commentId) => Coment.findByIdAndDelete(commentId);
