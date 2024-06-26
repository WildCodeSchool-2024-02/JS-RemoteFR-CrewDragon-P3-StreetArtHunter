const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import authActions module for handling auth-related operations
const { login } = require("../../../controllers/authActions");

router.post("/login", login);

/* ************************************************************************* */

module.exports = router;
