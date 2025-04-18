import mongoose from 'mongoose';

const awardSchema = new mongoose.Schema({
  title: String,
  year: String,
  description: String,
});

const Award = mongoose.model('Award', awardSchema);

export default Award;
