const FeesModel = require("../models/Fees"); 

// Create a new fees record
const createFees = async (req, res) => {
  try {
    const newFees = await FeesModel.create(req.body);
    res.status(201).json(newFees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all fees records
const getAllFees = async (req, res) => {
  try {
    const fees = await FeesModel.find({});
    res.json(fees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a fees record by ID
const getFeesById = async (req, res) => {
  const { id } = req.params;
  try {
    const fees = await FeesModel.findById(id);
    if (!fees) {
      return res.status(404).json({ error: "Fees record not found" });
    }
    res.json(fees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a fees record by ID
const updateFeesById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedFees = await FeesModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedFees) {
      return res.status(404).json({ error: "Fees record not found" });
    }
    res.json(updatedFees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a fees record by ID
const deleteFeesById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFees = await FeesModel.findByIdAndDelete(id);
    if (!deletedFees) {
      return res.status(404).json({ error: "Fees record not found" });
    }
    res.json(deletedFees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createFees,
  getAllFees,
  getFeesById,
  updateFeesById,
  deleteFeesById,
};
