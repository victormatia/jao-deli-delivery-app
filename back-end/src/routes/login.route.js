const { Router } = require('express');

const loginController = require('../controller/login.controller');
const { verifyPassword, verifyEmail } = require('../middleware/user.validation');

const route = Router();

route.post('/', verifyEmail, verifyPassword, loginController.login);

module.exports = route;