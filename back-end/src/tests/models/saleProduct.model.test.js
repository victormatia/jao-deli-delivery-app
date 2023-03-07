const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const SaleProductModel = require('../../database/models/SaleProduct');

describe('model SaleProduct', () => {
  const SaleProduct = SaleProductModel(sequelize, dataTypes);
  const saleProduct = new SaleProduct();

  describe('possui o nome "SaleProduct"', () => {
    checkModelName(SaleProduct)('SaleProduct');
  });

  describe('possui todas as propriedades', () => {
    ['sale_id', 'product_id', 'quantity'].forEach(checkPropertyExists(saleProduct));
  });
});