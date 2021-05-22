const jwt = require('jsonwebtoken');
const config = require('config');

/** 
 * The auth middleware is used for protected routes,
 * i.e only routes a logged in user can access
 */
module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecretKey'));
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Invalid token, authorization denied' });
    }
}