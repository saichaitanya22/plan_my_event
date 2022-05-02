const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.controller');

// Create a new User
router.post("/", adminController.create);
// Validate credentials
router.post("/login", adminController.validateCred);
// Retrieve a single User with id
router.get("/:id", adminController.findOne);
// Update a User with id
router.put("/:id", adminController.update);
// Delete a User with id
router.delete("/:id", adminController.delete);

module.exports = router;