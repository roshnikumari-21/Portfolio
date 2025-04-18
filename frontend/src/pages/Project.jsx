

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []); 

  useEffect(() => {
    if (search !== "") {
      fetchProjects();
    }
  }, [search]); // Fetch projects every time search changes

  const fetchProjects = async () => {
    setLoading(true);
    setError('');  // Reset previous errors

    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/projects`, {
        params: { search }
      });

      console.log("API Response:", response.data);

      if (!Array.isArray(response.data)) {
        throw new Error("API did not return an array");
      }

      setProjects(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.response?.data?.error || 'Error fetching projects');
      setLoading(false);
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
      <h1 className="text-center mb-4">Projects</h1>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title, description, or outcomes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state as user types
        />
      </div>

      <div className="row">
        {projects.length === 0 ? (
          <p className="text-center">No projects found.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="col-md-6 mb-4">
              <div className="card shadow h-100">
                <img
                  src={project.image} // Assuming this is the full URL from Cloudinary
                  alt={project.title}
                  className="card-img-top img-fluid"
                  onError={(e) => { e.target.src = 'default-image-url.jpg'; }} // Fallback image
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    <i className="fas fa-project-diagram text-primary"></i> {project.title}
                  </h5>
                  <hr />
                  <p className="card-text">{project.description}</p>
                  <hr />
                  <p className="card-text">
                    <i className="fas fa-check-circle text-success"></i>
                    <strong> Outcomes:</strong> {project.outcomes}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
