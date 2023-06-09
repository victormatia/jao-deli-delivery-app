const verifyPassword = async (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;

  const regex = /\S+@\S+\.\S+/.test(email);

  if (!regex) {
    return res.status(400).json({ message: '"email" must be a valid email.' });
  }

  next();
};

const verifyName = async (req, res, next) => {
  const { name } = req.body;

  if (name.length < 12) {
    return res.status(400).json({ message: '"name" length must be at least 12 characters long' });
  }

  next();
};

const verifyRole = async (req, res, next) => {
  const { role } = req.body;

  if (role === 'administrator') {
    return res.status(400).json({ message: '"role" must be a valid role.' });
  }

  next();
};

module.exports = {
  verifyPassword,
  verifyEmail,
  verifyName,
  verifyRole,
};
