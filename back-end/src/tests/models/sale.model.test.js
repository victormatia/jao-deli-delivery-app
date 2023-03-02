const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const SaleModel = require('../../database/models/Sale');

describe('model Sale', () => {
  const Sale = SaleModel(sequelize, dataTypes);
  const sale = new Sale();

  describe('possui o nome "Sale"', () => {
    checkModelName(Sale)('Sale');
  });

  describe('possui todas as propriedades', () => {
    ['id', 'user_id', 'seller_id', 'total_price', 'delivery_adress', 'delivery_number', 'sale_date', 'status'].forEach(checkPropertyExists(sale));
  });
});