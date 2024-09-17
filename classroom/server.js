const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");


app.get("/", (req, res) => {
    res.send("Hi, I am Root!");
});

// Use the users router
app.use("/users", users);
app.use("/posts", posts);



// Start server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
