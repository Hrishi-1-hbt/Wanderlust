const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review"); 
const Listing = require("../models/listing.js");
const {isLoggedIn,validateReview,isReviewAuthor} = require("../middleware.js");

const reviwController = require("../controllers/reviews.js");

// Post Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviwController.createReview)
);
 
  //review
  //Delete Route
  router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviwController.destroyReview));
  

  module.exports = router;