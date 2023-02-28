const userService = require('../service/register.service');
const { generateToken } = require('../utils/generate.token');

const userController = {
  registerUser: async (req, res) => {
      const { name, email, password } = req.body;
        const user = await userService.createUser({ name, email, password, role: 'customer' });
        const { status, message } = user;

        if (status && message) {
          return res.status(status).json({ message });
        }

        const token = generateToken({ email, role: user.role, id: user.id });
        return res.status(201).json(token);
    },
};

module.exports = userController;
