const AbstractRepository = require("./AbstractRepository");

class AtrworkRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "artwork" as configuration
    super({ table: "artwork" });
  }

  // The C of CRUD - Create operation

  async create(artwork) {
    // Execute the SQL INSERT query to add a new artwork to the "artwork" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, lattitude, longitude, description) values (?, ?)`,
      [artwork.title, artwork.lattitude, artwork.longitude, artwork.description]
    );

    // Return the ID of the newly inserted artwork
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific artwork by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the artwork
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all artworks from the "artwork" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of artworks
    return rows;
  }

  // The U of CRUD - Update operation

  async update(artwork) {
    const { id, title, lattitude, longitude, description } = artwork;
    await this.database.query(
      `UPDATE ${this.table} SET title = ?, lattitude = ?, longitute = ?, description = ? WHERE id = ?`,
      [title, lattitude, longitude, description, id]
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an artwork by its ID

  async delete(id) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = AtrworkRepository;
