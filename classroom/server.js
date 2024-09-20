const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

const sessioOption = {secret: "mysupersecratestring",
    resave: false,
    saveUninitialized: true,
  }

app.use();

 
 

// Start server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
