const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productService = require('../../service/product.service');
const { findProducts } = require('../../controller/product.controller');
const { productsMock } = require('./mock');

describe('testa a camada controller para a rota /product', () => {

  afterEach(sinon.restore);

  describe('testa a função findProducts', () => {
    it('retorna todos os produtos', async () => {

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'findProducts').resolves({ status: 200, result: productsMock });

      await findProducts(req, res);

      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith({ status: 200, result: productsMock })
    })
  })
})
