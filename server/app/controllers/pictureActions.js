// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all pictures from the database
    const pictures = await tables.picture.readAll();

    // Respond with the pictures in JSON format
    res.json(pictures);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific picture from the database based on the provided ID
    const picture = await tables.picture.read(req.params.id);

    // If the picture is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the picture in JSON format
    if (picture == null) {
      res.sendStatus(404);
    } else {
      res.json(picture);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readArtwork = async (req, res, next) => {
  try {
    const bla = await tables.picture.readArtwork(req.params.id);
    res.json(bla)
  } catch (error) {
    next(error);
  }
}

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the picture data from the request body
  const picture = req.body;

  try {
    // Insert the picture into the database
    const insertId = await tables.picture.create(picture);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted picture
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async(req, res, next) => {
    try {
        await tables.artist.delete(req.params.id);
        res.status(200);
    } catch (error) {
        next(error)
    }
}

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  readArtwork,
  add,
  destroy,
};
