import multer from 'multer';
import cloudinary from '../config/cloudinary.js';  // Adjust the path to where you have your Cloudinary config
import { v2 as cloudinaryUploader } from 'cloudinary';
import fs from 'fs';
import path from 'path';

// Cloudinary upload helper function
const uploadToCloudinary = async (localPath) => {
  const result = await cloudinaryUploader.uploader.upload(localPath, {
    folder: 'uploads', // You can change the folder in Cloudinary if needed
    resource_type: 'auto', // Supports both images and videos
  });
  fs.unlinkSync(localPath); // Delete the local file after upload
  return result;
};

// Multer storage setup for temporary storage before Cloudinary upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Temporary local storage before uploading to Cloudinary
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);  // Add timestamp to prevent filename collisions
  },
});

// Set up Multer to handle file uploads
const upload = multer({ storage });

// Middleware to upload a file directly to Cloudinary
const cloudinaryUpload = async (req, res, next) => {
  if (!req.file) return next();  // Proceed if no file is uploaded
  
  try {
    const result = await uploadToCloudinary(req.file.path);
    console.log("Cloudinary Upload Result:", result); // Log the result
    req.fileUrl = result.secure_url;  // Store the file URL for later use in route handler
    req.filePublicId = result.public_id;  // Store the public ID for future reference (e.g., deletion)
    next();  // Proceed to the next middleware/route handler
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    res.status(500).json({ error: 'Cloudinary upload failed' });
  }
};

export { upload, cloudinaryUpload };
