const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import artwork-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/ArtworkAction");

// Route to get a list of artworks
router.get("/", browse);

// Route to get a specific artwork by ID
router.get("/:id", read);

// Route to edit a specific artwok by ID
router.put("/:id", edit);

// Route to add a new artwork
router.post("/", add);

// Route to delete a specific artwork by ID
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
