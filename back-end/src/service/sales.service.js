const { Product, Sale, User } = require('../database/models');
const salesProductService = require('./sales.products.service');

const salesService = {
  create: async ({ seller, totalPrice, deliveryAddress,
    deliveryNumber, user: { id }, products }) => {
      const sale = await Sale.create({
        userId: id,
        sellerId: seller,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        status: 'Pendente',
        saleDate: new Date().toISOString(),
      });
    await salesProductService.create({ products, saleId: sale.id });

    return { status: 201, result: sale };
  },

  getAll: async () => {
    const sales = await Sale.findAll();
    return { status: 200, result: sales };
  },

  getSaleById: async (id) => {
    const sale = await Sale.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: 'seller',
          attributes: { exclude: ['password', 'role'] },
        },
        {
          model: Product,
          as: 'product',
          attributes: { exclude: ['urlImage'] },
        },
      ],
    });
    return { status: 200, result: sale };
  },

  getSaleByUserId: async (id) => {
    const sale = await Sale.findAll({
      where: { userId: id },
      include: [
        {
          model: Product,
          as: 'product',
          attributes: { exclude: ['urlImage'] },
        },
      ],
    });
    return { status: 200, result: sale };
  },

  getSaleBySellerId: async (id) => {
    const sale = await Sale.findAll({
      where: { sellerId: id },
      include: [
        {
          model: Product,
          as: 'product',
          attributes: { exclude: ['urlImage'] },
        },
      ],
    });
    return { status: 200, result: sale };
  },

  update: async (id, status) => {
    await Sale.update({ status }, { where: { id } });
    return { status: 200, message: 'Status updated successfully!' };
  },
};

module.exports = salesService;
