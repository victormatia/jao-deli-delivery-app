const { Router } = require('express');
const SalesController = require('../controller/sales.controller');
const { tokenAuthorization } = require('../middleware/JwtAuthentication'); 
const { 
  verifySellerId,
  verifyTotalPrice,
  verifyDeliveryAdress,
  verifyDeliveryNumber,
  verifyCart,
} = require('../middleware/sale.validation');

const route = Router();

route.post('/', tokenAuthorization, verifySellerId, verifyTotalPrice, verifyDeliveryAdress,
  verifyDeliveryNumber, verifyCart, SalesController.create);
route.get('/', SalesController.getAll);
route.get('/:id', SalesController.getSaleById);
route.get('/all', tokenAuthorization, SalesController.getSaleByUserId);
route.patch('/:id', SalesController.update);

module.exports = route;
