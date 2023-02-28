const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/generate.token');

const tokenAuthorization = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(authorization, SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenAuthorization,
};
