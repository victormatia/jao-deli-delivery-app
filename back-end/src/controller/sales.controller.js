const SalesService = require('../service/sales.service');

const SalesController = {
  create: async (req, res) => {
    const { body, user: { id } } = req;
    const newSale = { ...body, userId: id, status: 'Pendente', sale_date: new Date() };
    const sale = await SalesService.create(newSale);
    res.status(201).json(sale);
  },

  getAll: async (_req, res) => {
    const sales = await SalesService.getAll();
    res.status(200).json(sales);
  },

  getSaleById: async (req, res) => {
    const { id } = req.params;
    const sale = await SalesService.getSaleById(id);
    res.status(200).json(sale);
  },

  getSaleByUserId: async (req, res) => {
    const { id } = req.user;
    const sale = await SalesService.getSaleByUserId(id);
    res.status(200).json(sale);
  },

  getSaleBySellerId: async (req, res) => {
    const { id } = req.user;
    const sale = await SalesService.getSaleBySellerId(id);
    res.status(200).json(sale);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    await SalesService.update(id, status);
    res.status(200).json({ message: 'Status updated successfully!' });
  },
};

module.exports = SalesController;
