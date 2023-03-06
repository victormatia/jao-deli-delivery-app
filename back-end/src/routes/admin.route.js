const { Router } = require('express');

const adminController = require('../controller/admin.controller');
const { tokenAuthorization } = require('../middleware/JwtAuthentication');

const route = Router();

route.get('/', tokenAuthorization, adminController.findUsers);
route.delete('/:id', tokenAuthorization, adminController.deleteUser)
route.get('/seller', tokenAuthorization, adminController.findSellers);

module.exports = route;