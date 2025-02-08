import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {


    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({
      title: '',
      description: '',
      outcomes: '',
      image: null,
    });
    const [editProject, setEditProject] = useState(null);

    const fetchProjects = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/projects');
          setProjects(response.data);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };


      const handleAddProject = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', newProject.image);
        formData.append('title', newProject.title);
        formData.append('description', newProject.description);
        formData.append('outcomes', newProject.outcomes);
    
        try {
          const response = await axios.post(
            'http://localhost:5000/api/projects/add-project',
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          );
          setProjects([...projects, response.data]);
          setNewProject({ title: '', description: '', outcomes: '', image: null });
        } catch (error) {
          console.error('Error adding project:', error);
        }
      };

      const handleUpdateProject = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (newProject.image) {
          formData.append('image', newProject.image);
        }
        formData.append('title', newProject.title);
        formData.append('description', newProject.description);
        formData.append('outcomes', newProject.outcomes);
    
        try {
          const response = await axios.put(
            `http://localhost:5000/api/projects/update-project/${editProject._id}`,
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          );
          setProjects(
            projects.map((project) =>
              project._id === editProject._id ? response.data : project
            )
          );
          setEditProject(null);
          setNewProject({ title: '', description: '', outcomes: '', image: null });
        } catch (error) {
          console.error('Error updating project:', error);
        }
      };
    
      // Handle project delete
      const handleDeleteProject = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/api/projects/delete-project/${id}`);
          setProjects(projects.filter((project) => project._id !== id));
        } catch (error) {
          console.error('Error deleting project:', error);
        }
      };
    
      useEffect(() => {
        fetchProjects();
      }, []);
    
    




  // State for awards and award editing
  const [awards, setAwards] = useState([]);
  const [editAward, setEditAward] = useState(null);
  const [newAward, setNewAward] = useState({
    title: "",
    year: "",
    description: "",
  });

  // State for experience section
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    title: "",
    institution: "",
    location: "",
    startYear: "",
    endYear: "",
    responsibilities: "",
  });
  const [editExperience, setEditExperience] = useState(null);

  const fetchAwards = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/awards");
      setAwards(response.data);
    } catch (error) {
      console.error("Error fetching awards:", error);
    }
  };

  const fetchExperiences = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/experience");
      setExperiences(response.data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  // Add new award
  const handleAddAward = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/awards", newAward);
      setAwards([...awards, response.data]);
      setNewAward({ title: "", year: "", description: "" });
    } catch (error) {
      console.error("Error adding award:", error);
    }
  };

  // Edit award
  const handleEditAward = (award) => {
    setEditAward(award);
  };

  // Update award
  const handleUpdateAward = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/awards/${editAward._id}`,
        editAward
      );
      setAwards(
        awards.map((award) =>
          award._id === editAward._id ? response.data : award
        )
      );
      setEditAward(null);
    } catch (error) {
      console.error("Error updating award:", error);
    }
  };

  // Delete award
  const handleDeleteAward = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/awards/${id}`);
      setAwards(awards.filter((award) => award._id !== id));
    } catch (error) {
      console.error("Error deleting award:", error);
    }
  };

  // Add new experience
  const handleAddExperience = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/experience/add-experience", newExperience);
      setExperiences([...experiences, response.data]);
      setNewExperience({
        title: "",
        institution: "",
        location: "",
        startYear: "",
        endYear: "",
        responsibilities: "",
      });
    } catch (error) {
      console.error("Error adding experience:", error);
    }
  };

  // Edit experience
  const handleEditExperience = (experience) => {
    setEditExperience(experience);
  };

  // Update experience
  const handleUpdateExperience = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/experience/update-experience/${editExperience._id}`,
        editExperience
      );
      setExperiences(
        experiences.map((experience) =>
          experience._id === editExperience._id ? response.data : experience
        )
      );
      setEditExperience(null);
    } catch (error) {
      console.error("Error updating experience:", error);
    }
  };

  // Delete experience
  const handleDeleteExperience = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/experience/${id}`);
      setExperiences(experiences.filter((experience) => experience._id !== id));
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  useEffect(() => {
    fetchAwards();
    fetchExperiences();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <p>Manage the professor's portfolio data here.</p>

      <h3>{editProject ? 'Edit Project' : 'Add New Project'}</h3>

      <form onSubmit={editProject ? handleUpdateProject : handleAddProject}>
        <div className="form-group">
          <label>Project Title</label>
          <input
            type="text"
            className="form-control"
            value={newProject.title}
            onChange={(e) =>
              setNewProject({ ...newProject, title: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Outcomes/Results</label>
          <textarea
            className="form-control"
            value={newProject.outcomes}
            onChange={(e) =>
              setNewProject({ ...newProject, outcomes: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Project Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) =>
              setNewProject({ ...newProject, image: e.target.files[0] })
            }
            accept="image/*"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {editProject ? 'Update Project' : 'Add Project'}
        </button>
      </form>


      <h3 className="mt-4">All Projects</h3>
      <div>
        <ul className="list-group">
          {projects.map((project) => (
            <li key={project._id} className="list-group-item">
              <h5>{project.title}</h5>
              <img src={`http://localhost:5000/${project.image}`} alt={project.title} width="100" />
              <p>{project.description}</p>
              <p>{project.outcomes}</p>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => {
                  setEditProject(project);
                  setNewProject({
                    title: project.title,
                    description: project.description,
                    outcomes: project.outcomes,
                    image: null, // Do not load the image in the form directly
                  });
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm ml-2"
                onClick={() => handleDeleteProject(project._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience Form */}
      <h3>Add Your Experience</h3>
      <form onSubmit={(e) => { e.preventDefault(); handleAddExperience(); }}>
        <div className="form-group">
          <label>Title/Position</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={newExperience.title}
            onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Institution Name</label>
          <input
            type="text"
            className="form-control"
            name="institution"
            value={newExperience.institution}
            onChange={(e) => setNewExperience({ ...newExperience, institution: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={newExperience.location}
            onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Year</label>
          <input
            type="number"
            className="form-control"
            name="startYear"
            value={newExperience.startYear}
            onChange={(e) => setNewExperience({ ...newExperience, startYear: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>End Year</label>
          <input
            type="number"
            className="form-control"
            name="endYear"
            value={newExperience.endYear}
            onChange={(e) => setNewExperience({ ...newExperience, endYear: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Responsibilities</label>
          <textarea
            className="form-control"
            name="responsibilities"
            value={newExperience.responsibilities}
            onChange={(e) => setNewExperience({ ...newExperience, responsibilities: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit Experience
        </button>
      </form>

      <h3>Experience List</h3>
      <div className="mt-3">
        <ul className="list-group">
          {experiences.map((experience) => (
            <li key={experience._id} className="list-group-item">
              <h5>{experience.title}</h5>
              <p>{experience.institution}</p>
              <p>{experience.location}</p>
              <p>{experience.startYear} - {experience.endYear}</p>
              <p>{experience.responsibilities}</p>
              <button
                className="btn btn-warning btn-sm mr-2"
                onClick={() => handleEditExperience(experience)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteExperience(experience._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Awards Section */}
      <h3>Awards Section</h3>
      <div>
        {/* New Award Input Form */}
        <div className="mb-3">
          <h4>Add New Award</h4>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Award Title"
            name="title"
            value={newAward.title}
            onChange={(e) => setNewAward({ ...newAward, title: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Year"
            name="year"
            value={newAward.year}
            onChange={(e) => setNewAward({ ...newAward, year: e.target.value })}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Award Description"
            name="description"
            value={newAward.description}
            onChange={(e) => setNewAward({ ...newAward, description: e.target.value })}
          ></textarea>
          <button className="btn btn-success" onClick={handleAddAward}>
            Add Award
          </button>
        </div>

        {/* Edit Award Section */}
        {editAward && (
          <div className="mb-3">
            <h4>Edit Award</h4>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Award Title"
              name="title"
              value={editAward.title}
              onChange={(e) => setEditAward({ ...editAward, title: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Year"
              name="year"
              value={editAward.year}
              onChange={(e) => setEditAward({ ...editAward, year: e.target.value })}
            />
            <textarea
              className="form-control mb-2"
              placeholder="Award Description"
              name="description"
              value={editAward.description}
              onChange={(e) => setEditAward({ ...editAward, description: e.target.value })}
            ></textarea>
            <button className="btn btn-primary" onClick={handleUpdateAward}>
              Update Award
            </button>
            <button className="btn btn-secondary ml-2" onClick={() => setEditAward(null)}>
              Cancel
            </button>
          </div>
        )}

        {/* Display Award List */}
        <div className="mt-3">
          <h4>Current Awards</h4>
          <ul className="list-group">
            {awards.map((award) => (
              <li key={award._id} className="list-group-item">
                <h5>{award.title}</h5>
                <p>{award.year}</p>
                <p>{award.description}</p>
                <button
                  className="btn btn-warning btn-sm mr-2"
                  onClick={() => handleEditAward(award)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteAward(award._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
