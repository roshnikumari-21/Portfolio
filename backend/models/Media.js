import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  filePath: { type: String, required: true },
  fileType: { type: String, required: true },
  publicId: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const Media = mongoose.model('Media', MediaSchema);

export default Media;
