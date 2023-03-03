const { Router } = require('express');

const userController = require('../controller/user.controller');
const { tokenAuthorization } = require('../middleware/JwtAuthentication');

const route = Router();

route.get('/', tokenAuthorization, userController.findUsers);

module.exports = route;