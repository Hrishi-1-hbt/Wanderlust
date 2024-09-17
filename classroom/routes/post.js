const express = require("express");
const router = express.Router();

// Index - Get all posts
router.get("/", (req, res) => {
    res.send("Get for posts");
});

// Show - Get post by ID
router.get("/:id", (req, res) => {
    res.send("Get for post id");
});

// POST - Create a new post
router.post("/", (req, res) => {
    res.send("Post for posts");
});

// DELETE - Delete post by ID
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;
