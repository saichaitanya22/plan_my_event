const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user.controller');

// Create a new User
router.post("/register", usersController.create);
// Retrieve users with given location
router.get("/location", usersController.findByLocation);
// Retrieve a single User with id
router.get("/:id", usersController.findOne);
// Update a User with id
router.put("/:id", usersController.update);
// Delete a User with id
router.delete("/:id", usersController.delete);
// Retrieve all users
router.get("", usersController.getAll);

module.exports = router;