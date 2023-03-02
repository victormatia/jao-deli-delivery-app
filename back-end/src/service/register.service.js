const md5 = require('md5');
const { User } = require('../database/models');

const createUser = async ({ name, email, password, role }) => {
  const emailExists = await User.findOne({ where: { email } });
  const nameExists = await User.findOne({ where: { name } });

  if (emailExists || nameExists) return ({ status: 409, message: 'User already registered' });

  const cryptoPassword = md5(password);

  let type = '';

  if (!role) {
    type = 'customer';
  }

  const user = await User.create({ name, email, password: cryptoPassword, role: type });
  return { status: 201, result: user };
};

module.exports = { createUser };
