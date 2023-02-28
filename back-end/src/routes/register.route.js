const { Router } = require('express');

const userController = require('../controller/register.controller');
const { verifyPassword, verifyEmail, verifyName } = require('../middleware/user.validation');

const route = Router();

route.post('/', verifyName, verifyEmail, verifyPassword, userController.registerUser);

module.exports = route;
