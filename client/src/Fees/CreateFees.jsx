import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateFees = () => {
  const [student, setStudent] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/fees/", {
        student,
        subject,
        teacher,
        grade,
        date,
      })
      .then((result) => {
        console.log(result);
        navigate("/fees");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Fees</h2>
          <div className="mb-2">
            <label htmlFor="student">Student</label>
            <input
              type="text"
              id="student"
              className="form-control"
              value={student}
              onChange={(e) => setStudent(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="teacher">Teacher</label>
            <input
              type="text"
              id="teacher"
              className="form-control"
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="grade">Grade</label>
            <input
              type="text"
              id="grade"
              className="form-control"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateFees;
