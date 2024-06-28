const argon2 = require("argon2");

// Import access to database tables
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific person from the database based on the provided pseudo and password
    const person = await tables.person.readLogin(req.body.pseudo);

    if (person == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      person.password,
      req.body.password
    );

    if (verified) {
      // Respond with the user in JSON format (but without the hashed password)
      delete person.password;

      res.json(person);
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  login,
};
