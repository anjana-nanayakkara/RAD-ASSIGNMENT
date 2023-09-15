import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="text-center">
        <h1>Welcome</h1>
        <div className="mb-4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "400px",
            }}
          >
            <Link
              to="/register"
              className="btn btn-light"
              style={{
                width: "200px",
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                backgroundColor: "lightgray",
              }}
            >
              Register
            </Link>
            <Link
              to="/login"
              className="btn btn-light"
              style={{
                width: "200px",
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                backgroundColor: "lightgray",
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
