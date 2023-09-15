const express = require("express");
const router = express.Router();
const feesController = require("../controllers/feesController"); // Update the controller import path

// Create a new fees record
router.post("/", feesController.createFees); // route to create files

// Get all fees records
router.get("/", feesController.getAllFees);

// Get a fees record by ID
router.get("/:id", feesController.getFeesById);

// Update a fees record by ID
router.put("/:id", feesController.updateFeesById);

// Delete a fees record by ID
router.delete("/:id", feesController.deleteFeesById);

module.exports = router;
