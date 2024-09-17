const express = require("express");
const router = express.Router();

// Users Routes

// Index - Get all users
router.get("/", (req, res) => {
    res.send("Get for users");
});

// Show - Get user by ID
router.get("/:id", (req, res) => {
    res.send("Get for user id");
});

// POST - Create a new user
router.post("/", (req, res) => {
    res.send("Post for users");
});

// DELETE - Delete user by ID
router.delete("/:id", (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;
