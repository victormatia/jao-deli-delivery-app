const productService = require('../service/product.service');

const productController = {
  findProducts: async (_req, res) => {
    const { status, result } = await productService.findProducts();
  
    return res.status(status).json({ status, result });
  },
};

module.exports = productController;
