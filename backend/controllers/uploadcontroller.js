// controllers/uploadController.js
import cloudinary from "../config/cloudinary.js"; // adjust path if needed
import fs from "fs";
import Media from "../models/Media.js"; // your Mongoose model

export const uploadMedia = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "File is required" });

    const filePath = req.file.path;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto", // handles both images and videos
      folder: "mediaUploads",
    });

    // Delete local file
    fs.unlinkSync(filePath);

    // Save metadata in MongoDB
    const newMedia = new Media({
      caption: req.body.caption,
      filePath: result.secure_url,
      fileType: result.resource_type,
      publicId: result.public_id,
    });

    await newMedia.save();
    res.status(201).json(newMedia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
