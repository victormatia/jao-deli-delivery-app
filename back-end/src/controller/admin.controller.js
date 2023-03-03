const adminService = require('../service/admin.service');

const adminController = {
  findUsers: async (_req, res) => {
    const { status, result } = await adminService.findUsers();

    return res.status(status).json({ status, result });
  },

  deleteUser: async (req, res) => {
    const { status, result, message } = await adminService.deleteUser(req.params.id);

    if (message) return res.status(status).json({ status, message });

    return res.status(status).json({ status, result })
  },
};

module.exports = adminController;