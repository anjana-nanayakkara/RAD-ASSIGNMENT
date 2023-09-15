import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/student/") 
      .then((result) => setStudents(result.data))
      .catch((err) => console.log(err));
  }, []); 

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/student/" + id) 
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/students/create-student" className="btn btn-success">
          Add Student +
        </Link>
        <Link to="/home" className="btn btn-warning mx-4">
          Back to Menu
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Telephone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.grade}</td>
                  <td>{student.telephone}</td>
                  <td>{student.address}</td>
                  <td>
                    <Link
                      to={`/students/update-student/${student._id}`}
                      className="btn btn-success"
                      style={{ marginRight: "15px" }}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(student._id)}
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

export default Student;
