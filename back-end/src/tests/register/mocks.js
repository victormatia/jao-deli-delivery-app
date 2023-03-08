const md5 = require('md5');
const password = 123456

module.exports = {
  insertRegisterBody: {
    name: 'coquinha geladinha',
    email: 'coquinhageladinha@gmail.com',
    password,
    role: 'customer'
  },

  userMock: {
    id: 4,
    name: 'coquinha geladinha',
    email: 'coquinhageladinha@gmail.com',
    password: md5(password),
    role: 'customer'
  },

  serviceReturnMock: {
    id: 4,
    name: 'coquinha geladinha',
    email: 'coquinhageladinha@gmail.com',
    role: 'customer'
  },

  toGenerateToken: {
    email: 'coquinhageladinha@gmail.com',
    role: 'customer',
    id: 4
  },

  userAlreadyExists: {
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer'
  },

  insertRegisterWithoutRole: {
    name: 'coquinha geladinha',
    email: 'coquinhageladinha@gmail.com',
    password,
  },
};