const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// Create a new User
router.post("/register", userController.create);
// Retrieve users with given location
router.get("/location", userController.findByLocation);
// Validate credentials
router.post("/login", userController.validateCred);
// Retrieve a single User with id
router.get("/:id", userController.findOne);
// Update a User with id
router.put("/:id", userController.update);
// Delete a User with id
router.delete("/:id", userController.delete);
// Retrieve all users
router.get("", userController.getAll);

module.exports = router;