const AbstractRepository = require("./AbstractRepository");

class ArtistRepository extends AbstractRepository {
  constructor() {
    // Appeler le constructeur de la classe parente (AbstractRepository)
    // et passer le nom de la table "artist" comme configuration
    super({ table: "artist" });
  }

  // Opération C de CRUD - Création

  async create(artist) {
    // Exécuter la requête SQL INSERT pour ajouter un nouvel artiste à la table "artist"
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, pseudo) VALUES (?, ?, ?)`,
      [artist.firstname, artist.lastname, artist.pseudo]
    );

    // Retourner l'ID de l'artiste nouvellement inséré
    return result.insertId;
  }

  // Opérations Rs de CRUD - Lecture

  async read(id) {
    // Exécuter la requête SQL SELECT pour récupérer un artiste spécifique par son ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Retourner la première ligne du résultat, qui représente l'artiste
    return rows[0];
  }

  async readAll() {
    // Exécuter la requête SQL SELECT pour récupérer tous les artistes de la table "artist"
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Retourner le tableau d'artistes
    return rows;
  }

  // Opération U de CRUD - Mise à jour
  // À implémenter : Mettre à jour un artiste existant

  async update(artist) {
    const { id, firstname, lastname, pseudo } = artist;
    // Exécuter la requête SQL UPDATE pour modifier un artiste existant dans la table "artist"
    await this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, pseudo = ? WHERE id = ?`,
      [firstname, lastname, pseudo, id]
    );
  }

  

  async delete(id) {
    
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = ArtistRepository;
