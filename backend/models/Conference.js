const mongoose = require("mongoose");

const ConferenceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  coAuthors: { type: [String], required: true },
  summary: { type: String, required: true }
});

module.exports = mongoose.model("Conference", ConferenceSchema);
