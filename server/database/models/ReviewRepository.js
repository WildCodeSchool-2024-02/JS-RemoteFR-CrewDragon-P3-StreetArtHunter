const AbstractRepository = require("./AbstractRepository");

class reviewRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "review" as configuration
    super({ table: "review" });
  }

  // The C of CRUD - Create operation

  async create(review) {
    // Execute the SQL INSERT query to add a new review to the "review" table
    const [result] = await this.database.query(
      `insert into ${this.table} (picture, person_id, lattitude, longitude) values (?, ?, ?, ?)`,
      [review.picture, review.person_id, review.lattitude, review.longitude]
    );

    // Return the ID of the newly inserted review
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific review by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the review
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all reviews from the "review" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of reviews
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing review

  // async update(review) {
  //   ...
  // }

  // Opération D de CRUD - Supprimer
  async delete(id) {
    // Exécuter la requête SQL DELETE pour supprimer une personne dans la table "person"
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }

}

module.exports = reviewRepository;
