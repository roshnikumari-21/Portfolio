import express from "express";
import mongoose from "mongoose";
import Media from "../models/Media.js";
import { uploadMedia } from "../controllers/uploadcontroller.js";
import { upload } from "../middleware/multer.js";
import cloudinary from "../config/cloudinary.js"; // Your configured cloudinary

const router = express.Router();

// Upload media
router.post("/upload", upload.single("file"), uploadMedia);

// Fetch all media
router.get("/", async (req, res) => {
  try {
    const media = await Media.find().sort({ uploadedAt: -1 });
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete media from Cloudinary and DB
router.delete("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid media ID" });
    }

    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: "Media not found" });

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(media.publicId, {
      resource_type: media.fileType, // 'image' or 'video'
    });

    // Delete from MongoDB
    await Media.findByIdAndDelete(req.params.id);
    res.json({ message: "Media deleted successfully" });

  } catch (error) {
    res.status(500).json({
      error: "Error deleting media",
      details: error.message,
    });
  }
});

export default router;
