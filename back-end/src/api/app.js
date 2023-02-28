const express = require('express');
const routeUser = require('../routes/register.route');
const routeProduct = require('../routes/product.route');
const routeLogin = require('../routes/login.route');

const app = express();
app.use(express.json());
app.use('/login', routeLogin);
app.use('/register', routeUser);
app.use('/customer/products', routeProduct);

app.use('/images', express.static('public'));
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
