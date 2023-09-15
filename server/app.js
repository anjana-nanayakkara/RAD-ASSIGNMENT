const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const userRoutes = require("./routes/userRoutes");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const classRoutes = require("./routes/classRoutes");
const feesRoutes = require("./routes/feesRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/RadCRUD");

// Use user routes
// app.use("/user", userRoutes);
// Use student routes
app.use("/student", studentRoutes);
// Use teacher routes
app.use("/teacher", teacherRoutes);
// Use class routes
app.use("/class", classRoutes);
// Use fees routes
app.use("/fees", feesRoutes);
// Use fees routes
app.use("/user", userRoutes);


app.listen(3001, () => {
  console.log("Server is running");
});
