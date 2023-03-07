const verifySellerId = (req, res, next) => {
  const { sellerId } = req.body;

  if (!sellerId && typeof sellerId !== 'number') {
    return res.status(400).json({ message: 'Invalid SellerId' });
  }

  next();
};

const verifyTotalPrice = (req, res, next) => {
  const { totalPrice } = req.body;

  if (!totalPrice && typeof totalPrice !== 'number') {
    return res.status(400).json({ message: 'Invalid TotalPrice' });
  }

  next();
};

const verifyDeliveryAddress = (req, res, next) => {
  const { deliveryAddress } = req.body;

  if (!deliveryAddress && typeof deliveryAddress !== 'string') {
    return res.status(400).json({ message: 'Invalid address' });
  }

  next();
};

const verifyDeliveryNumber = (req, res, next) => {
  const { deliveryNumber } = req.body;

  if (!deliveryNumber && typeof deliveryNumber !== 'number') {
    return res.status(400).json({ message: 'Invalid numberAddress' });
  }

  next();
};

const verifyCart = (req, res, next) => {
  const { cart } = req.body;

  if (!cart && typeof cart !== 'object') {
    return res.status(400).json({ message: 'Invalid cart' });
  }

  next();
};

module.exports = {
  verifySellerId,
  verifyTotalPrice,
  verifyDeliveryAddress,
  verifyDeliveryNumber,
  verifyCart,
};
