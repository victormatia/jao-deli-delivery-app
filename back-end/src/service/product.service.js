const { Product } = require('../database/models');

const findProducts = async () => {
  const products = await Product.findAll();

  return { status: 200, result: products };
};

module.exports = {
  findProducts,
};