/* eslint-disable no-undef */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: false,
      maxlength: 280,
    },
    media: [
      {
        type: String, // Store URLs or references to media files
      },
    ],
    mediaType: {
      type: String, // Store the type of media (e.g., "text", "image", "video", etc.)
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    retweets: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        text: String,
        created: { type: Date, default: Date.now() },
        postedBy: { type: mongoose.Schema.ObjectId, ref: "User" },
        replies: [
          {
            text: String,
            created: { type: Date, default: Date.now() },
            postedBy: { type: mongoose.Schema.ObjectId, ref: "User" },
          },
        ],
      },
    ],

    views: [
      {
        user: {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    keywords: [
      {
        content: { type: String },
        weight: { type: Number, default: 0 },
        timestamp: { type: Date, default: Date.now() },
      },
    ],
  },
  { strict: false }
);

module.exports = mongoose.model("Post", postSchema);
