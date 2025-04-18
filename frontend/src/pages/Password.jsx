import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import axios from "axios";

const Password = () => {
  const [password, setPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("adminAuthenticated");
    if (isAuthenticated === "true") {
      navigate("/admin");
    }

    // Fetch the admin password when the component loads
    const fetchAdminPassword = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user");
        console.log("Fetched password:", res.data.adminPassword); // Check what's being returned
        setAdminPassword(res.data.adminPassword);
      } catch (err) {
        console.error("Error fetching admin password:", err);
      }
    };

    fetchAdminPassword(); // Fetch admin password once the component is mounted
  }, [navigate]); // Dependency array to ensure this effect runs once when the component mounts

  const handleSubmit = (e) => {
    e.preventDefault();
   if (password === adminPassword) {    
      login();
      sessionStorage.setItem("adminAuthenticated", "true");
      navigate("/admin");
    } else {
      setError("Incorrect password!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">
        <i className="fas fa-lock me-2"></i>Enter Password
      </h2>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary mt-3">
          <i className="fas fa-sign-in-alt me-2"></i> Submit
        </button>
      </form>

      {error && <p className="text-danger text-center mt-2">{error}</p>}
    </div>
  );
};

export default Password;
