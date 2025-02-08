const express = require('express');
const multer = require('multer');
const path = require('path');
const Project = require('../models/project'); 

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname) 
    );
  },
});
const upload = multer({ storage: storage });


router.post('/add-project', upload.single('image'), async (req, res) => {
  const { title, description, outcomes } = req.body;
  const image = req.file.path; 

  try {
    const newProject = new Project({
      title,
      description,
      outcomes,
      image,
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error('Error adding project:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


router.put('/update-project/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { title, description, outcomes } = req.body;
  const image = req.file ? req.file.path : null; 

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        description,
        outcomes,
        image: image || undefined, 
      },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    console.error('Error updating project:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


router.delete('/delete-project/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: 'Project deleted' });
  } catch (err) {
    console.error('Error deleting project:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
