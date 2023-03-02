const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ProductModel = require('../../database/models/Product');

describe('model Product', () => {
  const Product = ProductModel(sequelize, dataTypes);
  const product = new Product();

  describe('possui o nome "Product"', () => {
    checkModelName(Product)('Product');
  });

  describe('possui todas as propriedades', () => {
    ['id', 'name', 'price', 'url_image'].forEach(checkPropertyExists(product));
  });
});