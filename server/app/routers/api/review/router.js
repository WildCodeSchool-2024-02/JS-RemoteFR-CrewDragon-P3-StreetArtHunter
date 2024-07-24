const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: "uploads/" });
const { roleControle } = require("../../../services/admin");

const fileUpload = require("../../../services/fileUpload");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import review-related actions
const {
  browse,
  read,
  add,
  destroy,
} = require("../../../controllers/reviewActions");

// Route to get a list of reviews
router.get("/", roleControle, browse);
// Route to get a specific review by ID
router.get("/:id", roleControle, read);

// Route to add a new review
router.post("/", upload.single("picture"), fileUpload, add);

// Route to delete a review by id
router.delete("/:id", roleControle, destroy);

/* ************************************************************************* */

module.exports = router;
