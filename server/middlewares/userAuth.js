require('dotenv').config();
const jwt = require('jsonwebtoken')

// if validation fails it clears the cookie
const requireAuth = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    const user = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    next();
  } catch (error) {
    res.clearCookie("token");
    return res.status(403).send("error verifying token");
  }
}

module.exports = requireAuth;