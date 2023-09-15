const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  subject: String,
  teacher: String,
  time: String, 
  date: Date,
});

const ClassModel = mongoose.model("class", ClassSchema);
module.exports = ClassModel;
