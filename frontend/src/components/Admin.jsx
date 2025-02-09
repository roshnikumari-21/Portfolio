import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Admin = () => {
  return (
    
      <div className="container mt-5">
        <h2>Admin Panel</h2>
        <p>Manage the professor's portfolio data here.</p>

        <nav className="nav nav-tabs mb-4">
          <Link className="nav-link" to="/admin/projects">Projects</Link>
          <Link className="nav-link" to="/admin/awards">Awards</Link>
          <Link className="nav-link" to="/admin/experiences">Experiences</Link>
          <Link className="nav-link" to="/admin/blogs">Blogs</Link>
          <Link className="nav-link" to="/admin/conference">Conferences</Link>
          <Link className="nav-link" to="/admin/media">Media</Link>
        </nav>
      </div>
        
  );
};

export default Admin;
