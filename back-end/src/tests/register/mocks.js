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
    name: 'coquinha geladinha',
    email: 'coquinhageladinha@gmail.com',
    password: md5(password),
    role: 'customer'
  },

  userAlreadyExists: {
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer'
  },

  insertRegisterWithoutRole: {
    name: 'coquinha',
    email: 'coquinhageladinha@gmail.com',
    password,
  },
};