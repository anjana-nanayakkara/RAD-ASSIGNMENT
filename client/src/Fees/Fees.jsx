import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Fees = () => {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/fees/") // Adjust the API endpoint accordingly
      .then((result) => setFees(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/fees/" + id) // Adjust the API endpoint accordingly
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/fees/create-fee" className="btn btn-success">
          Add Fee +
        </Link>
        <Link to="/home" className="btn btn-warning mx-4">
          Back to Menu
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Grade</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => {
              return (
                <tr key={fee._id}>
                  <td>{fee.student}</td>
                  <td>{fee.subject}</td>
                  <td>{fee.teacher}</td>
                  <td>{fee.grade}</td>
                  <td>{fee.date}</td>
                  <td>
                    <Link
                      to={`/fees/update-fee/${fee._id}`}
                      className="btn btn-success"
                      style={{ marginRight: "15px" }}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(fee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fees;
