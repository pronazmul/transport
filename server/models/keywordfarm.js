/* eslint-disable no-undef */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const keywordFarmSchema = new Schema({
  content: { type: String, required: true },
  weight: { type: Number, default: 0 }, //weight of a keyword is in between 0 and 10
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

module.exports = mongoose.model("KeywordFarm", keywordFarmSchema);
