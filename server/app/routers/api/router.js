const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const ArtistsRouter = require("./artist/router");
const rolesRouter = require('./roles/router');

router.use("/items", itemsRouter);
router.use("/roles", rolesRouter);
router.use("/artists",ArtistsRouter);
/* ************************************************************************* */

module.exports = router;
