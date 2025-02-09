const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  filePath: { type: String, required: true }, // Path to stored file
  fileType: { type: String, required: true }, // image or video
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Media", MediaSchema);
