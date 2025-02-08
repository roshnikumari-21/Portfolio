import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Project from './pages/Project.jsx';

import Home from './pages/Home.jsx';
import Password from './pages/Password.jsx';
import Admin from './pages/Admin.jsx';
import Award from './pages/Award.jsx';
import Experience from './pages/Experience.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
         
          
          <Route path="/award" element={<Award />} />
         
          <Route path="/project" element={<Project />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/experience" element={<Experience />} />
          
          <Route path="/protected" element={<Password />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
