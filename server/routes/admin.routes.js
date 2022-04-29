const express = require('express');
const router = express.Router();

const adminsController = require('../controllers/admin.controller');

// Create a new User
router.post("/", adminsController.create);
// Retrieve a single User with id
router.get("/:id", adminsController.findOne);
// Update a User with id
router.put("/:id", adminsController.update);
// Delete a User with id
router.delete("/:id", adminsController.delete);

module.exports = router;