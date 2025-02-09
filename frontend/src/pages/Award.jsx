


import React, { useState, useEffect } from "react";
import axios from "axios";

const Award = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAwards = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/awards");
      setAwards(response.data);
    } catch (error) {
      setError("Error fetching awards");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAwards();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Awards & Achievements</h1>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p>Loading awards...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : awards.length === 0 ? (
        <div className="alert alert-warning text-center">No awards found</div>
      ) : (
        <div className="row">
          {awards.map((award) => (
            <div key={award._id} className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <i className="fas fa-award me-2 award-icon "></i> {award.title}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <i className="fas fa-regular fa-calendar me-2"></i> {award.year}
                  </h6>
                  <p className="card-text">{award.description}</p>
                  {/* <button className="btn btn-primary">View Details</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Award;

