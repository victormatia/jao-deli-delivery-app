const { Router } = require('express');

const userController = require('../controller/register.controller');
const { verifyPassword, verifyEmail, verifyName } = require('../middleware/user.validation');
const { AdminTokenAuthorization } = require('../middleware/registerAdmin.JwtAuthentication');

const route = Router();

route.post(
  '/',
  AdminTokenAuthorization,
  verifyName,
  verifyEmail,
  verifyPassword,
  userController.registerUser,
  );

module.exports = route;
