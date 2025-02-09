import React, { useState, useEffect } from "react";
import axios from "axios";

const Conferences = () => {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/conferences");
        setConferences(response.data);
      } catch (error) {
        console.error("Error fetching conferences:", error);
      }
    };
    fetchConferences();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Conferences</h2>
      {conferences.length === 0 ? <p>No conferences available.</p> : (
        <ul className="list-group">
          {conferences.map((conf) => (
            <li key={conf._id} className="list-group-item">
              <h5>{conf.name}</h5>
              <p><strong>Location:</strong> {conf.location}</p>
              <p><strong>Date:</strong> {new Date(conf.date).toLocaleDateString()}</p>
              <p><strong>Co-Authors:</strong> {conf.coAuthors.join(", ")}</p>
              <p>{conf.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Conferences;
