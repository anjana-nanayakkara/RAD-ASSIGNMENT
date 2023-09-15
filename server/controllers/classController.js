const ClassModel = require("../models/Class");

// Create a new class
const createClass = async (req, res) => {
  try {
    const newClass = await ClassModel.create(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all classes
const getAllClasses = async (req, res) => {
  try {
    const classes = await ClassModel.find({});
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a class by ID
const getClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const _class = await ClassModel.findById(id);
    if (!_class) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.json(_class);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a class by ID
const updateClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedClass = await ClassModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedClass) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a class by ID
const deleteClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedClass = await ClassModel.findByIdAndDelete(id);
    if (!deletedClass) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.json(deletedClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createClass,
  getAllClasses,
  getClassById,
  updateClassById,
  deleteClassById,
};
