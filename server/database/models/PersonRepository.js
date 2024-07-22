const AbstractRepository = require("./AbstractRepository");

class PersonRepository extends AbstractRepository {
  constructor() {
    super({ table: "person" });
  }

  // Opération C de CRUD - Création
  async create(person) {
    // Exécuter la requête SQL INSERT pour ajouter une nouvelle personne à la table "person"
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, password, pseudo, postal_code, city, role_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        person.firstname,
        person.lastname,
        person.email,
        person.hashedPassword,
        person.pseudo,
        person.postal_code,
        person.city,
        3,
      ]
    );
    // Retourner l'ID de la personne nouvellement inséré
    return result.insertId;
  }

  // Opération R de CRUD - Lecture
  async read(id) {
    // Exécuter la requête SQL SELECT pour récupérer une personne spécifique par son ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ? LIMIT 1`,
      [id]
    );
    // Retourner la première ligne du résultat, qui représente la personne
    return rows[0];
  }

  // Opération R de CRUD - Lecture
  async readAll() {
    // Exécuter la requête SQL SELECT pour récupérer toutes les personnes "persons"
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    // Retourner toute la liste des personnes
    return rows;
  }

  async readLogin(pseudo) {
    // readOne
    // Execute the SQL SELECT query to retrieve a specific person by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where pseudo = ?`,
      [pseudo]
    );
    // Return the first row of the result, which represents the item
    return rows[0];
  }

  // Opération U de CRUD - Mettre à jour
  async update(person) {
    console.info("Ici c'est person: ", person);
    const {
      id,
      firstname,
      lastname,
      email,
      hashedPassword,
      pseudo,
      postalCode,
      city,
    } = person;
    // Exécuter la requête SQL UPDATE pour modifier une personne existante dans la table "person"
    await this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, password = ?, pseudo = ?, postal_code = ?, city = ?, role_id = ? WHERE id = ?`,
      [
        firstname,
        lastname,
        email,
        hashedPassword,
        pseudo,
        postalCode,
        city,
        3,
        id,
      ]
    );
    return person;
  }

  // Opération D de CRUD - Supprimer
  async delete(id) {
    // Exécuter la requête SQL DELETE pour supprimer une personne dans la table "person"
    const [row] = await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    return row;
  }
  
}

module.exports = PersonRepository;
