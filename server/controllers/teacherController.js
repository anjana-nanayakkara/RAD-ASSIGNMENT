const TeacherModel = require("../models/Teacher");

// Create a new teacher
const createTeacher = async (req, res) => {
  try {
    const newTeacher = await TeacherModel.create(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await TeacherModel.find({});
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a teacher by ID
const getTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await TeacherModel.findById(id);
    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a teacher by ID
const updateTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTeacher = await TeacherModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTeacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a teacher by ID
const deleteTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTeacher = await TeacherModel.findByIdAndDelete(id);
    if (!deletedTeacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.json(deletedTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacherById,
  deleteTeacherById,
};
