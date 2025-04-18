import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Corrected import
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import awardRoutes from './routes/Award.js';
import blogRoutes from './routes/Blog.js';
import conferenceRoutes from './routes/Conference.js'; // Added .js extension to be consistent
import projectRoutes from './routes/project.js'; // Added .js extension to be consistent
import mediaRoutes from './routes/Media.js'; // Added .js extension to be consistent
import experienceRoutes from './routes/Experience.js'; // Added .js extension to be consistent
import userRoutes from './routes/User.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('/api/blogs', blogRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/awards', awardRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/conferences', conferenceRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/user', userRoutes);

// Ping route
app.get('/ping', (req, res) => {
  res.send('PONG');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
