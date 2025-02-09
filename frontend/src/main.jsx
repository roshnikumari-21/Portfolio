import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Project from './pages/Project.jsx';

import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Password from './pages/Password.jsx';
import Admin from './components/Admin.jsx';
import Award from './pages/Award.jsx';
import Experience from './pages/Experience.jsx';
import ProjectsAdmin from "./components/ProjectsAdmin.jsx";
import AwardsAdmin from "./components/AwardsAdmin";
import ConferenceAdmin from './components/ConferenceAdmin.jsx';
import ExperiencesAdmin from "./components/ExperiencesAdmin";
import BlogsAdmin from "./components/BlogsAdmin";
import Conferences from './pages/Conference.jsx';
import MediaAdmin from './components/MediaAdmin.jsx';
import Media from './pages/Media.jsx';




createRoot(document.getElementById('root')).render(
 
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="award" element={<Award />} />
        <Route path="blog" element={<Blog />} />
        <Route path="conference" element={<Conferences />} />
        <Route path="project" element={<Project />} />
        <Route path="media" element={<Media />} />
        <Route path="admin" element={<Admin />} />
        <Route path="experience" element={<Experience />} />
        <Route path="protected" element={<Password />} />

        {/* Admin Routes */}
        <Route path="admin/projects" element={<ProjectsAdmin />} />
        <Route path="admin/awards" element={<AwardsAdmin />} />
        <Route path="admin/experiences" element={<ExperiencesAdmin />} />
        <Route path="admin/media" element={<MediaAdmin />} />
        <Route path="admin/conference" element={<ConferenceAdmin />} />
        <Route path="admin/blogs" element={<BlogsAdmin />} />
      </Route>
    </Routes>
  </BrowserRouter>
</StrictMode>

);
