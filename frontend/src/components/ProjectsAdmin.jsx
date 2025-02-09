


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
  const [editProject, setEditProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/projects/projects");
      if (!Array.isArray(response.data)) {
        throw new Error("API did not return an array");
      }
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Error fetching projects");
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
        await axios.put(`http://localhost:5000/api/projects/update-project/${editProject._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        const response = await axios.post("http://localhost:5000/api/projects/add-project", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setProjects([...projects, response.data]);
      }

      setNewProject({ title: "", description: "", outcomes: "", image: null });
      setEditProject(null);
      fetchProjects();
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/delete-project/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Manage Projects</h1>

     
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
              type="file"
              className="form-control"
              onChange={(e) => setNewProject({ ...newProject, image: e.target.files[0] })}
              accept="image/*"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {editProject ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>

     
      <div className="row">
        {projects.length === 0 ? (
          <p className="text-center">No projects available.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={`http://localhost:5000/${project.image.replace(/\\/g, "/")}`}
                  alt={project.title}
                  className="card-img-top img-fluid"
                  onError={(e) => {
                    e.target.src = "default-image-url.jpg"; 
                  }}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">
                    <strong>Outcomes:</strong> {project.outcomes}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => {
                        setEditProject(project);
                        setNewProject({
                          title: project.title,
                          description: project.description,
                          outcomes: project.outcomes,
                          image: null,
                        });
                      }}
                    >
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
