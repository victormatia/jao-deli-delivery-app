const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const SalesController = require('../../controller/sales.controller');
const { generateToken } = require('../../utils/generate.token');

const { expect } = chai;
const app = require('../../api/app');

chai.use(chaiHttp);

describe('Sales Route', () => {
  describe('GET /', () => {
    it('should return all sales', async () => {
      const getAllSalesSpy = sinon.spy(SalesController, 'getAll');

      const response = await chai.request(app).get('/customer/orders');

      expect(response.status).to.equal(200);
      expect(response.body.result).to.be.an('array');

      getAllSalesSpy.restore();
    });

    it('should return a sale by id', async () => {
      const getSaleByIdSpy = sinon.spy(SalesController, 'getSaleById');

      const response = await chai.request(app).get('/customer/orders/1');

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');

      getSaleByIdSpy.restore();
    });

    it('should return a sale by user id', async () => {
      const getSaleByUserIdSpy = sinon.spy(SalesController, 'getSaleByUserId');
      const token = generateToken({ id: 1 });

      const response = await chai.request(app)
      .get('/customer/orders/all')
      .set('Authorization', token);

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');

      getSaleByUserIdSpy.restore();
    });
  });

  // describe('POST /', () => {
  //   it('should create a new sale', async () => {
  //     const createSaleSpy = sinon.spy(SalesController, 'create');

  //     const response = await chai.request(app).post('/customer/orders/');

  //     expect(response.status).to.equal(201);
  //     expect(response.body).to.be.an('object');

  //     createSaleSpy.restore();
  //   });
  // });

  // describe('PATCH /', () => {
  //   it('should update a sale', async () => {
  //     const updateSaleSpy = sinon.spy(SalesController, 'update');

  //     const response = await chai.request(app).patch('/customer/orders/1').send({ status: 'Updated' });

  //     expect(response.status).to.equal(200);
  //     expect(response.body).to.be.an('object');
  //     expect(updateSaleSpy.calledOnce).to.be.true;
  //     expect(response.body.status).to.equal('Updated');

  //     updateSaleSpy.restore();
  //   });
  // });
});
