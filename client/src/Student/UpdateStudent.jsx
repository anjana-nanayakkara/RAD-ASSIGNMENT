import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateStudent = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [grade, setGrade] = useState();
  const [telephone, setTelephone] = useState();
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/student/'+id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setGrade(result.data.grade);
        setTelephone(result.data.telephone);
        setAddress(result.data.address);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/student/"+id, {
        name,
        grade,
        telephone,
        address,
      })
      .then((result) => {
        console.log(result);
        navigate("/students");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Grade</label>
            <input
              type="text"
              placeholder="Enter grade"
              className="form-control"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Telephone</label>
            <input
              type="text"
              placeholder="Enter telephone"
              className="form-control"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
