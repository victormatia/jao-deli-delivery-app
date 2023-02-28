const productService = require('../service/product.service');

const productController = {
  findProducts: async (_req, res) => {
    const products = await productService.findProducts();
  
    return res.status(200).json(products);
  },
};

module.exports = productController;
