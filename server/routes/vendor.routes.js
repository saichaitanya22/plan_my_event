const express = require('express');
const router = express.Router();

const vendorController = require('../controllers/vendor.controller');

// Create a new Vendor
router.post("/register", vendorController.create);
// Retrieve vendors with given location
router.get("/location", vendorController.findByLocation);
// Validate credentials
router.post("/login", vendorController.validateCred);
// Retrieve a single Vendor with id
router.get("/:id", vendorController.findOne);
// Update a Vendor with id
router.put("/:id", vendorController.update);
// Delete a Vendor with id
router.delete("/:id", vendorController.delete);
// Retrieve all vendors
router.get("", vendorController.getAll);
// Add review for vendor
router.post("/review", vendorController.review);

module.exports = router;