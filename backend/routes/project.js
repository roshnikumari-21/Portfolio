import express from "express";
import path from "path";
import Project from "../models/project.js";
import { upload, cloudinaryUpload } from "../middleware/multer.js"; // Import middleware

const router = express.Router();

// CREATE project
router.post("/", upload.single("image"), cloudinaryUpload, async (req, res) => {
  const { title, description, outcomes } = req.body;

  if (!title || !description || !outcomes) {
    return res.status(400).json({ error: "Title, description, and outcomes are required" });
  }

  try {
    if (!req.fileUrl || !req.filePublicId) {
      return res.status(400).json({ error: "Image file upload failed" });
    }

    const newProject = new Project({
      title,
      description,
      outcomes,
      image: req.fileUrl, // Use the file URL stored by cloudinaryUpload
      publicId: req.filePublicId, // Use the publicId stored by cloudinaryUpload
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error("Error adding project:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
});

// READ all projects (with optional search)
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { outcomes: { $regex: search, $options: "i" } },
      ];
    }

    const projects = await Project.find(query);
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: error.message || "Server error" });
  }
});

// UPDATE project
router.put("/:id", upload.single("image"), cloudinaryUpload, async (req, res) => {
  const { id } = req.params;
  const { title, description, outcomes } = req.body;

  try {
    let image;
    let publicId;

    if (req.fileUrl && req.filePublicId) {
      image = req.fileUrl;
      publicId = req.filePublicId;
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        description,
        outcomes,
        ...(image && { image }), // Only update image if a new one is uploaded
        ...(publicId && { publicId }), // Only update publicId if a new one is uploaded
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.status(200).json(updatedProject);
  } catch (err) {
    console.error("Error updating project:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
});

// DELETE project and remove the file from Cloudinary
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Delete the media file from Cloudinary
    await cloudinary.uploader.destroy(project.publicId);

    // Now, delete the project from the database
    await Project.findByIdAndDelete(id);

    res.status(200).json({ message: "Project and media deleted" });
  } catch (err) {
    console.error("Error deleting project:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
});

export default router;
