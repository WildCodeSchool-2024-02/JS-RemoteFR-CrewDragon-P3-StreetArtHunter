const argon2 = require("argon2");

// Import access to database tables
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific person from the database based on the provided email and password
    const person = await tables.person.login(req.body.email);

    if (person == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      person.hashed_password,
      req.body.password
    );

    if (verified) {
      // Respond with the user in JSON format (but without the hashed password)
      delete person.hashed_password;

      res.json(person);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  login,
};
