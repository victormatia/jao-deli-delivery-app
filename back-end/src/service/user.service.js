const { User } = require('../database/models');

const findUsers = async () => {
  const users = await User.findAll();

  return { status: 200, result: users };
};

module.exports = {
  findUsers,
};