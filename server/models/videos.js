/* eslint-disable no-undef */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  category: { type: String, required: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  views: { type: Number, required: false },
  likes: { type: Number, required: false },
  dislikes: { type: Number, required: false },
  uploadDate: { type: Date, required: false },
  duration: { type: Number, required: false },
  thumbnailURL: { type: String, required: false },
  videoURL: { type: String, required: true },
  // Add more fields as needed.
});

module.exports = mongoose.model("Video", VideoSchema);
