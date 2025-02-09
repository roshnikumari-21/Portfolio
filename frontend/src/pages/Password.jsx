import React, { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const Password = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const {login} =useContext(AuthContext);
  const navigate = useNavigate();

  const correctPassword = "123"; 

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("adminAuthenticated");
    if (isAuthenticated === "true") {
      navigate("/admin"); 
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      login();
      //localStorage.setItem("adminAuthenticated", "true"); 
      sessionStorage.setItem("adminAuthenticated", "true");


      navigate("/admin");
    } else {
      setError("incorrect password!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center"><i className="fas fa-lock me-2"></i>Enter Password </h2>
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

      {error && <p className="text-danger text-center mt-2">Incorrect password</p>}
    </div>
  );
};

export default Password;
