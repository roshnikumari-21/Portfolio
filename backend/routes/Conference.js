const express = require("express");
const router = express.Router();
const Conference = require("../models/Conference");


router.get("/", async (req, res) => {
  try {
    const conferences = await Conference.find();
    res.json(conferences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const { name, location, date, coAuthors, summary } = req.body;
    const newConference = new Conference({ name, location, date, coAuthors, summary });
    await newConference.save();
    res.status(201).json(newConference);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updatedConference = await Conference.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedConference);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await Conference.findByIdAndDelete(req.params.id);
    res.json({ message: "Conference deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
