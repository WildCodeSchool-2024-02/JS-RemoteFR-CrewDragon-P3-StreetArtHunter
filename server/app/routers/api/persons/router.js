const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import person-related actions
const {
  browse,
  read,
  add,
  destroy,
  login,
} = require("../../../controllers/personActions");

// Route to get a list of persons
router.get("/", browse);

// Route to get a specific person by ID
router.get("/:id", read);

// Route to add a new person
router.post("/", add);

// Route to delete a person
router.delete("/:id", destroy);

// Route to log an person
router.post("/login", login);

/* ************************************************************************* */

module.exports = router;
