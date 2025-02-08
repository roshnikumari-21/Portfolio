
const express = require("express");
const Experience = require("../models/Experience");
const router = express.Router();


router.post("/add-experience", async (req, res) => {
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

    res.status(201).json({
      message: "Experience added successfully",
      experience: newExperience,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error adding experience",
    });
  }
});


router.get("/get-experiences", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching experiences",
    });
  }
});

module.exports = router;
