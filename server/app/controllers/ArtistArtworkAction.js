const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const artistArtworks = await tables.findAll();
    res.json(artistArtworks);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const artistArtwork = await tables.findByPk(id);
    if (!artistArtwork) {
      res.sendStatus(404);
    } else {
      res.json(artistArtwork);
    }
  } catch (err) {
    next(err);
  }
};




module.exports = {
  browse,
  read,
}
