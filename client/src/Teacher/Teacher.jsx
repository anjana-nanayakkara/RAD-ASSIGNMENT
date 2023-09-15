import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/teacher/")
      .then((result) => setTeachers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/teacher/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/teachers/create-teacher" className="btn btn-success">
          Add Teacher +
        </Link>
        <Link to="/home" className="btn btn-warning mx-4">
          Back to Menu
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Telephone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => {
              return (
                <tr key={teacher._id}>
                  <td>{teacher.name}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.telephone}</td>
                  <td>{teacher.address}</td>
                  <td>
                    <Link
                      to={`/teachers/update-teacher/${teacher._id}`}
                      className="btn btn-success"
                      style={{ marginRight: "15px" }}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(teacher._id)}
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

export default Teacher;
