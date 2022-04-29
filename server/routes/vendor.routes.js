const express = require('express');
const router = express.Router();

const vendorsController = require('../controllers/vendor.controller');

// Create a new Vendor
router.post("/register", vendorsController.create);
// Retrieve vendors with given location
router.get("/location", vendorsController.findByLocation);
// Retrieve a single Vendor with id
router.get("/:id", vendorsController.findOne);
// Update a Vendor with id
router.put("/:id", vendorsController.update);
// Delete a Vendor with id
router.delete("/:id", vendorsController.delete);
// Retrieve all vendors
router.get("", vendorsController.getAll);

module.exports = router;