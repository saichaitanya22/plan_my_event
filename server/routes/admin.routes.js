const express = require('express');
const router = express.Router();

const adminsController = require('../controllers/admin.controller');

// Create a new User
router.post("/register", adminsController.create);
// Retrieve a single User with id
router.get("/admins/:id", adminsController.findOne);
// Update a User with id
router.put("/admins/:id", adminsController.update);
// Delete a User with id
router.delete("/admins/:id", adminsController.delete);

module.exports = router;