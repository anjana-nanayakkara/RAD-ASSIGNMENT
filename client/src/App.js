import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import CreateStudent from "./Student/CreateStudent";
import UpdateStudent from "./Student/UpdateStudent";
import Student from "./Student/Student";

import Teacher from "./Teacher/Teacher";
import CreateTeacher from "./Teacher/CreateTeacher";
import UpdateTeacher from "./Teacher/UpdateTeacher";

import Class from "./Class/Class";
import CreateClass from "./Class/CreateClass";
import UpdateClass from "./Class/UpdateClass";

import Fees from "./Fees/Fees";
import CreateFees from "./Fees/CreateFees";
import UpdateFees from "./Fees/UpdateFees";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          {/* student */}

          <Route path="/students" element={<Student />}></Route>
          <Route
            path="/students/create-student"
            element={<CreateStudent></CreateStudent>}
          ></Route>
          <Route
            path="/students/update-student/:id"
            element={<UpdateStudent />}
          ></Route>

          {/* teacher */}

          <Route path="/teachers" element={<Teacher />}></Route>
          <Route
            path="/teachers/create-teacher"
            element={<CreateTeacher></CreateTeacher>}
          ></Route>
          <Route
            path="/teachers/update-teacher/:id"
            element={<UpdateTeacher />}
          ></Route>

          {/* Class */}

          <Route path="/classes" element={<Class />}></Route>
          <Route path="/classes/create-class" element={<CreateClass />}></Route>
          <Route
            path="/classes/update-class/:id"
            element={<UpdateClass />}
          ></Route>

          {/* fees */}

          <Route path="/fees" element={<Fees />}></Route>
          <Route path="/fees/create-fee" element={<CreateFees />}></Route>
          <Route path="/fees/update-fee/:id" element={<UpdateFees />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
