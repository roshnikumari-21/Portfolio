import express from 'express';
import mongoose from 'mongoose';
import Blog from '../models/Blog.js';
import { upload, cloudinaryUpload } from '../middleware/multer.js';
import cloudinary from 'cloudinary';

const router = express.Router();

// Get All Blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add New Blog
router.post('/', upload.single('image'), cloudinaryUpload, async (req, res) => {
  try {
    const { title, content } = req.body;

    const newBlog = new Blog({
      title,
      content,
      image: req.fileUrl || null,
      publicId: req.filePublicId || null,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error('Error creating blog:', err);
    res.status(500).json({ error: 'Server error while creating blog' });
  }
});

// Update Blog
router.put('/:id', upload.single('image'), cloudinaryUpload, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid blog ID' });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;

    // If new image, remove old image from Cloudinary
    if (req.fileUrl) {
      if (blog.publicId) {
        await cloudinary.v2.uploader.destroy(blog.publicId);
      }
      blog.image = req.fileUrl;
      blog.publicId = req.filePublicId;
    }

    await blog.save();
    res.status(200).json(blog);
  } catch (err) {
    console.error('Error updating blog:', err);
    res.status(500).json({ error: 'Server error while updating blog' });
  }
});

// Delete Blog
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid blog ID' });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    // Remove Cloudinary image if exists
    if (blog.publicId) {
      await cloudinary.v2.uploader.destroy(blog.publicId);
    }

    await blog.deleteOne();
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Error deleting blog:', err);
    res.status(500).json({ error: 'Server error while deleting blog' });
  }
});

export default router;
