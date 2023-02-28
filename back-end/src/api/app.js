const express = require('express');
const routeUser = require('../routes/register.route');
const routeLogin = require('../routes/login.route');
const routeSales = require('../routes/sales.route');
const routeSeller = require('../routes/seller.route');

const app = express();
app.use(express.json());
app.use('/login', routeLogin);
app.use('/register', routeUser);
app.use('/customer/orders', routeSales);
app.use('/seller/orders', routeSeller);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
