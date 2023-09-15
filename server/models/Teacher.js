const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  telephone: Number,
  address: String,
});

const TeacherModel = mongoose.model("teacher", TeacherSchema);
module.exports = TeacherModel;
