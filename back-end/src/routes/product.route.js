const { Router } = require('express');
const { tokenAuthorization } = require('../middleware/JwtAuthentication');


const productController = require('../controller/product.controller');

const route = Router();

route.get('/', tokenAuthorization, productController.findProducts);

module.exports = route;
