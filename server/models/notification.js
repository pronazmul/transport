/* eslint-disable no-undef */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    content: String,
    timestamp: { type: Date, default: Date.now },
    read: { type: Boolean, default: false },
  },
  { strict: false }
);

module.exports = mongoose.model("Notification", notificationSchema);
