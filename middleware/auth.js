const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.header("X-Auth-Token");
    if (!token) return res.status(401).send("No Token For You");

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
      } catch (expection) {
        res.status(403).send("invalid access token");
      }
    };

module.exports = auth;
    