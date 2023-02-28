const loginService = require('../service/login.service');

const loginController = {
    login: async (req, res) => {
      const { email, password } = req.body;
      const validatedUser = await loginService.login(email, password);
      return res.status(200).json(validatedUser);
  },
};

module.exports = loginController;