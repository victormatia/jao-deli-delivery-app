const { Router } = require('express');
const SalesController = require('../controller/sales.controller');

const route = Router();

route.get('/:id', SalesController.getSaleById);
route.get('/all', SalesController.getSaleBySellerId);

module.exports = route;
