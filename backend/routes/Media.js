// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// const Media= require('../models/Media');





// // Configure Multer for file storage
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//   },
// });

// const upload = multer({ storage });

// // 📌 Route to upload media (image/video)
// router.post("/upload", upload.single("file"), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: "File is required" });

//     const newMedia = new Media({
//       caption: req.body.caption,
//       filePath: `/uploads/${req.file.filename}`,
//       fileType: req.file.mimetype.startsWith("image/") ? "image" : "video",
//     });

//     await newMedia.save();
//     res.status(201).json(newMedia);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 📌 Route to get all media
// router.get("/", async (req, res) => {
//   try {
//     const media = await Media.find().sort({ uploadedAt: -1 });
//     res.json(media);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });




// router.delete("/:id", async (req, res) => {
//     try {
//       console.log("Received delete request for ID:", req.params.id);
  
//       // Ensure the ID is valid
//       if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//         return res.status(400).json({ error: "Invalid media ID" });
//       }
  
//       // Find media in database
//       const media = await Media.findById(req.params.id);
//       if (!media) return res.status(404).json({ message: "Media not found" });
  
//       // Delete file from server storage
//       const filePath = path.join(__dirname, "..", media.filePath); // Fix the path
//       console.log("Attempting to delete file at:", filePath);
  
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//         console.log("File deleted successfully.");
//       } else {
//         console.warn("File not found:", filePath);
//       }
  
//       // Delete from database
//       await Media.findByIdAndDelete(req.params.id);
//       res.json({ message: "Media deleted successfully" });
  
//     } catch (error) {
//       console.error("Error deleting media:", error);
//       res.status(500).json({ error: "Error deleting media" });
//     }
//   });
  

// module.exports = router;



const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // ✅ Import fs
const Media = require("../models/Media");

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });



router.post("/upload", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: "File is required" });
  
      const newMedia = new Media({
        caption: req.body.caption,
        filePath: `/uploads/${req.file.filename}`, // ✅ Ensure consistent path
        fileType: req.file.mimetype.startsWith("image/") ? "image" : "video",
      });
  
      await newMedia.save();
      res.status(201).json(newMedia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// 📌 Route to get all media
router.get("/", async (req, res) => {
  try {
    const media = await Media.find().sort({ uploadedAt: -1 });
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Route to delete media
router.delete("/:id", async (req, res) => {
  try {
    console.log("Received delete request for ID:", req.params.id);

    // Ensure the ID is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid media ID" });
    }

    // Find media in database
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: "Media not found" });

    // ✅ Correct File Path
    const filePath = path.join(__dirname, "..", "uploads", media.filePath); 
    console.log("Attempting to delete file at:", filePath);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("File deleted successfully.");
    } else {
      console.warn("File not found:", filePath);
    }

    // Delete from database
    await Media.findByIdAndDelete(req.params.id);
    res.json({ message: "Media deleted successfully" });

  } catch (error) {
    console.error("Error deleting media:", error);
    res.status(500).json({ error: "Error deleting media", details: error.message });
  }
});

module.exports = router;

