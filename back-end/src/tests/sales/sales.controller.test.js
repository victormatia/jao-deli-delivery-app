const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const SalesController = require('../../controller/sales.controller');
const SalesService = require('../../service/sales.service');

describe('SalesController', () => {
  describe('create()', () => {
    it('should create a new sale and return the sale object', async () => {
      const fakeRequest = {
        body: { product: 'Product 1', quantity: 2 },
        user: { id: '12345' }
      };
      const fakeResponse = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      };
      const expectedResponse = { id: '67890', product: 'Product 1', quantity: 2, userId: '12345', status: 'Pendente', saleDate: new Date() };
      sinon.stub(SalesService, 'create').returns(expectedResponse);

      await SalesController.create(fakeRequest, fakeResponse);

      assert.deepStrictEqual(fakeResponse.status.firstCall.args, [201]);
      assert.deepStrictEqual(fakeResponse.json.firstCall.args, [expectedResponse]);
      SalesService.create.restore();
    });
  });

  describe('getAll()', () => {
    it('should get all sales and return an array of sale objects', async () => {
      const fakeRequest = {};
      const fakeResponse = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      };
      const expectedResponse = [
        { id: '67890', product: 'Product 1', quantity: 2, userId: '12345', status: 'Pendente', saleDate: new Date() },
        { id: '24680', product: 'Product 2', quantity: 1, userId: '54321', status: 'Concluído', saleDate: new Date() }
      ];
      sinon.stub(SalesService, 'getAll').returns(expectedResponse);

      await SalesController.getAll(fakeRequest, fakeResponse);

      assert.deepStrictEqual(fakeResponse.status.firstCall.args, [200]);
      assert.deepStrictEqual(fakeResponse.json.firstCall.args, [expectedResponse]);
      SalesService.getAll.restore();
    });
  });

  describe('getSaleById()', () => {
    it('should get a sale by id and return the sale object', async () => {
      const fakeRequest = { params: { id: '67890' } };
      const fakeResponse = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      };
      const expectedResponse = { id: '67890', product: 'Product 1', quantity: 2, userId: '12345', status: 'Pendente', saleDate: new Date() };
      sinon.stub(SalesService, 'getSaleById').returns(expectedResponse);

      await SalesController.getSaleById(fakeRequest, fakeResponse);

      assert.deepStrictEqual(fakeResponse.status.firstCall.args, [200]);
      assert.deepStrictEqual(fakeResponse.json.firstCall.args, [expectedResponse]);
      SalesService.getSaleById.restore();
    });
  });

  describe('getSaleByUserId()', () => {
    it('should return a sale when a valid user id is provided', async () => {
      const fakeUserId = '123';
      const fakeSale = { id: '456', userId: fakeUserId, status: 'Pendente', saleDate: new Date() };
      const req = { user: { id: fakeUserId } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().resolves(fakeSale)
      };
      sinon.stub(SalesService, 'getSaleByUserId').resolves(fakeSale);

      await SalesController.getSaleByUserId(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(fakeSale)).to.be.true;

      SalesService.getSaleByUserId.restore();
    });

    // it('should return an error when an invalid user id is provided', async () => {
    //   const fakeUserId = '123';
    //   const errorMessage = 'Invalid user id';
    //   const req = { user: { id: fakeUserId } };
    //   const res = {
    //     status: sinon.stub().returnsThis(),
    //     json: sinon.stub().throws(new Error(errorMessage))
    //   };
    //   sinon.stub(SalesService, 'getSaleByUserId').throws(new Error(errorMessage));

    //   await SalesController.getSaleByUserId(req, res);

    //   expect(res.status.calledWith(500)).to.be.true;
    //   expect(res.json.threw()).to.be.true;

    //   SalesService.getSaleByUserId.restore();
    // });
  });

  describe('getSaleBySellerId()', () => {
    it('should return an array of sales', async () => {
      const userId = '123';
      const sales = [{ id: '1', userId, sellerId: '456', status: 'Pendente' }, { id: '2', userId, sellerId: '456', status: 'Aprovado' }];
      const req = { user: { id: userId } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
      sinon.stub(SalesService, 'getSaleBySellerId').resolves(sales);

      await SalesController.getSaleBySellerId(req, res);

      assert(res.status.calledWith(200));
      assert(res.json.calledWith(sales));
      SalesService.getSaleBySellerId.restore();
    });

    it('should return an empty array if there are no sales', async () => {
      const userId = '123';
      const sales = [];
      const req = { user: { id: userId } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
      sinon.stub(SalesService, 'getSaleBySellerId').resolves(sales);

      await SalesController.getSaleBySellerId(req, res);

      assert(res.status.calledWith(200));
      assert(res.json.calledWith(sales));
      SalesService.getSaleBySellerId.restore();
    });

    // it('should return a 500 status if an error occurs', async () => {
    //   const userId = '123';
    //   const req = { user: { id: userId } };
    //   const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    //   sinon.stub(SalesService, 'getSaleBySellerId').rejects(new Error('Database error'));

    //   await SalesController.getSaleBySellerId(req, res);

    //   assert(res.status.calledWith(500));
    //   assert(res.json.calledWith({ error: 'Database error' }));
    //   SalesService.getSaleBySellerId.restore();
    // });
  });

  describe('update()', () => {
    it('should update the status of a sale and return a success message', async () => {
      const req = { params: { id: '123' }, body: { status: 'Concluído' } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
      const updateStub = sinon.stub(SalesService, 'update');
      updateStub.withArgs(req.params.id, req.body.status).resolves();

      await SalesController.update(req, res);

      sinon.assert.calledOnceWithExactly(updateStub, req.params.id, req.body.status);
      sinon.assert.calledOnce(res.status);
      sinon.assert.calledOnce(res.json);
      sinon.assert.calledWith(res.status, 200);
      sinon.assert.calledWith(res.json, { message: 'Status updated successfully!' });

      updateStub.restore();
    });

    // it('should return an error message if the sale id is not provided', async () => {
    //   const req = { params: {}, body: { status: 'Concluído' } };
    //   const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    //   await SalesController.update(req, res);

    //   sinon.assert.notCalled(res.status);
    //   sinon.assert.notCalled(res.json);
    // });

    // it('should return an error message if the sale status is not provided', async () => {
    //   const req = { params: { id: '123' }, body: {} };
    //   const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    //   await SalesController.update(req, res);

    //   sinon.assert.notCalled(res.status);
    //   sinon.assert.notCalled(res.json);
    // });

    // it('should return an error message if the sale update fails', async () => {
    //   const req = { params: { id: '123' }, body: { status: 'Concluído' } };
    //   const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    //   const updateStub = sinon.stub(SalesService, 'update');
    //   updateStub.withArgs(req.params.id, req.body.status).rejects(new Error('Update failed'));

    //   await SalesController.update(req, res);

    //   sinon.assert.calledOnceWithExactly(updateStub, req.params.id, req.body.status);
    //   sinon.assert.notCalled(res.status);
    //   sinon.assert.notCalled(res.json);

    //   updateStub.restore();
    // });
  });
});
