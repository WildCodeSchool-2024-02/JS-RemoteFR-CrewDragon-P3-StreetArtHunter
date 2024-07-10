const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import person-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/personActions");

const { hashPassword } = require("../../../services/auth");

// Route to get a list of persons
router.get("/", browse);
// Route to get a specific person by ID
router.get("/:id", read);
// Route to update data
router.post("/:id", hashPassword, edit);
// Route to add a new person
router.post("/", hashPassword, add);
// Route to delete a person
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
