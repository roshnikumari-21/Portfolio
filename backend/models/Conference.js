import mongoose from 'mongoose';

const ConferenceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  coAuthors: { type: [String], required: true },
  summary: { type: String, required: true },
});

const Conference = mongoose.model('Conference', ConferenceSchema);

export default Conference;
