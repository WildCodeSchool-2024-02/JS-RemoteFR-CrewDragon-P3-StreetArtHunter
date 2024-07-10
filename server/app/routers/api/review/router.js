const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import review-related actions
const { browse, read, add, destroy } = require("../../../controllers/reviewActions");

// Route to get a list of reviews
router.get("/", browse);
// Route to get a specific review by ID
router.get("/:id", read);
// Route to add a new review
router.post("/", add);
// Route to delete a review by id
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
