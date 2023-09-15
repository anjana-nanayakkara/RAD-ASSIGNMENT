const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  grade: Number,
  telephone: Number,
  address: String,
});

const StudentModel = mongoose.model("student", StudentSchema);
module.exports = StudentModel;
