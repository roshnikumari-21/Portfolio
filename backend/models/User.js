import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  phone: {
    type: String,
    required: true,
  },

  position: {
    type: String,
    required: true,
  },

  profilePicture: {
    type: String, // Cloudinary image URL
    default: "",
  },

  publicId: {
    type: String, // Cloudinary image ID (for deletion)
    default: "",
  },

  about: {
    type: String,
    default: "",
  },

  adminPassword: {
    type: String,
    required: true
    
  },
},
{
  timestamps: true,
});

export default mongoose.model("User", userSchema);
