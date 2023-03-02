const loginService = require('../service/user.service');

const loginController = {
  findUsers: async (_req, res) => {
    const { status, result } = await loginService.findUsers();

    return res.status(status).json({ status, result });
  }
};

module.exports = loginController;