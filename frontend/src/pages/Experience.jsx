

import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/experiences");
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Experience</h1>
      {experiences.length > 0 ? (
        <div className="row">
          {experiences.map((exp, index) => (
            <div key={index} className="col-md-6">
              <div className="card shadow-sm border-0 mb-4" style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
                <div className="card-body">
                  <h5 className="text-dark">
                    <i className="fas fa-briefcase text-primary me-2"></i> {exp.title}
                  </h5>
                  <p className="text-muted mb-1">
                    <i className="fas fa-building text-secondary me-2"></i> <strong>{exp.institution}</strong>, {exp.location}
                  </p>
                  <p className="text-muted mb-2">
                    <i className="fas fa-calendar-alt text-primary me-2"></i> {exp.startYear} - {exp.endYear}
                  </p>
                  <p className="text-dark" style={{ fontSize: "0.95rem" }}>
                    <i className="fas fa-tasks text-secondary me-2"></i> {exp.responsibilities}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No experience available.</p>
      )}
    </div>
  );
};

export default Home;

