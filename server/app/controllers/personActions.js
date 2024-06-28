// Import access to database tables
const tables = require("../../database/tables");


// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all persons from the database
    const persons = await tables.person.readAll();

    // Respond with the persons in JSON format
    res.json(persons);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific person from the database based on the provided ID
    const person = await tables.person.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the person in JSON format
    if (person == null) {
      res.sendStatus(404);
    } else {
      res.json(person);
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
  // Extract the person data from the request body
  const person = req.body;

  try {
    // Insert the person into the database
    const insertId = await tables.person.create(person);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted person
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.person.delete(req.params.id);
    res.status(200);
  } catch (error) {
    next(error);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  destroy,
};
