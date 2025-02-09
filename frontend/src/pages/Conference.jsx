


import React, { useState, useEffect } from "react";
import axios from "axios";

const Conferences = () => {
  const [conferences, setConferences] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  
  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (search) queryParams.append("search", search);
        if (location) queryParams.append("location", location);
        if (date) queryParams.append("date", date);

        const response = await axios.get(`http://localhost:5000/api/conferences?${queryParams.toString()}`);
        setConferences(response.data);
      } catch (error) {
        console.error("Error fetching conferences:", error);
      }
    };
    fetchConferences();
  }, [search, location, date]); 

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 ">
         Conferences
      </h1>

      
      <div className="row mb-4">
        <div className="col-md-4 input-group ">
        <span class="input-group-text">
    <i class="fas fa-search"></i>
  </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or summary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4 input-group">
        <span class="input-group-text">
    <i class="fas fa-filter"></i>
  </span>
          <input
            type="text"
            className="form-control"
            placeholder="Filter by location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

     
      {conferences.length === 0 ? (
        <p className="text-center">No conferences found.</p>
      ) : (
        <ol className="list-group shadow-lg list-group-numbered">
          {conferences.map((conf) => (
            <li key={conf._id} className="list-group-item p-3 shadow-sm">
              <h5 className="text-primary">{conf.name}</h5>
              <p><i className="fa-solid fa-map-marker-alt text-danger"></i> <strong>Location:</strong> {conf.location}</p>
              <p><i className="fa-solid fa-calendar-days text-success"></i> <strong>Date:</strong> {new Date(conf.date).toLocaleDateString()}</p>
              <p><i className="fa-solid fa-users text-info"></i> <strong>Co-Authors:</strong> {conf.coAuthors.join(", ")}</p>
              <p>{conf.summary}</p>
              
            </li>
            
          ))}
        </ol>
      )}
    </div>
  );
};

export default Conferences;

