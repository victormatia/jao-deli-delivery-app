const userService = require('../service/register.service');

const userController = {
  createUser: async (req, res) => {
      const { name, email, password } = req.body;
      if (req.params.includes('/customer')) {
        const user = await userService.createUser({ name, email, password, role: 'customer' });
        res.status(201).json(user);
      };
      if (req.params.includes('/seller')) {
        const user = await userService.createUser({ name, email, password, role: 'seller' });
        res.status(201).json(user);
      };
      if (req.params.includes('/administrator')) {
        const user = await userService.createUser({ name, email, password, role: 'administrator' });
        res.status(201).json(user);
      };
    },
};

module.exports = userController;
