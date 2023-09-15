import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Class = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/class/") // Assuming you have a server route for getting all classes
      .then((result) => setClasses(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/class/" + id) // Assuming you have a server route for deleting a class
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/classes/create-class" className="btn btn-success">
          Add Class +
        </Link>
        <Link to="/home" className="btn btn-warning mx-4">
          Back to Menu
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Time</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => {
              return (
                <tr key={cls._id}>
                  <td>{cls.subject}</td>
                  <td>{cls.teacher}</td>
                  <td>{cls.time}</td>
                  <td>{cls.date}</td>
                  <td>
                    <Link
                      to={`/classes/update-class/${cls._id}`}
                      className="btn btn-success"
                      style={{ marginRight: "15px" }}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(cls._id)}
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

export default Class;
