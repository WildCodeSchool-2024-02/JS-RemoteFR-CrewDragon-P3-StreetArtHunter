const AbstractRepository = require("./AbstractRepository");

class ArtistArtworkRepository extends AbstractRepository {
  constructor() {
    // Appeler le constructeur de la classe parente (AbstractRepository)
    // et passer le nom de la table "artist" comme configuration
    super({ table: "artist" });
  }

  // Opération C de CRUD - Création

  

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

  
 
}

module.exports = ArtistArtworkRepository;
