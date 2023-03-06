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
    ['id', 'userId', 'sellerId', 'totalPrice', 'deliveryAddress', 'deliveryNumber', 'saleDate', 'status'].forEach(checkPropertyExists(sale));
  });
});