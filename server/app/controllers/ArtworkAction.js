// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all artworks from the database
    const artworks = await tables.artwork.readAll();

    // Respond with the artworks in JSON format
    res.json(artworks);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific artwork from the database based on the provided ID
    const artwork = await tables.artwork.read(req.params.id);

    // If the artwork is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the artwork in JSON format
    if (artwork == null) {
      res.sendStatus(404);
    } else {
      res.json(artwork);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const artwork = req.body;

  try {
    await tables.artwork.update(artwork);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the artwork data from the request body
  const artwork = req.body;

  try {
    // Insert the artwork into the database
    const insertId = await tables.artwork.create(artwork);
    
    // Respond with HTTP 201 (Created) and the ID of the newly inserted artwork
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.artwork.delete(req.params.id);
    res.status(200);
  } catch (error) {
    next(error);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
