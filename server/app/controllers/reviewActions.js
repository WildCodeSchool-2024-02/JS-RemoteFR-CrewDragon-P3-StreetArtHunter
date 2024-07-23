// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all review from the database
    const review = await tables.review.readAll();

    // Respond with the review in JSON format
    res.json(review);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific review from the database based on the provided ID
    const review = await tables.review.read(req.params.id);

    // If the review is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the review in JSON format
    if (review == null) {
      res.sendStatus(404);
    } else {
      res.json(review);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the review data from the request body
  const review = req.body;

  review.picture = req.imgUrl;

  try {
    // Insert the review into the database
    const insertId = await tables.review.create(review);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted review
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async(req, res, next) => {
    try {
        await tables.review.delete(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        next(error)
    }
}

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  destroy,
};
