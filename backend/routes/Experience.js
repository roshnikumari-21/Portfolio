

const express = require("express");
const Experience = require("../models/Experience");
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { title, institution, location, startYear, endYear, responsibilities } = req.body;

    const newExperience = new Experience({
      title,
      institution,
      location,
      startYear,
      endYear,
      responsibilities,
    });

    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding experience" });
  }
});


router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching experiences" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } 
    );

    if (!updatedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json(updatedExperience);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating experience" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);

    if (!deletedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting experience" });
  }
});

module.exports = router;
