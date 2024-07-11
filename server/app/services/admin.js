/* eslint-disable consistent-return */

const roleControle = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Non autorisé' });
        }
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Accès refusé' });
        }

        next();
    } catch (error) {
        next(error);
    }
}

module.exports = {
   roleControle,
}