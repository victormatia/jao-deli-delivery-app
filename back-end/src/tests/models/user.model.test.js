const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../database/models/User');

describe('model User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('possui todas as propriedades', () => {
    ['id', 'name', 'email', 'password', 'role'].forEach(checkPropertyExists(user));
  });
});