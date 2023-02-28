const { Router } = require('express');
const SalesController = require('../controllers/sales.controller');

const route = Router();

route.post('/', SalesController.create);
route.get('/', SalesController.getAll);
route.get('/:id', SalesController.getSaleById);
route.get('/all', SalesController.getSaleByUserId);
route.patch('/:id', SalesController.update);

module.exports = route;
