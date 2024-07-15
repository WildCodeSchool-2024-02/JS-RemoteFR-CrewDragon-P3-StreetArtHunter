const fs = require("fs");

const fileUpload = (req, res, next) => {
  fs.rename(
    `uploads/${req.file.filename}`,
    `uploads/${req.file.filename}-${req.file.originalname}`,
    (err) => {
      if (err) throw err;
      req.imgUrl = `${req.file.filename}-${req.file.originalname}`;
      next();
    }
  );
};

module.exports = fileUpload;
