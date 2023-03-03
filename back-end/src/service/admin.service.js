const { User } = require('../database/models');

const findUsers = async () => {
  const users = await User.findAll();

  return { status: 200, result: users };
};

const deleteUser = async (id) => {
  const user = await User.destroy({ where: { id } });

  if(!user) return { status: 404, message: 'User not found' };

  return { status: 204, result: user };
};


module.exports = {
  findUsers,
  deleteUser,
};