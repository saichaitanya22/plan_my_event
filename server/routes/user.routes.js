const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user.controller');

// Create a new User
router.post("/users/register", usersController.create);
// Retrieve users with given location
router.get("/users/location", usersController.findByLocation);
// Retrieve a single User with id
router.get("/users/:id", usersController.findOne);
// Update a User with id
router.put("/users/:id", usersController.update);
// Delete a User with id
router.delete("/users/:id", usersController.delete);

module.exports = router;