/* eslint-disable consistent-return */
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;
    if (!token) {
      console.info("le token", token);
      return res.status(401).json({ message: "Non autorisé" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Accès refusé !" });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  isAuth,
};
