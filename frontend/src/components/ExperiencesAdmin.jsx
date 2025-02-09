


import React, { useState, useEffect } from "react";
import axios from "axios";

const ExperiencesAdmin = () => {
  const [experiences, setExperiences] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null); 
  const [newExperience, setNewExperience] = useState({
    title: "",
    institution: "",
    location: "",
    startYear: "",
    endYear: "",
    responsibilities: "",
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/experiences");
      setExperiences(response.data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingExperience) {
        
        await axios.put(
          `http://localhost:5000/api/experiences/${editingExperience._id}`,
          newExperience
        );
        setExperiences(
          experiences.map((exp) =>
            exp._id === editingExperience._id ? { ...newExperience, _id: exp._id } : exp
          )
        );
      } else {
        
        const response = await axios.post(
          "http://localhost:5000/api/experiences",
          newExperience
        );
        setExperiences([...experiences, response.data]);
      }
      resetForm();
    } catch (error) {
      console.error("Error adding/updating experience:", error);
    }
  };

  
  const handleDeleteExperience = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/experiences/${id}`);
      setExperiences(experiences.filter((exp) => exp._id !== id));
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  
  const handleEditClick = (experience) => {
    setNewExperience(experience); 
    setEditingExperience(experience);
  };

  
  const resetForm = () => {
    setNewExperience({
      title: "",
      institution: "",
      location: "",
      startYear: "",
      endYear: "",
      responsibilities: "",
    });
    setEditingExperience(null);
  };

  return (
    <div className="container mt-4">
      <h3>{editingExperience ? "Edit Experience" : "Add Experience"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title/Position</label>
          <input
            type="text"
            className="form-control"
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
            value={newExperience.endYear}
            onChange={(e) => setNewExperience({ ...newExperience, endYear: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Responsibilities</label>
          <textarea
            className="form-control"
            value={newExperience.responsibilities}
            onChange={(e) => setNewExperience({ ...newExperience, responsibilities: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {editingExperience ? "Update Experience" : "Add Experience"}
        </button>
        {editingExperience && (
          <button type="button" className="btn btn-secondary mt-3 ms-2" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <h3 className="mt-4">Experience List</h3>
      <ul className="list-group mt-3">
        {experiences.map((experience) => (
          <li key={experience._id} className="list-group-item">
            <h5>{experience.title}</h5>
            <p><strong>{experience.institution}</strong></p>
            <p>{experience.location}</p>
            <p>{experience.startYear} - {experience.endYear}</p>
            <p>{experience.responsibilities}</p>
            <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(experience)}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteExperience(experience._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperiencesAdmin;



