const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  filePath: { type: String, required: true }, 
  fileType: { type: String, required: true }, 
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Media", MediaSchema);
