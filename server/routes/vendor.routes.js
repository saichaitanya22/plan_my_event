const express = require('express');
const router = express.Router();

const vendorsController = require('../controllers/vendor.controller');

// Create a new Vendor
router.post("/vendors/register", vendorsController.create);
// Retrieve vendors with given location
router.get("/vendors/location", vendorsController.findByLocation);
// Retrieve a single Vendor with id
router.get("/vendors/:id", vendorsController.findOne);
// Update a Vendor with id
router.put("/vendors/:id", vendorsController.update);
// Delete a Vendor with id
router.delete("/vendors/:id", vendorsController.delete);

module.exports = router;