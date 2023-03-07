const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const verify = require('../../middleware/sale.validation');
const { expect } = chai;
chai.use(sinonChai);


describe('Sales Validation', () => {
  afterEach(() => sinon.restore());
  it('should call next function if sellerId is valid', () => {
    const req = { body: { sellerId: 1 } };
    const res = {};
    const next = sinon.spy();

    verify.verifySellerId(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('should return an error message if sellerId is not valid', () => {
    const req = { body: {} };
    const res = {};
    const next = sinon.spy();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    verify.verifySellerId(req, res, next);
      
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Invalid SellerId' });
    expect(next.notCalled).to.be.true;
  });

  it('should call next function if TotalPrice is valid', () => {
    const req = { body: { totalPrice: 1 } };
    const res = {};
    const next = sinon.spy();

    verify.verifyTotalPrice(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('should return an error message if TotalPrice is not valid', () => {
    const req = { body: {} };
    const res = {};
    const next = sinon.spy();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    verify.verifyTotalPrice(req, res, next);
      
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Invalid TotalPrice' });
    expect(next.notCalled).to.be.true;
  });

  it('should call next function if DeliveryAddress is valid', () => {
    const req = { body: { deliveryAddress: 'Rua tal' } };
    const res = {};
    const next = sinon.spy();

    verify.verifyDeliveryAddress(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('should return an error message if DeliveryAddress is not valid', () => {
    const req = { body: {} };
    const res = {};
    const next = sinon.spy();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    verify.verifyDeliveryAddress(req, res, next);
      
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Invalid address' });
    expect(next.notCalled).to.be.true;
  });

  it('should call next function if DeliveryNumber is valid', () => {
    const req = { body: { deliveryNumber: 1 } };
    const res = {};
    const next = sinon.spy();

    verify.verifyDeliveryNumber(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('should return an error message if DeliveryNumber is not valid', () => {
    const req = { body: {} };
    const res = {};
    const next = sinon.spy();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    verify.verifyDeliveryNumber(req, res, next);
      
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Invalid numberAddress' });
    expect(next.notCalled).to.be.true;
  });

  it('should call next function if verifyCart is valid', () => {
    const req = { body: { cart: [{ productId: 1, quantity: 1 }] } };
    const res = {};
    const next = sinon.spy();

    verify.verifyCart(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('should return an error message if verifyCart is not valid', () => {
    const req = { body: {} };
    const res = {};
    const next = sinon.spy();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    verify.verifyCart(req, res, next);
      
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Invalid cart' });
    expect(next.notCalled).to.be.true;
  });
});
