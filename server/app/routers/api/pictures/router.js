const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import picture-related actions
const { browse, read, add, readArtwork, destroy } = require("../../../controllers/pictureActions");

// Route to get a list of pictures
router.get("/", browse);
// Route to get a specific picture by ID
router.get("/:id", read);
// Route to get a picture with artwork_id
router.get("/artwork/:id", readArtwork);
// Route to add a new picture
router.post("/", add);
// Route to delete a picture by id
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
