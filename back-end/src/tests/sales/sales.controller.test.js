const sinon = require('sinon');
const SalesController = require('../../controller/sales.controller');
const SalesService = require('../../service/sales.service');


describe('SalesController', () => {
  after(() => sinon.restore());
  describe('create', () => {
    it('should call SalesService.create with request body and return response', async () => {
      const requestBody = { status: 200, result:'insert request body here' };
      const expectedResponse = { status: 200, result: 'insert result here' };

      const createStub = sinon.stub(SalesService, 'create').resolves(expectedResponse);

      const req = { body: requestBody };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await SalesController.create(req, res);

      sinon.assert.calledWithExactly(createStub, requestBody);
      sinon.assert.calledWithExactly(res.status, expectedResponse.status);
      sinon.assert.calledWithExactly(res.json, expectedResponse);

      createStub.restore();
    });

    // it('should return error response when SalesService.create throws an error', async () => {
    //   const requestBody = { status: 200, result:'insert request body here' };
    //   const expectedError = new Error('SalesService.create error');

    //   const createStub = sinon.stub(SalesService, 'create').rejects(expectedError);

    //   const req = { body: requestBody };
    //   const res = {
    //     status: sinon.stub().returnsThis(),
    //     json: sinon.stub(),
    //   };

    //   await SalesController.create(req, res);

    //   sinon.assert.calledWithExactly(createStub, requestBody);
    //   sinon.assert.calledWithExactly(res.status, 500);
    //   sinon.assert.calledWithExactly(res.json, { status: 500, error: expectedError.message });

    //   createStub.restore();
    // });
  });

  describe('getAll', () => {
    it('should call SalesService.getAll and return response', async () => {
      const expectedResponse = { status: 200, result: 'insert result here' };

      const getAllStub = sinon.stub(SalesService, 'getAll').resolves(expectedResponse);

      const req = {};
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await SalesController.getAll(req, res);

      sinon.assert.calledWithExactly(getAllStub);
      sinon.assert.calledWithExactly(res.status, expectedResponse.status);
      sinon.assert.calledWithExactly(res.json, expectedResponse);

      getAllStub.restore();
    });

    // it('should return error response when SalesService.getAll throws an error', async () => {
    //   const expectedError = new Error('SalesService.getAll error');

    //   const getAllStub = sinon.stub(SalesService, 'getAll').rejects(expectedError);

    //   const req = {};
    //   const res = {
    //     status: sinon.stub().returnsThis(),
    //     json: sinon.stub(),
    //   };

    //   await SalesController.getAll(req, res);

    //   sinon.assert.calledWithExactly(getAllStub);
    //   sinon.assert.calledWithExactly(res.status, 500);
    //   sinon.assert.calledWithExactly(res.json, { status: 500, error: expectedError.message });

    //   getAllStub.restore();
    // });
  });

  describe('getSaleById', () => {
    it('should call SalesService.getSaleById with id from request params and return response', async () => {
      const id = 'insert id here';
      const expectedResponse = { status: 200, result: 'insert result here' };

      const getSaleByIdStub = sinon.stub(SalesService, 'getSaleById').resolves(expectedResponse);

      const req = { params: { id } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await SalesController.getSaleById(req, res);

      sinon.assert.calledWithExactly(getSaleByIdStub, id);
      sinon.assert.calledWithExactly(res.status, expectedResponse.status);
      sinon.assert.calledWithExactly(res.json, expectedResponse);

      getSaleByIdStub.restore();
    });

    // it('should return error response when SalesService.getSaleById throws an error', async () => {
    //   const id = 'insert id here';
    //   const expectedError = new Error('SalesService.getSaleById error');

    //   const getSaleByIdStub = sinon.stub(SalesService, 'getSaleById').rejects(expectedError);

    //   const req = { params: { id } };
    //   const res = {
    //     status: sinon.stub().returnsThis(),
    //     json: sinon.stub(),
    //   };

    //   await SalesController.getSaleById(req, res);

    //   sinon.assert.calledWithExactly(getSaleByIdStub, id);
    //   sinon.assert.calledWithExactly(res.status, 500);
    //   sinon.assert.calledWithExactly(res.json, { status: 500, error: expectedError.message });

    //   getSaleByIdStub.restore();
    // });
  });

  describe('getSaleByUserId', () => {
    it('should call SalesService.getSaleByUserId with id from request params and return response', async () => {
      const id = 'insert id here';
      const expectedResponse = { status: 200, result: 'insert result here' };

      const getSaleByUserIdStub = sinon.stub(SalesService, 'getSaleByUserId').resolves(expectedResponse);

      const req = { user: { id } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await SalesController.getSaleByUserId(req, res);

      sinon.assert.calledWithExactly(getSaleByUserIdStub, id);
      sinon.assert.calledWithExactly(res.status, expectedResponse.status);
      sinon.assert.calledWithExactly(res.json, expectedResponse);

      getSaleByUserIdStub.restore();
    });

    // it('should return error response when SalesService.getSaleByUserId throws an error', async () => {
    //   const id = 'insert id here';
    //   const expectedError = new Error('SalesService.getSaleByUserId error');

    //   const getSaleByUserIdStub = sinon.stub(SalesService, 'getSaleByUserId').rejects(expectedError);

    //   const req = { user: { id } };
    //   const res = {
    //     status: sinon.stub().returnsThis(),
    //     json: sinon.stub(),
    //   };

    //   await SalesController.getSaleByUserId(req, res);

    //   sinon.assert.calledWithExactly(getSaleByUserIdStub, id);
    //   sinon.assert.calledWithExactly(res.status, 500);
    //   sinon.assert.calledWithExactly(res.json, { status: 500, error: expectedError.message });

    //   getSaleByUserIdStub.restore();
    // });
  });

  describe('getSaleBySellerId', () => {
    it('should call SalesService.getSaleBySellerId with id from request params and return response', async () => {
      const id = 'insert id here';
      const expectedResponse = { status: 200, result: 'insert result here' };

      const getSaleBySellerIdStub = sinon.stub(SalesService, 'getSaleBySellerId').resolves(expectedResponse);

      const req = { user: { id } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await SalesController.getSaleBySellerId(req, res);

      sinon.assert.calledWithExactly(getSaleBySellerIdStub, id);
      sinon.assert.calledWithExactly(res.status, expectedResponse.status);
      sinon.assert.calledWithExactly(res.json, expectedResponse);

      getSaleBySellerIdStub.restore();
    });

    // it('should return error response when SalesService.getSaleBySellerId throws an error', async () => {
    //   const id = 'insert id here';
    //   const expectedError = new Error('SalesService.getSaleBySellerId error');

    //   const getSaleBySellerIdStub = sinon.stub(SalesService, 'getSaleBySellerId').rejects(expectedError);

    //   const req = { user: { id } };
    //   const res = {
    //     status: sinon.stub().returnsThis(),
    //     json: sinon.stub(),
    //   };

    //   await SalesController.getSaleBySellerId(req, res);

    //   sinon.assert.calledWithExactly(getSaleBySellerIdStub, id);
    //   sinon.assert.calledWithExactly(res.status, 500);
    //   sinon.assert.calledWithExactly(res.json, { status: 500, error: expectedError.message });

    //   getSaleBySellerIdStub.restore();
    // });
  });

  describe('update', () => {
    it('should call SalesService.update with id and request body and return response', async () => {
      const id = 'insert id here';
      const requestBody = { status: 200, message:'insert request body here' };
      const expectedResponse = { status: 200, message: 'insert result here' };

      const updateStub = sinon.stub(SalesService, 'update').resolves(expectedResponse);

      const req = { params: { id }, body: requestBody };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await SalesController.update(req, res);

      sinon.assert.calledWithExactly(updateStub, id, requestBody);
      sinon.assert.calledWithExactly(res.status, expectedResponse.status);
      sinon.assert.calledWithExactly(res.json, expectedResponse);

      updateStub.restore();
    });

    // it('should return error response when SalesService.update throws an error', async () => {
    //   const id = 'insert id here';
    //   const requestBody = { status: 200, message:'insert request body here' };
    //   const expectedError = new Error('SalesService.update error');

    //   const updateStub = sinon.stub(SalesService, 'update').rejects(expectedError);

    //   const req = { params: { id }, body: requestBody };
    //   const res = {
    //     status: sinon.stub().returnsThis(),
    //     json: sinon.stub(),
    //   };

    //   await SalesController.update(req, res);

    //   sinon.assert.calledWithExactly(updateStub, id, requestBody);
    //   sinon.assert.calledWithExactly(res.status, 500);
    //   sinon.assert.calledWithExactly(res.json, { status: 500, error: expectedError.message });

    //   updateStub.restore();
    // });
  });
});
