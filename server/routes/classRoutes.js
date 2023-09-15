const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");

// Create a new class
router.post("/", classController.createClass);

// Get all classes
router.get("/", classController.getAllClasses);

// Get a class by ID
router.get("/:id", classController.getClassById);

// Update a class by ID
router.put("/:id", classController.updateClassById);

// Delete a class by ID
router.delete("/:id", classController.deleteClassById);

module.exports = router;
