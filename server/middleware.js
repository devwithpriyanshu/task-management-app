const JWT_SECRET = "secret";
var jwt = require('jsonwebtoken');


module.exports = {
    auth: (req, res, next) => {
        
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(403).json({msg: "Missing auth header"});
        }
        const decoded = jwt.verify(authHeader, JWT_SECRET);
        if (decoded && decoded.email) {
            req.userId = decoded.email;
            next()
        } else {
            return res.status(403).json({msg: "Incorrect token"});
        }
    }
}
