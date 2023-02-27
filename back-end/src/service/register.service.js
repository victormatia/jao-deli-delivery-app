const { User } = require('../database/models');

const createUser = async ({ name, email, password }, role) => {
  const user = await User.create({ name, email, password, role });
  return user;
};

module.exports = { createUser };
