const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user.controller');

// Create a new User
router.post("/register", usersController.create);
// Retrieve all Vendors
router.get("/show/vendors", usersController.findAllVendors);
// Retrieve a single User with id
router.get("/users/:id", usersController.findOne);
// Update a User with id
router.put("/users/:id", usersController.update);
// Delete a User with id
router.delete("/users/:id", usersController.delete);

module.exports = router;