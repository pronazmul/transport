/* eslint-disable no-undef */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const followSchema = new Schema(
  {
    follower: { type: Schema.Types.ObjectId, ref: "User" },
    following: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { strict: false }
);
module.exports = mongoose.model("Follows", followSchema);
