const { Product, Sale, User } = require('../database/models');
const salesProductService = require('../service/sales.products.service');

const salesService = {
  create: async ({ seller, totalPrice, deliveryAdress, deliveryNumber, user: { id }, products }) => {
      const sale = await Sale.create({
        userId: id,
        sellerId: seller,
        totalPrice,
        deliveryAdress,
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
    return { status: 200, result: sale };
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
    return { status: 200, result: sale };
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
    return { status: 200, result: sale };
  },

  update: async (id, status) => {
    await Sale.update({ status }, { where: { id } });
    return { status: 200, message: 'Status updated successfully!' };
  },
};

module.exports = salesService;
