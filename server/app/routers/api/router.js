const express = require("express");

const router = express.Router();

// Import des routeurs
const itemsRouter = require("./items/router");

const rolesRouter = require("./roles/router");

const personsRouter = require("./persons/router");

const artworkRouter = require("./artworks/router");

const artistsRouter = require("./artist/router");

const artistArtworkRouter = require("./artistartwork/router");

// Utilisation des routeurs importés
router.use("/items", itemsRouter);
router.use("/roles", rolesRouter);
router.use("/artworks", artworkRouter);
router.use("/artists", artistsRouter);
router.use("/persons", personsRouter);
router.use("/artist-artworks", artistArtworkRouter);

module.exports = router;
