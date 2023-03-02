const { sales_products: SaleProduct,
  Product,
  Sale,
  User,
} = require('../database/models');

const salesService = {
  create: async (newSale) => {
    const sale = await Sale.create({ ...newSale });

    await Promise.all(newSale.cart.map((product) => {
      const saleProduct = SaleProduct.create({
        saleId: sale.id,
        productId: product.id,
        quantity: product.quantity,
      });
      return saleProduct;
    }));

    return sale;
  },

  getAll: async () => {
    const sales = await Sale.findAll();
    return sales;
  },

  getSaleById: async (id) => {
    const sale = await Sale.findByPk(id, {
      include: [
        {
          model: User,
          as: 'sellers',
          attributes: { exclude: ['password', 'id', 'email', 'role'] },
        },
        {
          model: Product,
          as: 'sale',
        },
      ],
    });
    return sale;
  },

  getSaleByUserId: async (id) => {
    const sale = await Sale.findAll({
      where: { userId: id },
      attributes: {
        exclude: [
          'userId',
          'sellerId',
          'deliveryAddress',
          'deliveryNumber',
        ],
      }, 
    });
    return sale;
  },

  getSaleBySellerId: async (id) => {
    const sale = await Sale.findAll({
      where: { sellerId: id },
      attributes: {
        exclude: [
          'userId',
          'sellerId',
        ],
      },
    });
    return sale;
  },

  update: async (id, status) => {
    const sale = await Sale.update({ status }, { where: { id } });
    return sale;
  },
};

module.exports = salesService;
