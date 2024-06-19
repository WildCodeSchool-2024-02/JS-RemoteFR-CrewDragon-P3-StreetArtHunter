
const tables = require("../../database/tables");

// Opération R de BREAD - Browse (Lire tout) les artistes
const browse = async (req, res, next) => {
  try {
    // Récupérer tous les artistes depuis la base de données
    const artists = await tables.artist.readAll();

    // Répondre avec les artistes au format JSON
    res.json(artists);
  } catch (err) {
    // Passer les erreurs au middleware de gestion des erreurs
    next(err);
  }
};

// Opération R de BREAD - Read (Lire) un artiste spécifique
const read = async (req, res, next) => {
  try {
    // Récupérer un artiste spécifique basé sur l'ID fourni
    const artist = await tables.artist.read(req.params.id);

    // Si l'artiste n'est pas trouvé, répondre avec HTTP 404 (Non trouvé)
    // Sinon, répondre avec l'artiste au format JSON
    if (!artist) {
      res.sendStatus(404);
    } else {
      res.json(artist);
    }
  } catch (err) {
    // Passer les erreurs au middleware de gestion des erreurs
    next(err);
  }
};

// Opération E de BREAD - Edit (Mettre à jour) un artiste existant
const edit = async (req, res, next) => {
  // Extraire les données de l'artiste à mettre à jour du corps de la requête
  const artist = req.body;

  try {
    // Mettre à jour l'artiste dans la base de données
    await tables.artist.update(artist);

    // Répondre avec HTTP 200 (OK) pour indiquer que la mise à jour a réussi
    res.sendStatus(200);
  } catch (err) {
    // Passer les erreurs au middleware de gestion des erreurs
    next(err);
  }
};

// Opération A de BREAD - Add (Créer) un nouvel artiste
const add = async (req, res, next) => {
  // Extraire les données de l'artiste à créer du corps de la requête
  const artist = req.body;

  try {
    // Insérer le nouvel artiste dans la base de données
    const insertId = await tables.artist.create(artist);

    // Répondre avec HTTP 201 (Créé) et l'ID du nouvel artiste inséré
    res.status(201).json({ insertId });
  } catch (err) {
    // Passer les erreurs au middleware de gestion des erreurs
    next(err);
  }
};

// Opération D de BREAD - Destroy (Supprimer) un artiste existant
const destroy = async (req, res, next) => {
  try {
    // Supprimer l'artiste spécifié par son ID de la base de données
    await tables.artist.delete(req.params.id);

    // Répondre avec HTTP 200 (OK) pour indiquer que la suppression a réussi
    res.sendStatus(200);
  } catch (err) {
    // Passer les erreurs au middleware de gestion des erreurs
    next(err);
  }
};

// Prêt à exporter les fonctions du contrôleur
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
