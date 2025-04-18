import express from "express";
import User from "../models/User.js";
import { upload, cloudinaryUpload } from "../middleware/multer.js";

const router = express.Router();

// POST route - Create a new user
router.post(
  "/",
  upload.single("profilePicture"),  // Multer middleware to handle file upload
  cloudinaryUpload,  // Cloudinary upload middleware
  async (req, res) => {
    try {
      // Prevent multiple users if only one is intended
      const existingUser = await User.findOne();
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const { name, email, phone, position, about, adminPassword } = req.body;

      if (!name || !email || !adminPassword) {
        return res.status(400).json({
          message: "Name, email, and password are required",
        });
      }

      // Handle profile picture
      const newUserData = {
        name,
        email,
        phone,
        position,
        about,
        adminPassword,
        profilePicture: "",  // Default to empty if no file is uploaded
        publicId: "",  // Default to empty if no file is uploaded
      };

      if (req.fileUrl) {
        // Save the Cloudinary URL and public ID if a profile picture is uploaded
        newUserData.profilePicture = req.fileUrl;
        newUserData.publicId = req.filePublicId;
      }

      const newUser = new User(newUserData);

      await newUser.save();
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// GET route - Fetch the user (for profile page)
router.get("/", async (req, res) => {
  try {
    const user = await User.findOne(); // Only one user expected
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT route - Update user (with profile picture)
router.put(
  "/",
  upload.single("profilePicture"),  // Multer middleware to handle the file upload
  cloudinaryUpload,  // Cloudinary upload middleware
  async (req, res) => {
    try {
      const user = await User.findOne(); // Only one user exists
      if (!user) return res.status(404).json({ error: "User not found" });

      // Update only provided fields
      const { name, email, phone, position, about, adminPassword } = req.body;
      if (name) user.name = name;
      if (email) user.email = email;
      if (phone) user.phone = phone;
      if (position) user.position = position;
      if (about) user.about = about;
      if (adminPassword) user.adminPassword = adminPassword;

      // Profile Picture update
      if (req.fileUrl) {
        user.profilePicture = req.fileUrl;  // Save the Cloudinary URL
        user.publicId = req.filePublicId;  // Save the Cloudinary public ID
      }

      await user.save();  // Save updated user to the database
      res.json(user);  // Send updated user as the response
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

export default router;
