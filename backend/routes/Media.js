


const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); 
const Media = require("../models/Media");


const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage });



router.post("/upload", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: "File is required" });
  
      const newMedia = new Media({
        caption: req.body.caption,
        filePath: `/uploads/${req.file.filename}`, 
        fileType: req.file.mimetype.startsWith("image/") ? "image" : "video",
      });
  
      await newMedia.save();
      res.status(201).json(newMedia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


router.get("/", async (req, res) => {
  try {
    const media = await Media.find().sort({ uploadedAt: -1 });
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    console.log("Received delete request for ID:", req.params.id);

    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid media ID" });
    }

    
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: "Media not found" });

    
    const filePath = path.join(__dirname, "..", "uploads", media.filePath); 
    console.log("Attempting to delete file at:", filePath);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("File deleted successfully.");
    } else {
      console.warn("File not found:", filePath);
    }

    
    await Media.findByIdAndDelete(req.params.id);
    res.json({ message: "Media deleted successfully" });

  } catch (error) {
    console.error("Error deleting media:", error);
    res.status(500).json({ error: "Error deleting media", details: error.message });
  }
});

module.exports = router;

