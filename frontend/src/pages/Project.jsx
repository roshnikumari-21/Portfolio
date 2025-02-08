import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects/projects');
        console.log(response.data); 
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="project-card">
                <img
  src={project.image || 'default-image-url.jpg'} // Fallback image
  alt={project.title}
  className="project-image"
/>

              
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Outcomes:</strong> {project.outcomes}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
