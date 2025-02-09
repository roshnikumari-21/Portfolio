


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { FaProjectDiagram, FaAward, FaBriefcase, FaBlog, FaUniversity, FaImages } from "react-icons/fa";

const Admin = () => {
  const location = useLocation();

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="fw-bold ">Admin Panel</h1>
        <p className="text-muted">Manage the professor's portfolio data here.</p>
      </div>

      <nav className="nav nav-tabs mb-4  fs-5 justify-content-center">
        <Link className={`nav-link ${location.pathname === "/admin/projects" ? "active" : ""}`} to="/admin/projects">
          <FaProjectDiagram className="me-2" /> Projects
        </Link>
        <Link className={`nav-link ${location.pathname === "/admin/awards" ? "active" : ""}`} to="/admin/awards">
          <FaAward className="me-2" /> Awards
        </Link>
        <Link className={`nav-link ${location.pathname === "/admin/experiences" ? "active" : ""}`} to="/admin/experiences">
          <FaBriefcase className="me-2" /> Experiences
        </Link>
        <Link className={`nav-link ${location.pathname === "/admin/blogs" ? "active" : ""}`} to="/admin/blogs">
          <FaBlog className="me-2" /> Blogs
        </Link>
        <Link className={`nav-link ${location.pathname === "/admin/conference" ? "active" : ""}`} to="/admin/conference">
          <FaUniversity className="me-2" /> Conferences
        </Link>
        <Link className={`nav-link ${location.pathname === "/admin/media" ? "active" : ""}`} to="/admin/media">
          <FaImages className="me-2" /> Media
        </Link>
      </nav>
    </div>
  );
};

export default Admin;
