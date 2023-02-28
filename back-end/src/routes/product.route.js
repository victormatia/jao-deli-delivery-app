const { Router } = require('express');

const productController = require('../controller/product.controller');

const route = Router();

route.get('/', productController.findProducts);

module.exports = route;
