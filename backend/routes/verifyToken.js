const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWTKEY, (err, user) => {
      if (err) return res.status(403).json("Token Expired");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticted");
  }
};
const verifyTokenandAutherization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json("You are not Autherized");
    }
  });
};
const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res
        .status(403)
        .json("You are not allowed to perform the operation");
    }
  });
};

module.exports = { verifyToken, verifyTokenandAutherization, verifyTokenAdmin };
