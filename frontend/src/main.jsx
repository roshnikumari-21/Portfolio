
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Project from "./pages/Project.jsx";
import Protected from "./components/Protected.jsx";

import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Password from "./pages/Password.jsx";
import Admin from "./components/Admin.jsx";
import Award from "./pages/Award.jsx";
import Experience from "./pages/Experience.jsx";
import ProjectsAdmin from "./components/ProjectsAdmin.jsx";
import AwardsAdmin from "./components/AwardsAdmin";
import ConferenceAdmin from "./components/ConferenceAdmin.jsx";
import ExperiencesAdmin from "./components/ExperiencesAdmin";
import BlogsAdmin from "./components/BlogsAdmin";
import Conferences from "./pages/Conference.jsx";
import MediaAdmin from "./components/MediaAdmin.jsx";
import ProfileAdmin from "./components/ProfileAdmin.jsx";
import Media from "./pages/Media.jsx";
import { AuthProvider } from "./pages/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
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
            <Route path="experience" element={<Experience />} />
            <Route path="protected" element={<Password />} />

           
            <Route path="admin" element={<Protected />}>
              <Route index element={<Admin />} />
              <Route path="projects" element={<ProjectsAdmin />} />
              <Route path="awards" element={<AwardsAdmin />} />
              <Route path="experiences" element={<ExperiencesAdmin />} />
              <Route path="profile" element={<ProfileAdmin/>} />
              
              <Route path="media" element={<MediaAdmin />} />
              <Route path="conference" element={<ConferenceAdmin />} />
              <Route path="blogs" element={<BlogsAdmin />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

