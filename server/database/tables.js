// Import the repository modules responsible for handling data operations on the tables
const ItemRepository = require("./models/ItemRepository");
const RoleRepository = require("./models/RoleRepository");
const ArtworkRepository = require("./models/ArtworkRepository");
const PersonRepository = require("./models/PersonRepository");
const ArtistRepository = require("./models/ArtistRepository");
const ReviewRepository = require('./models/ReviewRepository');
const PictureRepository = require("./models/PictureRepository");
// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */
// Register each repository as data access point for its table
tables.item = new ItemRepository();
tables.role = new RoleRepository();
tables.artwork = new ArtworkRepository();
tables.person = new PersonRepository();
tables.artist = new ArtistRepository();
tables.review = new ReviewRepository();
tables.picture = new PictureRepository();
/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
