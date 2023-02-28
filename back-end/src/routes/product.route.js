const { Router } = require('express');

const productController = require('../controller/product.controller');

const route = Router();

route.post('/', productController.findProducts);

module.exports = route;
