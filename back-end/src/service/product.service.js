const { Product } = require('../database/models');

const findProducts = async () => {
  const products = await Product.findAll();

  return products;
}

module.exports = {
  findProducts,
}