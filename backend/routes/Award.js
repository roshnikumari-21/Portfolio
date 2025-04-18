import express from "express";
import Award from "../models/award.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const awards = await Award.find();
    res.json(awards);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newAward = new Award(req.body);
    await newAward.save();
    res.status(201).json(newAward);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedAward = await Award.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAward);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Award.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
