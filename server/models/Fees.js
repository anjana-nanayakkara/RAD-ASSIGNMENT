const mongoose = require("mongoose");

const FeesSchema = new mongoose.Schema({
  student: String,
  subject: String,
  teacher: String,
  grade: String,
  date: Date,
});

const FeesModel = mongoose.model("fees", FeesSchema); 
module.exports = FeesModel;
