const express = require('express');
const router = express.Router();

const blogsController = require('../controllers/blog.controller');

// Create a new Tutorial
router.post("/", blogsController.create);
// Retrieve all Tutorials
router.get("/", blogsController.findAll);
// Retrieve all published Tutorials
router.get("/published", blogsController.findAllPublished);
// Retrieve a single Tutorial with id
router.get("/:id", blogsController.findOne);
// Update a Tutorial with id
router.put("/:id", blogsController.update);
// Delete a Tutorial with id
router.delete("/:id", blogsController.delete);
// Delete all tutorials
router.delete("/", blogsController.deleteAll);

module.exports = router;