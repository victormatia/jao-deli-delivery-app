const loginService = require('../service/login.service');

const loginController = {
    login: async (req, res) => {
      const { email, password } = req.body;
      const { status, result, message } = await loginService.login(email, password);

      if (message) return res.status(status).json({ status, message });

      return res.status(status).json({ status, result });
  },
};

module.exports = loginController;