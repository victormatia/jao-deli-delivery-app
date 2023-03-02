const userService = require('../service/register.service');
const { generateToken } = require('../utils/generate.token');

const userController = {
  registerUser: async (req, res) => {
      const { name, email, password, role } = req.body;
        const { status, message, result } = await userService.createUser({ name, email, password, role });

        if (message) {
          return res.status(status).json({ status, message });
        }

        const token = generateToken({ email, role: result.role, id: result.id });
        return res.status(201).json({ status, token, result });
    },
};

module.exports = userController;
