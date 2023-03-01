const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../utils/generate.token');

const login = async (email, password) => {
  const userExist = await User.findOne({ where: { email } });
  if (!userExist) return ({ status: 409, message: 'User already registered' });
  const { password: userPassword } = userExist;
  if (md5(password) !== userPassword) return ({ status: 401, message: 'Invalid password' });
  const token = generateToken(userExist);

  return {
    id: userExist.id,
    name: userExist.name,
    email: userExist.email,
    role: userExist.role,
    token,
  };
};

module.exports = {
  login,
};