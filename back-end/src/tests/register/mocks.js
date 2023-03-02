const md5 = require('md5');
const password = 123456

module.exports = {
  insertRegisterBody: {
    name: 'coquinha geladinha',
    email: 'coquinhageladinha@gmail.com',
    password,
    role: 'consumer',
  },

  userMock: {
    name: 'coquinha geladinha',
    email: 'coquinhageladinha@gmail.com',
    password: md5(password),
    role: 'consumer'
  }
};