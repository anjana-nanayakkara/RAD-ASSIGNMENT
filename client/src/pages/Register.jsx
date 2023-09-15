import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const login =(e) =>{
    navigate("/login");
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "lightgray" }}
    >
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="enter name"
            autoComplete="off"
            name="name"
            className="form-control rounded-0"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="enter email"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            style={{ marginBottom: "15px" }}
            type="password"
            id="password"
            placeholder="enter password"
            autoComplete="off"
            name="password"
            className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          <p>Already have an Account</p>
          <button
            type="submit"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            onClick={login}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
