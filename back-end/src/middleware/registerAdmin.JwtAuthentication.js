const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/generate.token');

const AdminTokenAuthorization = (req, res, next) => {
  const { authorization } = req.headers;
  const { role } = req.body;

  if (role) {
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
  }
  else next();
};

module.exports = {
  AdminTokenAuthorization,
};
