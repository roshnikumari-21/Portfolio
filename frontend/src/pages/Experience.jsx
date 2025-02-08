import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/experience/get-experiences");
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className="container mt-5">
      <h3>Experience</h3>
      {experiences.length > 0 ? (
        <ul>
          {experiences.map((exp, index) => (
            <li key={index}>
              <h5>{exp.title}</h5>
              <p><strong>{exp.institution}</strong>, {exp.location}</p>
              <p>{exp.startYear} - {exp.endYear}</p>
              <p>{exp.responsibilities}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No experience available.</p>
      )}
    </div>
  );
};

export default Home;
