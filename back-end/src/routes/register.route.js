const { Router } = require('express');

const route = Router();

const userController = require('../controller/register.controller');

route.post('/', userController.createUser);

module.exports = route;
