const express = require("express");

const router = express.Router();

// Import des routeurs
const itemsRouter = require("./items/router");
const artistsRouter = require("./artist/router");
const rolesRouter = require("./roles/router");
const artistArtworkRouter = require("./artistartwork/router");

// Utilisation des routeurs importés
router.use("/items", itemsRouter);
router.use("/roles", rolesRouter);
router.use("/artists", artistsRouter);
router.use("/artist-artworks", artistArtworkRouter);

module.exports = router;
