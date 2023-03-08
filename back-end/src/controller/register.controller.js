const userService = require('../service/register.service');

const userController = {
  registerUser: async (req, res) => {
    const { name, email, password, role } = req.body;
    const {
      status, message, result,
    } = await userService.createUser({ name, email, password, role });

    if (message) {
      return res.status(status).json({ status, message });
    }

    return res.status(201).json({ status, result });
  },
};

module.exports = userController;
