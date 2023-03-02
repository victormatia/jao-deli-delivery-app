const SalesService = require('../service/sales.service');

const SalesController = {
  create: async (req, res) => {
    const { status, result } = await SalesService.create(req.body);
    res.status(status).json({ status, result });
  },

  getAll: async (_req, res) => {
    const { status, result } = await SalesService.getAll();
    res.status(status).json({ status, result });
  },

  getSaleById: async (req, res) => {
    const { id } = req.params;
    const { status, result } = await SalesService.getSaleById(id);
    res.status(status).json({ status, result });
  },

  getSaleByUserId: async (req, res) => {
    const { id } = req.user;
    const { status, result } = await SalesService.getSaleByUserId(id);
    res.status(status).json({ status, result });
  },

  getSaleBySellerId: async (req, res) => {
    const { id } = req.user;
    const { status, result } = await SalesService.getSaleBySellerId(id);
    res.status(status).json({ status, result });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { status, message } = await SalesService.update(id, req.body);
    res.status(status).json({ status, message });
  },
};

module.exports = SalesController;
