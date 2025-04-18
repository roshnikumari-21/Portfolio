import React, { useState, useEffect } from "react";
import axios from "axios";

const AwardsAdmin = () => {
  const [awards, setAwards] = useState([]);
  const [newAward, setNewAward] = useState({ title: "", year: "", description: "" });
  const [editAward, setEditAward] = useState(null);

  const fetchAwards = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/awards`);
      setAwards(response.data);
    } catch (error) {
      console.error("Error fetching awards:", error);
    }
  };

  useEffect(() => {
    fetchAwards();
  }, []);

  const handleAddAward = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/awards`, newAward);
      setAwards([...awards, response.data]);
      setNewAward({ title: "", year: "", description: "" });
    } catch (error) {
      console.error("Error adding award:", error);
    }
  };

  const handleUpdateAward = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/awards/${editAward._id}`,
        editAward
      );
      setAwards(awards.map((award) => (award._id === editAward._id ? response.data : award)));
      setEditAward(null);
    } catch (error) {
      console.error("Error updating award:", error);
    }
  };

  const handleDeleteAward = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/awards/${id}`);
      setAwards(awards.filter((award) => award._id !== id));
    } catch (error) {
      console.error("Error deleting award:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h3>{editAward ? "Edit Award" : "Add New Award"}</h3>
      <form onSubmit={editAward ? handleUpdateAward : handleAddAward}>
        <div className="form-group">
          <label>Award Title</label>
          <input
            type="text"
            className="form-control"
            value={editAward ? editAward.title : newAward.title}
            onChange={(e) =>
              editAward
                ? setEditAward({ ...editAward, title: e.target.value })
                : setNewAward({ ...newAward, title: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input
            type="text"
            className="form-control"
            value={editAward ? editAward.year : newAward.year}
            onChange={(e) =>
              editAward
                ? setEditAward({ ...editAward, year: e.target.value })
                : setNewAward({ ...newAward, year: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={editAward ? editAward.description : newAward.description}
            onChange={(e) =>
              editAward
                ? setEditAward({ ...editAward, description: e.target.value })
                : setNewAward({ ...newAward, description: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {editAward ? "Update Award" : "Add Award"}
        </button>
      </form>

      <h3 className="mt-4">All Awards</h3>
      <ul className="list-group">
        {awards.map((award) => (
          <li key={award._id} className="list-group-item">
            <h5>{award.title}</h5>
            <p>{award.year}</p>
            <p>{award.description}</p>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => setEditAward(award)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm ml-2 mx-2"
              onClick={() => handleDeleteAward(award._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AwardsAdmin;
