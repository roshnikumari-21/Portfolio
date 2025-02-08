import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const correctPassword = "123"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate("/admin");
    } else {
      setError(true);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Enter Password</h2>
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
          Submit
        </button>
      </form>

      {error && <p className="text-danger text-center mt-2">Incorrect password</p>}
    </div>
  );
};

export default Password;
