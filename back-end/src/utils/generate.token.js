const jwt = require('jsonwebtoken');

const jwtKey = require('fs').readFileSync('jwt.evaluation.key', 'utf8');

const SECRET = jwtKey;

const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '1d' };

const generateToken = (user) => { 
  const token = jwt.sign({ email: user.email, role: user.role, id: user.id }, SECRET, JWT_CONFIG); 
  return token; 
}; 

module.exports = { generateToken, SECRET };
