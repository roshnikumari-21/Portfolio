

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    outcomes: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [editProject, setEditProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // helps reset file input

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/projects`);
      if (!Array.isArray(response.data)) throw new Error("API did not return an array");
      setProjects(response.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const handleAddOrUpdateProject = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newProject.title);
    formData.append("description", newProject.description);
    formData.append("outcomes", newProject.outcomes);
    if (newProject.image) formData.append("image", newProject.image);

    try {
      if (editProject) {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/projects/${editProject._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/projects`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      // Reset
      setNewProject({ title: "", description: "", outcomes: "", image: null });
      setPreviewImage(null);
      setEditProject(null);
      setFileInputKey(Date.now());
      fetchProjects();
    } catch (err) {
      console.error("Error saving project:", err);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/projects/${id}`);
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewProject({ ...newProject, image: file });
    setPreviewImage(file ? URL.createObjectURL(file) : null);
  };

  const handleEdit = (project) => {
    setEditProject(project);
    setNewProject({
      title: project.title,
      description: project.description,
      outcomes: project.outcomes,
      image: null,
    });
    setPreviewImage(project.image);
    setFileInputKey(Date.now());
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Manage Projects</h1>

      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {/* Form */}
      <div className="card p-4 mb-4 shadow">
        <form onSubmit={handleAddOrUpdateProject} encType="multipart/form-data">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Outcomes"
              value={newProject.outcomes}
              onChange={(e) => setNewProject({ ...newProject, outcomes: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <input
              key={fileInputKey}
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleFileChange}
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-3 img-thumbnail"
                style={{ height: "150px", objectFit: "cover" }}
              />
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {editProject ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>

      {/* Projects Display */}
      <div className="row">
        {projects.length === 0 ? (
          <p className="text-center">No projects available.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top img-fluid"
                    style={{ height: "250px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x250?text=Image+Unavailable";
                    }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">
                    <strong>Outcomes:</strong> {project.outcomes}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-warning btn-sm" onClick={() => handleEdit(project)}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteProject(project._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectsAdmin;
