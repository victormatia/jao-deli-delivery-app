const { Router } = require('express');
const SalesController = require('../controller/sales.controller');
const { tokenAuthorization } = require('../middleware/JwtAuthentication'); 

const route = Router();

route.get('/:id', SalesController.getSaleById);
route.get('/all', tokenAuthorization, SalesController.getSaleBySellerId);

module.exports = route;
