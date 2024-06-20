const express = require("express");

const router = express.Router();

const {
  browse,
  read,
} = require("../../../controllers/ArtistArtworkAction");

router.get("/", browse);

router.get("/:id", read);

module.exports = router;
