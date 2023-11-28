/* eslint-disable no-undef */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const threadSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    posts: {
      sequenceId: { type: Number, required: true },
      postId: { type: Number, required: true },
    },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  },
  { strict: false }
);

module.exports = mongoose.model("Thread", threadSchema);
