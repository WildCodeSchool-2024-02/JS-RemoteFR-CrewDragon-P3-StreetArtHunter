const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const artistsRouter = require("./artist/router");
const rolesRouter = require("./roles/router");
const personsRouter = require("./persons/router");

router.use("/items", itemsRouter);
router.use("/roles", rolesRouter);
router.use("/artists", artistsRouter);
router.use("/persons", personsRouter);
/* ************************************************************************* */

module.exports = router;
