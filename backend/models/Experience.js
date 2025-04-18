import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startYear: {
    type: Number,
    required: true,
  },
  endYear: {
    type: Number,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
});

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
