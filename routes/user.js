

const express = require("express");
const router = express.Router(); // Changed this line to use Router
const User = require("../models/user.js");
const wrapasync = require("../utils/wrapasync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/listings.js");

const port = 3030;

router.get("/signup", userController.renderSignupForm);

router.post("/signup", wrapasync(userController.signup));

router.get("/login", userController.renderLoginForm);

router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }),
    userController.login
);

router.get("/logout", userController.logout);

// Remove this line, since you typically won't listen on a router
router.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

module.exports = router;
