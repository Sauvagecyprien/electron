/**
 * Middleware qui permet de savoir si la personne est connecter
 */
module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}