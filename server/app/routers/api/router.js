const express = require("express");

const router = express.Router();

// import des middleware
const { isAuth } = require("../../services/isAuth");

// Import des routeurs
const itemsRouter = require("./items/router");
const rolesRouter = require("./roles/router");
const personsRouter = require("./persons/router");
const artworksRouter = require("./artworks/router");
const artistsRouter = require("./artists/router");
const artistArtworkRouter = require("./artistArtwork/router");
const authRouter = require("./auths/router");
const reviewRouter = require("./review/router");
const pictureRouter = require("./pictures/router");

// Utilisation des routeurs importés
router.use("/items", itemsRouter);
router.use("/roles", rolesRouter);
router.use("/artworks", artworksRouter);
router.use("/artists", artistsRouter);
router.use("/persons", personsRouter);
router.use("/artistArtwork", artistArtworkRouter);
router.use("/auths", authRouter);
router.use("/review", isAuth, reviewRouter);
router.use("/pictures", pictureRouter);

module.exports = router;
