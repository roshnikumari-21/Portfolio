import React, { useState, useEffect } from "react";
import axios from "axios";

const ConferenceAdmin = () => {
  const [conferences, setConferences] = useState([]);
  const [newConference, setNewConference] = useState({
    name: "",
    location: "",
    date: "",
    coAuthors: "",
    summary: "",
  });
  const [editConference, setEditConference] = useState(null);

  useEffect(() => {
    fetchConferences();
  }, []);

  const fetchConferences = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/conferences`);

      setConferences(response.data);
    } catch (error) {
      console.error("Error fetching conferences:", error);
    }
  };

  const handleAddOrUpdateConference = async (e) => {
    e.preventDefault();
    try {
      if (editConference) {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/conferences/${editConference._id}`, newConference);
      } else {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/conferences`, { 
          ...newConference, 
          coAuthors: newConference.coAuthors.split(",") 
        });
      }
      setNewConference({ name: "", location: "", date: "", coAuthors: "", summary: "" });
      setEditConference(null);
      fetchConferences();
    } catch (error) {
      console.error("Error saving conference:", error);
    }
  };

  const handleDeleteConference = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/conferences/${id}`);
      fetchConferences();
    } catch (error) {
      console.error("Error deleting conference:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Conferences</h2>
      <form onSubmit={handleAddOrUpdateConference} className="mb-4">
        <input type="text" className="form-control mb-2" placeholder="Conference Name" 
          value={newConference.name} onChange={(e) => setNewConference({ ...newConference, name: e.target.value })} required />
        <input type="text" className="form-control mb-2" placeholder="Location" 
          value={newConference.location} onChange={(e) => setNewConference({ ...newConference, location: e.target.value })} required />
        <input type="date" className="form-control mb-2" 
          value={newConference.date} onChange={(e) => setNewConference({ ...newConference, date: e.target.value })} required />
        <input type="text" className="form-control mb-2" placeholder="Co-Authors (comma separated)" 
          value={newConference.coAuthors} onChange={(e) => setNewConference({ ...newConference, coAuthors: e.target.value })} required />
        <textarea className="form-control mb-2" placeholder="Summary" 
          value={newConference.summary} onChange={(e) => setNewConference({ ...newConference, summary: e.target.value })} required />
        <button type="submit" className="btn btn-primary">{editConference ? "Update" : "Add"} Conference</button>
      </form>

      <h3>Conference List</h3>
      <ul className="list-group">
        {conferences.map((conference) => (
          <li key={conference._id} className="list-group-item">
            <h5>{conference.name}</h5>
            <p><strong>Location:</strong> {conference.location}</p>
            <p><strong>Date:</strong> {new Date(conference.date).toLocaleDateString()}</p>
            <p><strong>Co-Authors:</strong> {conference.coAuthors.join(", ")}</p>
            <p>{conference.summary}</p>
            <button className="btn btn-warning btn-sm me-2" onClick={() => {
              setEditConference(conference);
              setNewConference({ ...conference, coAuthors: conference.coAuthors.join(", ") });
            }}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteConference(conference._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConferenceAdmin;
