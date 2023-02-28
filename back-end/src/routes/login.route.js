const { Router } = require('express');
const { tokenAuthorization } = require('../middleware/JwtAuthentication');

const loginController = require('../controller/login.controller');
const { verifyPassword, verifyEmail } = require('../middleware/user.validation');

const route = Router();

route.post('/', tokenAuthorization, verifyEmail, verifyPassword, loginController.login);

module.exports = route;